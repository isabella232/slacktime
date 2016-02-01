(ns time-plan.clj.routes.routing
  (:require
    [compojure.core :refer :all]
    [cemerick.friend :as friend]
    [friend-oauth2.workflow :as oauth2 :refer [workflow]]
    [friend-oauth2.util :as util :refer [format-config-uri]]
    [clojure.core.async :refer [go <! >! chan]]
    [mount.core :refer [defstate]]
    [ring.middleware.resource :refer [wrap-resource]]
    [ring.util.response :refer [response]]
    [ring.util.request :as request]
    [ring.middleware.params :refer [wrap-params]]
    [ring.middleware.defaults :refer :all]
    [environ.core :refer [env]]
    [ring.adapter.jetty :refer [run-jetty]]
    ))

(defroutes routed-app
           (GET "/" request "open.")
           (GET "/status" request
             (let [count (:count (:session request) 0)
                   session (assoc (:session request) :count (inc count))]
               (-> (ring.util.response/response
                     (str "<p>We've hit the session page " (:count session)
                          " times.</p><p>The current session: " session "</p>"))
                   (assoc :session session))))
           (GET "/authlink" request
             (friend/authorize #{::user} "Authorized page."))
           (GET "/admin" request
             (friend/authorize #{::admin} "Only admins can see this page."))
           (friend/logout (ANY "/logout" request (ring.util.response/redirect "/"))))

(defstate client-config :start
  {:client-id     (env :time-plan-oauth2-client-id)
   :client-secret (env :time-plan-oauth2-client-secret)
   :callback      {:domain "https://8362aada.ngrok.io"      ; (env :domain)
                   :path   "/cards.html/slack.callback"}})

(defstate uri-config :start
  {:authentication-uri {:url   "https://slack.com/oauth/authorize"
                        :query {:client_id     (:client-id client-config)
                                :response_type "code"
                                :redirect_uri  (format-config-uri client-config)
                                :scope         "users:read"}}
   :access-token-uri   {:url   "https://slack.com/api/oauth.access"
                        :query {:client_id     (:client-id client-config)
                                :client_secret (:client-secret client-config)
                                :grant_type    "authorization_code"
                                :redirect_uri  (format-config-uri client-config)}}})

(defn credential-fn
  [token]
  ;go put on new token chan
  (go (>! ->tokens token))
  {:identity token
   :roles    #{::user ::admin}})


(defstate app :start
          (friend/authenticate routed-app
                               {:allow-anon? true
                                :workflows   [(wrap-params (workflow
                                                             {:client-config client-config
                                                              :uri-config    uri-config
                                                              :credential-fn credential-fn
                                                              }))]}))
(defstate running-server :start (run-jetty
                                  (wrap-defaults (wrap-resource app "public")
                                                 (assoc secure-site-defaults :proxy true) )
                                  {:port        3000
                                   :join?       false
                                   :auto-reload true})
          :stop (.stop running-server))