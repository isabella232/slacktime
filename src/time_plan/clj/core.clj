(ns time-plan.clj.core
  (:require
    [time-plan.clj.member.member :refer [->tokens create-schema]]
    [clojure.core.async :refer [go <! >! chan]]
    [clj-http.client :as client]
    [mount.core :as mount]
    [datomic.api :only [q db] :as d]
    [time-plan.clj.routes.routing :refer [running-server]]
    )
  )

(def uri "datomic:sql://timeplan?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

(mount/start)


(defn- main [& args]
  (when (d/create-database uri) (create-schema))
  (mount/start)
  )

