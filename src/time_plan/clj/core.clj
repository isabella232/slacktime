(ns time-plan.clj.core
  (:require
    [time-plan.clj.member.member :refer [->tokens create-schema]]
    [clojure.core.async :refer [go <! >! chan]]
    [clj-http.client :as client]
    [mount.core :as mount]
    [time-plan.clj.routes.routing :refer [running-server]]
    )
  )


(defn- main [& args]
  (when (d/create-database uri) (create-schema))
  (mount/start)
  )

