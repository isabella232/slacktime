(ns time-plan.clj.member.member
  (:require
    [time-plan.clj.external_api.transform
     :refer [move-image-attr remove-empty-attr append-id rename-member-keys
             make-transactions members]]
    [clojure.core.async :refer [go <! >! chan]]
    [clj-http.client :as client]
    [datomic.api :only [q db] :as d]
    [datomic-schema.schema :as s]
    [mount.core :as mount :refer [defstate]]
    ))

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

(def uri "datomic:sql://timeplan?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

(defstate conn :start (d/connect uri))

(defn create-schema [] (d/transact conn timeplan-schema))

(defonce a (atom {}))

(defstate ->tokens :start (chan))

(mount/start)

(go (swap! a assoc :user-token (<! ->tokens)))

(fn [m] (make-transactions (map
                             (comp #(apply dissoc % [:profile :member/id])
                                   move-image-attr remove-empty-attr append-id
                                   rename-member-keys)
                             (members (:members m)))))

#_(swap! a assoc :res (client/get "https://slack.com/api/users.list"
                                {:query-params {"token"    (get-in @a [:auth :access-token])
                                                "presence" 1}}))

#_(swap! a assoc :res (client/get "https://slack.com/api/auth.test"
                                {:query-params {"token" (get-in @a [:auth :access-token])}}))

