// Compiled by ClojureScript 1.7.170 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');
datascript.impl.entity.entity;

datascript.impl.entity.__GT_Entity;

datascript.impl.entity.equiv_entity;

datascript.impl.entity.lookup_entity;

datascript.impl.entity.touch;
datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("db","db?","db/db?",1715868458,null),new cljs.core.Symbol(null,"db","db",-1661185010,null))))].join('')));
}

var temp__4425__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__4425__auto__)){
var e = temp__4425__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__29989_SHARP_,p2__29990_SHARP_){
return cljs.core.conj.call(null,p1__29989_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__29990_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__29991_SHARP_,p2__29992_SHARP_){
return cljs.core.conj.call(null,p1__29991_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__29992_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__4423__auto__){
return (function (p1__29993_SHARP_,p2__29994_SHARP_){
return cljs.core.conj.call(null,p1__29993_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__29994_SHARP_)));
});})(datoms,temp__4423__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__5443__auto__ = (function datascript$impl$entity$js_seq_$_iter__30003(s__30004){
return (new cljs.core.LazySeq(null,(function (){
var s__30004__$1 = s__30004;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30004__$1);
if(temp__4425__auto__){
var s__30004__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30004__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__30004__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__30006 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__30005 = (0);
while(true){
if((i__30005 < size__5442__auto__)){
var vec__30009 = cljs.core._nth.call(null,c__5441__auto__,i__30005);
var a = cljs.core.nth.call(null,vec__30009,(0),null);
var v = cljs.core.nth.call(null,vec__30009,(1),null);
cljs.core.chunk_append.call(null,b__30006,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__30011 = (i__30005 + (1));
i__30005 = G__30011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30006),datascript$impl$entity$js_seq_$_iter__30003.call(null,cljs.core.chunk_rest.call(null,s__30004__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30006),null);
}
} else {
var vec__30010 = cljs.core.first.call(null,s__30004__$2);
var a = cljs.core.nth.call(null,vec__30010,(0),null);
var v = cljs.core.nth.call(null,vec__30010,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__30003.call(null,cljs.core.rest.call(null,s__30004__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__30026 = null;
var G__30026__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__30013 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__30014 = null;
var count__30015 = (0);
var i__30016 = (0);
while(true){
if((i__30016 < count__30015)){
var vec__30017 = cljs.core._nth.call(null,chunk__30014,i__30016);
var a = cljs.core.nth.call(null,vec__30017,(0),null);
var v = cljs.core.nth.call(null,vec__30017,(1),null);
f.call(null,v,a,this$);

var G__30027 = seq__30013;
var G__30028 = chunk__30014;
var G__30029 = count__30015;
var G__30030 = (i__30016 + (1));
seq__30013 = G__30027;
chunk__30014 = G__30028;
count__30015 = G__30029;
i__30016 = G__30030;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30013);
if(temp__4425__auto__){
var seq__30013__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30013__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__30013__$1);
var G__30031 = cljs.core.chunk_rest.call(null,seq__30013__$1);
var G__30032 = c__5474__auto__;
var G__30033 = cljs.core.count.call(null,c__5474__auto__);
var G__30034 = (0);
seq__30013 = G__30031;
chunk__30014 = G__30032;
count__30015 = G__30033;
i__30016 = G__30034;
continue;
} else {
var vec__30018 = cljs.core.first.call(null,seq__30013__$1);
var a = cljs.core.nth.call(null,vec__30018,(0),null);
var v = cljs.core.nth.call(null,vec__30018,(1),null);
f.call(null,v,a,this$);

var G__30035 = cljs.core.next.call(null,seq__30013__$1);
var G__30036 = null;
var G__30037 = (0);
var G__30038 = (0);
seq__30013 = G__30035;
chunk__30014 = G__30036;
count__30015 = G__30037;
i__30016 = G__30038;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__30026__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__30019 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__30020 = null;
var count__30021 = (0);
var i__30022 = (0);
while(true){
if((i__30022 < count__30021)){
var vec__30023 = cljs.core._nth.call(null,chunk__30020,i__30022);
var a = cljs.core.nth.call(null,vec__30023,(0),null);
var v = cljs.core.nth.call(null,vec__30023,(1),null);
f.call(use_as_this,v,a,this$);

var G__30039 = seq__30019;
var G__30040 = chunk__30020;
var G__30041 = count__30021;
var G__30042 = (i__30022 + (1));
seq__30019 = G__30039;
chunk__30020 = G__30040;
count__30021 = G__30041;
i__30022 = G__30042;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30019);
if(temp__4425__auto__){
var seq__30019__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30019__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__30019__$1);
var G__30043 = cljs.core.chunk_rest.call(null,seq__30019__$1);
var G__30044 = c__5474__auto__;
var G__30045 = cljs.core.count.call(null,c__5474__auto__);
var G__30046 = (0);
seq__30019 = G__30043;
chunk__30020 = G__30044;
count__30021 = G__30045;
i__30022 = G__30046;
continue;
} else {
var vec__30024 = cljs.core.first.call(null,seq__30019__$1);
var a = cljs.core.nth.call(null,vec__30024,(0),null);
var v = cljs.core.nth.call(null,vec__30024,(1),null);
f.call(use_as_this,v,a,this$);

var G__30047 = cljs.core.next.call(null,seq__30019__$1);
var G__30048 = null;
var G__30049 = (0);
var G__30050 = (0);
seq__30019 = G__30047;
chunk__30020 = G__30048;
count__30021 = G__30049;
i__30022 = G__30050;
continue;
}
} else {
return null;
}
}
break;
}
});
G__30026 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__30026__1.call(this,f);
case 2:
return G__30026__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30026.cljs$core$IFn$_invoke$arity$1 = G__30026__1;
G__30026.cljs$core$IFn$_invoke$arity$2 = G__30026__2;
return G__30026;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__30025 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
var G__30025__$1 = ((datascript.db.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__30025):G__30025);
return G__30025__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__30051 = null;
var G__30051__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__30051__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__30051 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__30051__2.call(this,self__,k);
case 3:
return G__30051__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30051.cljs$core$IFn$_invoke$arity$2 = G__30051__2;
G__30051.cljs$core$IFn$_invoke$arity$3 = G__30051__3;
return G__30051;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args30012){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30012)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args30052 = [];
var len__5729__auto___30055 = arguments.length;
var i__5730__auto___30056 = (0);
while(true){
if((i__5730__auto___30056 < len__5729__auto___30055)){
args30052.push((arguments[i__5730__auto___30056]));

var G__30057 = (i__5730__auto___30056 + (1));
i__5730__auto___30056 = G__30057;
continue;
} else {
}
break;
}

var G__30054 = args30052.length;
switch (G__30054) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30052.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var or__4671__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__4423__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__4423__auto__)){
var datoms = temp__4423__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;
datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"entity?","entity?",555338193,null),new cljs.core.Symbol(null,"e","e",-1273166571,null))))].join('')));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__4425__auto___30059 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4425__auto___30059)){
var datoms_30060 = temp__4425__auto___30059;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_30060)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map?rel=1454563842685