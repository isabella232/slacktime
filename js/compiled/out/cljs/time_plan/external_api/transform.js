// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.time_plan.external_api.transform');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('cognitect.transit');
cljs.time_plan.external_api.transform.should_not_have_attributes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deleted","deleted",-510100639),null,new cljs.core.Keyword(null,"is_bot","is_bot",1360940228),null,new cljs.core.Keyword(null,"is_restricted","is_restricted",758246442),null,new cljs.core.Keyword(null,"is_ultra_restricted","is_ultra_restricted",1278558162),null], null), null);
cljs.time_plan.external_api.transform.members = (function cljs$time_plan$external_api$transform$members(member_obj){
return cljs.core.map.call(null,(function (member){
return cljs.core.select_keys.call(null,member,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"real_name","real_name",994734534),new cljs.core.Keyword(null,"tz","tz",278339241),new cljs.core.Keyword(null,"tz_label","tz_label",-1610376479),new cljs.core.Keyword(null,"tz_offset","tz_offset",480470206),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),cljs.core.filter.call(null,(function (member){
return cljs.core.not_any_QMARK_.call(null,(function (not_has_key){
return not_has_key.call(null,member);
}),cljs.time_plan.external_api.transform.should_not_have_attributes);
}),member_obj));
});
cljs.time_plan.external_api.transform.append_id = (function cljs$time_plan$external_api$transform$append_id(member){
return cljs.core.assoc.call(null,member,new cljs.core.Keyword("member","slack-id","member/slack-id",-215700793),new cljs.core.Keyword("member","id","member/id",-310558822).cljs$core$IFn$_invoke$arity$1(member));
});
cljs.time_plan.external_api.transform.get_timezone = (function cljs$time_plan$external_api$transform$get_timezone(member){
return clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,member,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("member","tz_offset","member/tz_offset",-597960152),new cljs.core.Keyword("member","tz_label","member/tz_label",1613378951),new cljs.core.Keyword("member","tz","member/tz",-800011005)], null)),cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("member","tz_offset","member/tz_offset",-597960152),new cljs.core.Keyword("member","tz_label","member/tz_label",1613378951),new cljs.core.Keyword("member","tz","member/tz",-800011005)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timezone","offset","timezone/offset",-1788089214),new cljs.core.Keyword("timezone","label","timezone/label",337745449),new cljs.core.Keyword("timezone","name","timezone/name",-500492232)], null)));
});
cljs.time_plan.external_api.transform.make_transactions = (function cljs$time_plan$external_api$transform$make_transactions(members){
var timezone_id_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (idx,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,((-1000000) - idx)], null);
}),cljs.core.set.call(null,cljs.core.map.call(null,cljs.time_plan.external_api.transform.get_timezone,members))));
var member_transaction = cljs.core.map.call(null,((function (timezone_id_map){
return (function (p1__30763_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__30763_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("member","tz_offset","member/tz_offset",-597960152),new cljs.core.Keyword("member","tz_label","member/tz_label",1613378951),new cljs.core.Keyword("member","tz","member/tz",-800011005)], null));
});})(timezone_id_map))
,cljs.core.map_indexed.call(null,((function (timezone_id_map){
return (function (i,member){
return cljs.core.assoc.call(null,member,new cljs.core.Keyword("db","id","db/id",-1388397098),i);
});})(timezone_id_map))
,cljs.core.map.call(null,((function (timezone_id_map){
return (function (member){
return cljs.core.assoc.call(null,member,new cljs.core.Keyword("member","timezone","member/timezone",-1401779283),cljs.core.get.call(null,timezone_id_map,cljs.time_plan.external_api.transform.get_timezone.call(null,member)));
});})(timezone_id_map))
,members)));
var timezone_transaction = cljs.core.map.call(null,((function (timezone_id_map,member_transaction){
return (function (p__30766){
var vec__30767 = p__30766;
var timezone = cljs.core.nth.call(null,vec__30767,(0),null);
var id = cljs.core.nth.call(null,vec__30767,(1),null);
return cljs.core.assoc.call(null,timezone,new cljs.core.Keyword("db","id","db/id",-1388397098),id);
});})(timezone_id_map,member_transaction))
,timezone_id_map);
return cljs.core.concat.call(null,member_transaction,timezone_transaction);
});
cljs.time_plan.external_api.transform.move_image_attr = (function cljs$time_plan$external_api$transform$move_image_attr(member){
return cljs.core.assoc.call(null,member,new cljs.core.Keyword("member","image","member/image",1036477310),cljs.core.val.call(null,cljs.core.first.call(null,cljs.core.select_keys.call(null,cljs.core.get.call(null,member,new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image_original","image_original",1845611656),new cljs.core.Keyword(null,"image_512","image_512",2004275200),new cljs.core.Keyword(null,"image_256","image_256",-388575068),new cljs.core.Keyword(null,"image_24","image_24",-1950174100)], null)))));
});
cljs.time_plan.external_api.transform.rename_member_keys = (function cljs$time_plan$external_api$transform$rename_member_keys(member){
return clojure.set.rename_keys.call(null,member,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"real_name","real_name",994734534),new cljs.core.Keyword(null,"tz","tz",278339241),new cljs.core.Keyword(null,"tz_label","tz_label",-1610376479),new cljs.core.Keyword(null,"tz_offset","tz_offset",480470206),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("member","name","member/name",648465111),new cljs.core.Keyword("member","real_name","member/real_name",-74921892),new cljs.core.Keyword("member","tz","member/tz",-800011005),new cljs.core.Keyword("member","tz_label","member/tz_label",1613378951),new cljs.core.Keyword("member","tz_offset","member/tz_offset",-597960152),new cljs.core.Keyword("member","image","member/image",1036477310),new cljs.core.Keyword("member","id","member/id",-310558822)], null)));
});
cljs.time_plan.external_api.transform.remove_empty_attr = (function cljs$time_plan$external_api$transform$remove_empty_attr(member){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.val),member));
});
cljs.time_plan.external_api.transform.members__GT_transactions = (function cljs$time_plan$external_api$transform$members__GT_transactions(member_response){
return cljs.time_plan.external_api.transform.make_transactions.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__30768_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__30768_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword("member","id","member/id",-310558822)], null));
}),cljs.time_plan.external_api.transform.move_image_attr,cljs.time_plan.external_api.transform.remove_empty_attr,cljs.time_plan.external_api.transform.append_id,cljs.time_plan.external_api.transform.rename_member_keys),cljs.time_plan.external_api.transform.members.call(null,member_response)));
});

//# sourceMappingURL=transform.js.map?rel=1454563844486