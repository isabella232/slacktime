(ns time-plan.clj.core
  (:require
    [clojure.pprint :refer [pprint]]
    [clj-http.client :as client]
    [mount.core :as mount :refer [defstate]]
    [datomic.api :only [q db] :as d]
    [datomic-schema.schema :as s]
    [cognitect.transit :as t]
    [clojure.set :refer [rename-keys]]
    [clojure.walk :refer [keywordize-keys]]
    [time-plan.clj.routes.routing :refer [running-server]]
    )
  (import [java.io ByteArrayInputStream ByteArrayInputStream])
  )

(def uri "datomic:sql://timeplan?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

(defstate conn :start (d/connect uri))

(def parts [(s/part "app")])

(def sch
  [(s/schema user
             (s/fields
               [id :string :unique-identity]
               [name :string]))
   (s/schema team
             (s/fields
               [id :string :unique-identity]
               [name :string]
               [url :string]))
   (s/schema timezone
             (s/fields
               [offset :bigint]
               [name :string]
               [label :string]))
   (s/schema membership
             (s/fields
               [user :ref]
               [team :ref]
               [timezone :ref]
               [token :string]
               [real_name :string]
               [image :string]))])

(def timeplan-schema (concat (s/generate-parts parts)
                             (s/generate-schema sch {:gen-all?   true
                                                     :index-all? true})))

(defn create-schema []
  (d/transact conn timeplan-schema))

(defonce a (atom {}))

(defstate ->tokens :start (chan))

(swap! a assoc :res (client/get "https://slack.com/api/users.list"
                                {:query-params {"token"    (get-in @a [:auth :access-token])
                                                "presence" 1}}))

(swap! a assoc :res (client/get "https://slack.com/api/auth.test"
                                {:query-params {"token" (get-in @a [:auth :access-token])}}))

(defn string->edn [s]
  (keywordize-keys
    (t/read (t/reader (ByteArrayInputStream. (.getBytes s)) :json))))

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
  (assoc member :db/id (:member/id member)))

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
                                (map #(apply dissoc % [:member/tz_offset :member/tz_label :member/tz])))
        timezone-transaction (map (fn [[timezone id]] (assoc timezone :db/id id)) timezone-id-map)]
    (concat member-transaction timezone-transaction)))

(defn move-image-attr
  [member] (assoc member :image
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

(make-transactions (map
                     (comp #(apply dissoc % [:profile :member/id])
                           move-image-attr remove-empty-attr append-id
                           rename-member-keys)
                     (members (:members ))))

(defn- main [& args]
  (when (d/create-database uri) (create-schema))
  (mount/start)
  )

