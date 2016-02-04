(ns cljs.time-plan.external-api.transform
  (:require
    [clojure.set :refer [rename-keys]]
    [clojure.walk :refer [keywordize-keys]]
    [cognitect.transit :as t]
    )
  )


(def should-not-have-attributes #{:deleted :is_bot :is_restricted :is_ultra_restricted})

(defn members [member-obj]
  (->> member-obj
       (filter
         (fn [member]
           (not-any? (fn [not-has-key] (not-has-key member))
                     should-not-have-attributes)))
       (map
         (fn [member]
           (select-keys member
                        [:name :profile :real_name :tz :tz_label :tz_offset :id])))))

(defn append-id [member]
  (assoc member :member/slack-id (:member/id member)))

(defn get-timezone
  [member]
  (rename-keys (select-keys member [:member/tz_offset :member/tz_label :member/tz])
               (zipmap [:member/tz_offset :member/tz_label :member/tz]
                       [:timezone/offset :timezone/label :timezone/name])))

(defn make-transactions [members]
  (let [timezone-id-map (into {}
                              (map-indexed
                                (fn [idx item] [item (- -1000000 idx)])
                                (set (map
                                       get-timezone
                                       members))))
        member-transaction (->> (map (fn [member] (assoc member :member/timezone (get timezone-id-map (get-timezone member))))
                                     members)
                                (map-indexed (fn [i member] (assoc member :db/id i)))
                                (map #(apply dissoc % [:member/tz_offset :member/tz_label :member/tz])))
        timezone-transaction (map (fn [[timezone id]] (assoc timezone :db/id id)) timezone-id-map)]
    (concat member-transaction timezone-transaction)))

(defn move-image-attr
  [member] (assoc member :member/image
                         (val
                           (first
                             (select-keys
                               (get member :profile)
                               [:image_original :image_512 :image_256 :image_24])))))



(defn rename-member-keys
  [member] (rename-keys member
                        (zipmap [:name :real_name :tz
                                 :tz_label :tz_offset :image :id]
                                [:member/name :member/real_name
                                 :member/tz :member/tz_label
                                 :member/tz_offset :member/image :member/id])))

(defn remove-empty-attr [member] (into {} (filter (comp not nil? val) member)))

(defn members->transactions [member-response] (make-transactions (map
                                             (comp #(apply dissoc % [:profile :member/id])
                                                   move-image-attr remove-empty-attr append-id
                                                   rename-member-keys)
                                             (members member-response))))

