(ns time-plan.devcards.core
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest dom-node]]
    [cljs.core.async.macros :refer [go alt!]]
    )
  (:require
    [cljs.test :as tst :include-macros true :refer-macros [testing is async]]
    [cljs-time.core :as dt :refer [seconds minutes hours ago from-now plus now]]
    [cljs-time.format :as dtf :refer [formatter unparse]]
    [datascript.core :as d]
    [mount.core :as mount]
    [cljs.pprint :refer [pprint]]
    [goog.net.XhrIo]
    [om.next :as om :refer-macros [defui]]
    [om.dom :as dom]
    [cljs.core.async :refer [>! <! chan put! close! timeout]]
    [sablono.core :include-macros true]
    [cognitect.transit :as t]
    [time-plan.cljs.core :refer [r TimezonesComponent]]
    )
  )

(enable-console-print!)


(defcard timezone-component
         (dom-node
           (fn [_ node]
             (om/add-root! r
                           TimezonesComponent
                           node))))