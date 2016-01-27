(defproject time-plan "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [devcards "0.2.1-5"]
                 [sablono "0.5.3"]
                 [org.omcljs/om "1.0.0-alpha29-SNAPSHOT"]
                 [mount "0.1.8"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [datascript "0.15.0"]
                 [org.clojure/core.logic "0.8.10"]
                 [figwheel-sidecar "0.5.0-4"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [ring "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [bidi "1.25.0"]
                 [com.cemerick/friend "0.2.1" :exclusions [org.apache.httpcomponents/httpclient]]
                 [friend-oauth2 "0.1.3"]
                 [environ "1.0.1"]
                 [org.clojure/core.cache "0.6.3"]
                 [org.clojure/core.memoize "0.5.8" :exclusions [org.clojure/core.cache]]
                 ]

  :plugins [[lein-cljsbuild "1.1.2" :exclusions [org.clojure/clojure]]
            [lein-environ "1.0.1"]]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"
                                    "target"]
  
  :source-paths ["src", "script"]

  :cljsbuild {
              :builds [{:id "devcards"
                        :source-paths ["src"]
                        :figwheel { :devcards true } ;; <- note this
                        :compiler { :main       "time-plan.devcards.core"
                                    :asset-path "js/compiled/devcards_out"
                                    :output-to  "resources/public/js/compiled/time_plan_devcards.js"
                                    :output-dir "resources/public/js/compiled/devcards_out"
                                    :source-map-timestamp true }}
                       {:id "dev"
                        :source-paths ["src"]
                        :figwheel true
                        :compiler {:main       "time-plan.cljs.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/time_plan.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true }}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:main       "time-plan.cljs.core"
                                   :asset-path "js/compiled/out"
                                   :output-to  "resources/public/js/compiled/time_plan.js"
                                   :optimizations :advanced}}]}

  :figwheel { :css-dirs ["resources/public/css"] :open-file-command "open-in-intellij"})
