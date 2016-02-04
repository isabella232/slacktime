(ns clj.time-plan.core
  (:require
    [clojure.core.async :refer [go <! >! chan]]
    [clj-http.client :as client]
    [mount.core :as mount]
    [clj.time-plan.routes.routing :refer [app]]
    [ring.adapter.jetty :refer [run-jetty]]
    [ring.middleware.defaults :refer :all]
    [ring.middleware.resource :refer [wrap-resource]]
    )
  (:gen-class)
  )

(def uri "datomic:sql://timeplan?jdbc:postgresql://localhost:5432/datomic?user=datomic&password=datomic")

(defn -main [& args]
  (mount/start)
  (run-jetty
    (wrap-defaults (wrap-resource app "public")
                   (assoc secure-site-defaults :proxy true) )
    {:port        10555
     :join?       false
     :auto-reload true})
  )
