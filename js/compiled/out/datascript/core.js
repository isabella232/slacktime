// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.impl.entity');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("de","entity?","de/entity?",555337042,null),new cljs.core.Symbol(null,"entity","entity",1189561251,null))))].join('')));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var u = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(u,((function (fdb,u){
return (function (p1__30414_SHARP_){
var and__4659__auto__ = pred.call(null,u,p1__30414_SHARP_);
if(cljs.core.truth_(and__4659__auto__)){
return fdb.pred.call(null,p1__30414_SHARP_);
} else {
return and__4659__auto__;
}
});})(fdb,u))
,null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__30415_SHARP_){
return pred.call(null,db,p1__30415_SHARP_);
}),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args30416 = [];
var len__5729__auto___30419 = arguments.length;
var i__5730__auto___30420 = (0);
while(true){
if((i__5730__auto___30420 < len__5729__auto___30419)){
args30416.push((arguments[i__5730__auto___30420]));

var G__30421 = (i__5730__auto___30420 + (1));
i__5730__auto___30420 = G__30421;
continue;
} else {
}
break;
}

var G__30418 = args30416.length;
switch (G__30418) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30416.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;
datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args30423 = [];
var len__5729__auto___30426 = arguments.length;
var i__5730__auto___30427 = (0);
while(true){
if((i__5730__auto___30427 < len__5729__auto___30426)){
args30423.push((arguments[i__5730__auto___30427]));

var G__30428 = (i__5730__auto___30427 + (1));
i__5730__auto___30427 = G__30428;
continue;
} else {
}
break;
}

var G__30425 = args30423.length;
switch (G__30425) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30423.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;
datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args30430 = [];
var len__5729__auto___30433 = arguments.length;
var i__5730__auto___30434 = (0);
while(true){
if((i__5730__auto___30434 < len__5729__auto___30433)){
args30430.push((arguments[i__5730__auto___30434]));

var G__30435 = (i__5730__auto___30434 + (1));
i__5730__auto___30434 = G__30435;
continue;
} else {
}
break;
}

var G__30432 = args30430.length;
switch (G__30432) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30430.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;
datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__4659__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || (conn.cljs$core$IDeref$))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__4659__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__4659__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args30441 = [];
var len__5729__auto___30444 = arguments.length;
var i__5730__auto___30445 = (0);
while(true){
if((i__5730__auto___30445 < len__5729__auto___30444)){
args30441.push((arguments[i__5730__auto___30445]));

var G__30446 = (i__5730__auto___30445 + (1));
i__5730__auto___30445 = G__30446;
continue;
} else {
}
break;
}

var G__30443 = args30441.length;
switch (G__30443) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30441.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;
datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args30448 = [];
var len__5729__auto___30451 = arguments.length;
var i__5730__auto___30452 = (0);
while(true){
if((i__5730__auto___30452 < len__5729__auto___30451)){
args30448.push((arguments[i__5730__auto___30452]));

var G__30453 = (i__5730__auto___30452 + (1));
i__5730__auto___30452 = G__30453;
continue;
} else {
}
break;
}

var G__30450 = args30448.length;
switch (G__30450) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30448.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;
datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args30455 = [];
var len__5729__auto___30464 = arguments.length;
var i__5730__auto___30465 = (0);
while(true){
if((i__5730__auto___30465 < len__5729__auto___30464)){
args30455.push((arguments[i__5730__auto___30465]));

var G__30466 = (i__5730__auto___30465 + (1));
i__5730__auto___30465 = G__30466;
continue;
} else {
}
break;
}

var G__30457 = args30455.length;
switch (G__30457) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30455.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__30458_30468 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__30459_30469 = null;
var count__30460_30470 = (0);
var i__30461_30471 = (0);
while(true){
if((i__30461_30471 < count__30460_30470)){
var vec__30462_30472 = cljs.core._nth.call(null,chunk__30459_30469,i__30461_30471);
var __30473 = cljs.core.nth.call(null,vec__30462_30472,(0),null);
var callback_30474 = cljs.core.nth.call(null,vec__30462_30472,(1),null);
callback_30474.call(null,report);

var G__30475 = seq__30458_30468;
var G__30476 = chunk__30459_30469;
var G__30477 = count__30460_30470;
var G__30478 = (i__30461_30471 + (1));
seq__30458_30468 = G__30475;
chunk__30459_30469 = G__30476;
count__30460_30470 = G__30477;
i__30461_30471 = G__30478;
continue;
} else {
var temp__4425__auto___30479 = cljs.core.seq.call(null,seq__30458_30468);
if(temp__4425__auto___30479){
var seq__30458_30480__$1 = temp__4425__auto___30479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30458_30480__$1)){
var c__5474__auto___30481 = cljs.core.chunk_first.call(null,seq__30458_30480__$1);
var G__30482 = cljs.core.chunk_rest.call(null,seq__30458_30480__$1);
var G__30483 = c__5474__auto___30481;
var G__30484 = cljs.core.count.call(null,c__5474__auto___30481);
var G__30485 = (0);
seq__30458_30468 = G__30482;
chunk__30459_30469 = G__30483;
count__30460_30470 = G__30484;
i__30461_30471 = G__30485;
continue;
} else {
var vec__30463_30486 = cljs.core.first.call(null,seq__30458_30480__$1);
var __30487 = cljs.core.nth.call(null,vec__30463_30486,(0),null);
var callback_30488 = cljs.core.nth.call(null,vec__30463_30486,(1),null);
callback_30488.call(null,report);

var G__30489 = cljs.core.next.call(null,seq__30458_30480__$1);
var G__30490 = null;
var G__30491 = (0);
var G__30492 = (0);
seq__30458_30468 = G__30489;
chunk__30459_30469 = G__30490;
count__30460_30470 = G__30491;
i__30461_30471 = G__30492;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args30494 = [];
var len__5729__auto___30503 = arguments.length;
var i__5730__auto___30504 = (0);
while(true){
if((i__5730__auto___30504 < len__5729__auto___30503)){
args30494.push((arguments[i__5730__auto___30504]));

var G__30505 = (i__5730__auto___30504 + (1));
i__5730__auto___30504 = G__30505;
continue;
} else {
}
break;
}

var G__30496 = args30494.length;
switch (G__30496) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30494.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__30493_SHARP_){
return cljs.core.assoc.call(null,p1__30493_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__30497_30507 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__30498_30508 = null;
var count__30499_30509 = (0);
var i__30500_30510 = (0);
while(true){
if((i__30500_30510 < count__30499_30509)){
var vec__30501_30511 = cljs.core._nth.call(null,chunk__30498_30508,i__30500_30510);
var __30512 = cljs.core.nth.call(null,vec__30501_30511,(0),null);
var callback_30513 = cljs.core.nth.call(null,vec__30501_30511,(1),null);
callback_30513.call(null,report);

var G__30514 = seq__30497_30507;
var G__30515 = chunk__30498_30508;
var G__30516 = count__30499_30509;
var G__30517 = (i__30500_30510 + (1));
seq__30497_30507 = G__30514;
chunk__30498_30508 = G__30515;
count__30499_30509 = G__30516;
i__30500_30510 = G__30517;
continue;
} else {
var temp__4425__auto___30518 = cljs.core.seq.call(null,seq__30497_30507);
if(temp__4425__auto___30518){
var seq__30497_30519__$1 = temp__4425__auto___30518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30497_30519__$1)){
var c__5474__auto___30520 = cljs.core.chunk_first.call(null,seq__30497_30519__$1);
var G__30521 = cljs.core.chunk_rest.call(null,seq__30497_30519__$1);
var G__30522 = c__5474__auto___30520;
var G__30523 = cljs.core.count.call(null,c__5474__auto___30520);
var G__30524 = (0);
seq__30497_30507 = G__30521;
chunk__30498_30508 = G__30522;
count__30499_30509 = G__30523;
i__30500_30510 = G__30524;
continue;
} else {
var vec__30502_30525 = cljs.core.first.call(null,seq__30497_30519__$1);
var __30526 = cljs.core.nth.call(null,vec__30502_30525,(0),null);
var callback_30527 = cljs.core.nth.call(null,vec__30502_30525,(1),null);
callback_30527.call(null,report);

var G__30528 = cljs.core.next.call(null,seq__30497_30519__$1);
var G__30529 = null;
var G__30530 = (0);
var G__30531 = (0);
seq__30497_30507 = G__30528;
chunk__30498_30508 = G__30529;
count__30499_30509 = G__30530;
i__30500_30510 = G__30531;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args30532 = [];
var len__5729__auto___30535 = arguments.length;
var i__5730__auto___30536 = (0);
while(true){
if((i__5730__auto___30536 < len__5729__auto___30535)){
args30532.push((arguments[i__5730__auto___30536]));

var G__30537 = (i__5730__auto___30536 + (1));
i__5730__auto___30536 = G__30537;
continue;
} else {
}
break;
}

var G__30534 = args30532.length;
switch (G__30534) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30532.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;
datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__30539_30545 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__30540_30546 = null;
var count__30541_30547 = (0);
var i__30542_30548 = (0);
while(true){
if((i__30542_30548 < count__30541_30547)){
var vec__30543_30549 = cljs.core._nth.call(null,chunk__30540_30546,i__30542_30548);
var tag_30550 = cljs.core.nth.call(null,vec__30543_30549,(0),null);
var cb_30551 = cljs.core.nth.call(null,vec__30543_30549,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_30550,cb_30551);

var G__30552 = seq__30539_30545;
var G__30553 = chunk__30540_30546;
var G__30554 = count__30541_30547;
var G__30555 = (i__30542_30548 + (1));
seq__30539_30545 = G__30552;
chunk__30540_30546 = G__30553;
count__30541_30547 = G__30554;
i__30542_30548 = G__30555;
continue;
} else {
var temp__4425__auto___30556 = cljs.core.seq.call(null,seq__30539_30545);
if(temp__4425__auto___30556){
var seq__30539_30557__$1 = temp__4425__auto___30556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30539_30557__$1)){
var c__5474__auto___30558 = cljs.core.chunk_first.call(null,seq__30539_30557__$1);
var G__30559 = cljs.core.chunk_rest.call(null,seq__30539_30557__$1);
var G__30560 = c__5474__auto___30558;
var G__30561 = cljs.core.count.call(null,c__5474__auto___30558);
var G__30562 = (0);
seq__30539_30545 = G__30559;
chunk__30540_30546 = G__30560;
count__30541_30547 = G__30561;
i__30542_30548 = G__30562;
continue;
} else {
var vec__30544_30563 = cljs.core.first.call(null,seq__30539_30557__$1);
var tag_30564 = cljs.core.nth.call(null,vec__30544_30563,(0),null);
var cb_30565 = cljs.core.nth.call(null,vec__30544_30563,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_30564,cb_30565);

var G__30566 = cljs.core.next.call(null,seq__30539_30557__$1);
var G__30567 = null;
var G__30568 = (0);
var G__30569 = (0);
seq__30539_30545 = G__30566;
chunk__30540_30546 = G__30567;
count__30541_30547 = G__30568;
i__30542_30548 = G__30569;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args30570 = [];
var len__5729__auto___30573 = arguments.length;
var i__5730__auto___30574 = (0);
while(true){
if((i__5730__auto___30574 < len__5729__auto___30573)){
args30570.push((arguments[i__5730__auto___30574]));

var G__30575 = (i__5730__auto___30574 + (1));
i__5730__auto___30574 = G__30575;
continue;
} else {
}
break;
}

var G__30572 = args30570.length;
switch (G__30572) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30570.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;
datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args30577 = [];
var len__5729__auto___30583 = arguments.length;
var i__5730__auto___30584 = (0);
while(true){
if((i__5730__auto___30584 < len__5729__auto___30583)){
args30577.push((arguments[i__5730__auto___30584]));

var G__30585 = (i__5730__auto___30584 + (1));
i__5730__auto___30584 = G__30585;
continue;
} else {
}
break;
}

var G__30579 = args30577.length;
switch (G__30579) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30577.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core30580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core30580 = (function (conn,tx_data,tx_meta,res,meta30581){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta30581 = meta30581;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core30580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_30582,meta30581__$1){
var self__ = this;
var _30582__$1 = this;
return (new datascript.core.t_datascript$core30580(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta30581__$1));
});})(res))
;

datascript.core.t_datascript$core30580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_30582){
var self__ = this;
var _30582__$1 = this;
return self__.meta30581;
});})(res))
;

datascript.core.t_datascript$core30580.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core30580.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core30580.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core30580.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta30581","meta30581",-897882760,null)], null);
});})(res))
;

datascript.core.t_datascript$core30580.cljs$lang$type = true;

datascript.core.t_datascript$core30580.cljs$lang$ctorStr = "datascript.core/t_datascript$core30580";

datascript.core.t_datascript$core30580.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"datascript.core/t_datascript$core30580");
});})(res))
;

datascript.core.__GT_t_datascript$core30580 = ((function (res){
return (function datascript$core$__GT_t_datascript$core30580(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta30581){
return (new datascript.core.t_datascript$core30580(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta30581));
});})(res))
;

}

return (new datascript.core.t_datascript$core30580(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;
datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core30590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core30590 = (function (future_call,f,res,realized,meta30591){
this.future_call = future_call;
this.f = f;
this.res = res;
this.realized = realized;
this.meta30591 = meta30591;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core30590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_30592,meta30591__$1){
var self__ = this;
var _30592__$1 = this;
return (new datascript.core.t_datascript$core30590(self__.future_call,self__.f,self__.res,self__.realized,meta30591__$1));
});})(res,realized))
;

datascript.core.t_datascript$core30590.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_30592){
var self__ = this;
var _30592__$1 = this;
return self__.meta30591;
});})(res,realized))
;

datascript.core.t_datascript$core30590.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core30590.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core30590.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core30590.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"future-call","future-call",96010083,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta30591","meta30591",1428903937,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core30590.cljs$lang$type = true;

datascript.core.t_datascript$core30590.cljs$lang$ctorStr = "datascript.core/t_datascript$core30590";

datascript.core.t_datascript$core30590.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"datascript.core/t_datascript$core30590");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core30590 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core30590(future_call__$1,f__$1,res__$1,realized__$1,meta30591){
return (new datascript.core.t_datascript$core30590(future_call__$1,f__$1,res__$1,realized__$1,meta30591));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core30590(datascript$core$future_call,f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args30593 = [];
var len__5729__auto___30596 = arguments.length;
var i__5730__auto___30597 = (0);
while(true){
if((i__5730__auto___30597 < len__5729__auto___30596)){
args30593.push((arguments[i__5730__auto___30597]));

var G__30598 = (i__5730__auto___30597 + (1));
i__5730__auto___30597 = G__30598;
continue;
} else {
}
break;
}

var G__30595 = args30593.length;
switch (G__30595) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30593.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"conn?","conn?",1807755802,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null))))].join('')));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;
datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args30600 = [];
var len__5729__auto___30603 = arguments.length;
var i__5730__auto___30604 = (0);
while(true){
if((i__5730__auto___30604 < len__5729__auto___30603)){
args30600.push((arguments[i__5730__auto___30604]));

var G__30605 = (i__5730__auto___30604 + (1));
i__5730__auto___30604 = G__30605;
continue;
} else {
}
break;
}

var G__30602 = args30600.length;
switch (G__30602) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30600.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str("-"),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;
datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map?rel=1454563844168