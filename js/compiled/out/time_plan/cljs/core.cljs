(ns time-plan.cljs.core
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node]]
    [cljs.core.async.macros :refer [go alt!]]
    [mount.core :refer [defstate]]
    )
  (:require
    [cljs.time-plan.external-api.transform :refer [members->transactions]]
    [cljs.test :as tst :include-macros true :refer-macros [testing is async]]
    [cljs-time.core :as dt :refer [seconds minutes hours ago from-now plus now]]
    [cljs-time.format :as dtf :refer [formatter unparse]]
    [clojure.walk :refer [keywordize-keys]]
    [datascript.core :as d]
    [mount.core :as mount]
    [cljs.pprint :refer [pprint]]
    [goog.net.XhrIo]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.core.async :refer [>! <! chan put! close! timeout]]
    [sablono.core :include-macros true]
    [cognitect.transit :as t]
    )
  )

(enable-console-print!)

(defonce state (atom {}))

(defn request-uri
  ([uri] (request-uri (chan) uri))
  ([c uri]
   (goog.net.XhrIo.send (goog.Uri. uri) #(put! c (-> %
                                                     .-target
                                                     .getResponseJson)))
   c))

(defn add-members [conn members]
  (d/transact! conn (members->transactions members)))

(def ->tokens (chan))

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
      (dom/div nil (concat      ;todo template lang or threading to clean up this concat mess
                     (concat
                       [(when (= 0 (count @conn))
                          (dom/p nil ["Go get your slack token from "
                                      (dom/a #js {:href "https://api.slack.com/web"
                                                  } "https://api.slack.com/web")]))
                        (when (= 0 (count @conn))
                          (dom/img #js {:src "img/token.png"
                                        :width 600
                                        :style #js {:border "1px solid #909090"}}))
                          (dom/br nil)]
                       (concat [(when (= 0 (count @conn))
                                        (dom/input #js {:type        "text"
                                                        :value       (:token @state)
                                                        :onChange    (fn [e] (swap! state assoc :token (-> e .-target .-value)))
                                                        :placeholder "slack token"}))]
                                     [(when (= 0 (count @conn))
                                        (dom/button #js {:onClick #(when-let [token (:token @state)]
                                                                    (go (>! ->tokens token)))}
                                                    "show timezones"))]))
                     [(dom/div #js {:style #js {:display        "flex"
                                                :flexDirection  "row"
                                                :flexWrap       "nowrap"
                                                :justifyContent "space-between"}}
                               (concat
                                 (map timezone-component list)))])))))

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

(defmethod mutate 'time-plan.cljs.core/update-db
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


(def ke (go (let [token (<! ->tokens)]
              (go (let [users (<! (request-uri (str "https://slack.com/api/users.list?token=" token)))]
                    (add-members conn (keywordize-keys (get (js->clj users {:keywordize-keys true}) "members")))
                    (om/transact! r `[(time-plan.cljs.core/update-db)])
                    )))))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (om/add-root! r
                  TimezonesComponent
                  node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

