(ns time-plan.devcards.core
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node]]
    [cljs.core.async.macros :refer [go alt!]]
    [mount.core :refer [defstate]]
    )
  (:require
    [cljs.test :as tst :include-macros true :refer-macros [testing is async]]
    [cljs-time.core :as dt :refer [seconds minutes hours ago from-now plus now]]
    [cljs-time.format :as dtf :refer [formatter unparse]]
    [datascript.core :as d]
    [mount.core :as mount]
    [cljs.pprint :refer [pprint]]
    [goog.net.XhrIo]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.core.async :refer [>! <! chan put! close! timeout]]
    [sablono.core :include-macros true]
    [cognitect.transit :as t]
    ))

(enable-console-print!)

(defonce state (atom {}))

(defn request-uri
  ([uri] (request-uri (chan) uri))
  ([c uri]
   (goog.net.XhrIo.send (goog.Uri. uri) #(put! c (-> %
                                                     .-target
                                                     .getResponseJson)))
   c))


(defonce conn (d/create-conn {:member/timezone {:db/valueType   :db.type/ref
                                                :db/cardinality :db.cardinality/one}}))

(defui MemberComponent
  static om/IQuery
  (query [this]
    [:db/id :member/name :member/real_name :member/image])
  Object
  (render [this]
    (let [{:keys [member/name member/real_name member/image]} (om/props this)]
      (dom/div nil [(dom/img #js {:style #js {:width 50 :height 50 :borderRadius 25}
                                  :src   image})]))))

(def member-component (om/factory MemberComponent {:keyfn :db/id}))

(defn local-time-string [offset]
  (unparse (formatter "H:mm A") (-> offset seconds from-now)))

(defn hours-with-sign [seconds] (let [sign (when (not (neg? seconds)) "+")
                                      hours (/ seconds 60 60)]
                                  (str sign hours ":00")))

(defui TimezoneComponent
  static om/IQuery
  (query [this]
    `[:db/id :timezone/offset :timezone/name :timezone/label {:member/_timezone ~(om/get-query MemberComponent)}])
  Object
  (render [this]
    (let [{:keys [:timezone/offset :timezone/label :member/_timezone]} (om/props this)]
      (dom/div nil [(dom/div {:key "offset"} (local-time-string offset))
                    (dom/div {:key "label"} label)
                    (dom/div {:key "offset-hours"} (hours-with-sign offset))
                    (dom/div #js {:style #js {:display       "flex"
                                              :flexDirection "row"
                                              :width         150
                                              :flexWrap      "wrap"}} (map member-component _timezone))]))))


(def timezone-component (om/factory TimezoneComponent {:keyfn :db/id}))

(defui TimezonesComponent
  static om/IQuery
  (query [this] `[{:timezone/list ~(om/get-query TimezoneComponent)}])
  Object
  (render [this]
    (let [{:keys [timezone/list]} (om/props this)]
      (dom/div #js {:style #js {:display        "flex"
                                :flexDirection  "row"
                                :flexWrap       "nowrap"
                                :justifyContent "space-between"}}
               (concat
                 [(dom/p nil "")]
                 (map timezone-component list))))))

(defmulti read om/dispatch)

(defmethod read :timezone/list
  [{:keys [state parser query] :as env} key params]
  {:value (->> (map #(d/pull @conn (om/get-query TimezoneComponent) %)
                    (flatten (into [] (d/q '[:find ?e
                                             :where
                                             [?e :timezone/offset]]
                                           @conn))))
               (sort-by :timezone/offset))})

(defmulti mutate om/dispatch)

(defmethod mutate 'time-plan.devcards.core/update-db
  [{:keys [state] :as env} key params]
  (swap! state merge
         (om/tree->db
           TimezonesComponent
           {:timezone/list
            (into [] (map (partial zipmap [:timezone/name :timezone/offset :timezone/label])
                          (d/q '[:find ?tz ?tz_off ?tz_lbl
                                 :where
                                 [?e :member/tz ?tz]
                                 [?e :member/tz_offset ?tz_off]
                                 [?e :member/tz_label ?tz_lbl]
                                 ]
                               @conn)))} true)))

(def p (om/parser {:read   read
                   :mutate mutate}))

(def r (om/reconciler {:state  state
                       :parser p}))

;(om/transact! r `[(time-plan.devcards.core/update-db)])

(defcard timezone-component
         (dom-node
           (fn [_ node]
             (om/add-root! r
                           TimezonesComponent
                           node))))