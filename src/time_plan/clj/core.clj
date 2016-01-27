(ns time-plan.clj.core
  (:require [cemerick.friend        :as friend]
            [friend-oauth2.workflow :as oauth2]
            [friend-oauth2.util     :refer [format-config-uri]]
            [environ.core           :refer [env]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.util.response :refer [response]]
            [ring.adapter.jetty :refer [run-jetty]]
            ))

(def client-config
  {:client-id     (env :time-plan-oauth2-client-id)
   :client-secret (env :time-plan-oauth2-client-secret)
   :callback      {:domain "https://923116b0.ngrok.io" ;; replace this for production with the appropriate site URL
                   :path "/slack/slack.callback"}})

(defn credential-fn
  "Upon successful authentication with the third party, Friend calls
  this function with the user's token. This function is responsible for
  translating that into a Friend identity map with at least the :identity
  and :roles keys. How you decide what roles to grant users is up to you;
  you could e.g. look them up in a database.

  You can also return nil here if you decide that the token provided
  is invalid. This could be used to implement e.g. banning users.

  This example code just automatically assigns anyone who has
  authenticated with the third party the nominal role of ::user."
  [token]
  {:identity token
   :roles #{::user}})


(def uri-config
  {:authentication-uri {:url "https://slack.com/oauth/authorize"
                        :query {:client_id (:client-id client-config)
                                :response_type "code"
                                :redirect_uri (format-config-uri client-config)
                                :scope "users:read"}}

   :access-token-uri {:url "https://slack.com/api/oauth.access"
                      :query {:client_id (:client-id client-config)
                              :client_secret (:client-secret client-config)
                              :grant_type "authorization_code"
                              :redirect_uri (format-config-uri client-config)}}})

(def friend-config
  {:allow-anon? true
   :default-landing-uri "/"
   :login-uri "/slack.callback"
   :workflows [(oauth2/workflow {:client-config client-config
                                 :uri-config uri-config
                                 :credential-fn credential-fn})]})

(def app (wrap-resource response "public"))

(run-jetty (-> app (friend/authenticate friend-config)) {:port 3000})
