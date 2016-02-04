// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__30613_30617 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__30614_30618 = null;
var count__30615_30619 = (0);
var i__30616_30620 = (0);
while(true){
if((i__30616_30620 < count__30615_30619)){
var k_30621 = cljs.core._nth.call(null,chunk__30614_30618,i__30616_30620);
var v_30622 = (b[k_30621]);
(a[k_30621] = v_30622);

var G__30623 = seq__30613_30617;
var G__30624 = chunk__30614_30618;
var G__30625 = count__30615_30619;
var G__30626 = (i__30616_30620 + (1));
seq__30613_30617 = G__30623;
chunk__30614_30618 = G__30624;
count__30615_30619 = G__30625;
i__30616_30620 = G__30626;
continue;
} else {
var temp__4425__auto___30627 = cljs.core.seq.call(null,seq__30613_30617);
if(temp__4425__auto___30627){
var seq__30613_30628__$1 = temp__4425__auto___30627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30613_30628__$1)){
var c__5474__auto___30629 = cljs.core.chunk_first.call(null,seq__30613_30628__$1);
var G__30630 = cljs.core.chunk_rest.call(null,seq__30613_30628__$1);
var G__30631 = c__5474__auto___30629;
var G__30632 = cljs.core.count.call(null,c__5474__auto___30629);
var G__30633 = (0);
seq__30613_30617 = G__30630;
chunk__30614_30618 = G__30631;
count__30615_30619 = G__30632;
i__30616_30620 = G__30633;
continue;
} else {
var k_30634 = cljs.core.first.call(null,seq__30613_30628__$1);
var v_30635 = (b[k_30634]);
(a[k_30634] = v_30635);

var G__30636 = cljs.core.next.call(null,seq__30613_30628__$1);
var G__30637 = null;
var G__30638 = (0);
var G__30639 = (0);
seq__30613_30617 = G__30636;
chunk__30614_30618 = G__30637;
count__30615_30619 = G__30638;
i__30616_30620 = G__30639;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args30640 = [];
var len__5729__auto___30643 = arguments.length;
var i__5730__auto___30644 = (0);
while(true){
if((i__5730__auto___30644 < len__5729__auto___30643)){
args30640.push((arguments[i__5730__auto___30644]));

var G__30645 = (i__5730__auto___30644 + (1));
i__5730__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var G__30642 = args30640.length;
switch (G__30642) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30640.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__30647 = (i + (2));
var G__30648 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__30647;
ret = G__30648;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30649_30653 = cljs.core.seq.call(null,v);
var chunk__30650_30654 = null;
var count__30651_30655 = (0);
var i__30652_30656 = (0);
while(true){
if((i__30652_30656 < count__30651_30655)){
var x_30657 = cljs.core._nth.call(null,chunk__30650_30654,i__30652_30656);
ret.push(x_30657);

var G__30658 = seq__30649_30653;
var G__30659 = chunk__30650_30654;
var G__30660 = count__30651_30655;
var G__30661 = (i__30652_30656 + (1));
seq__30649_30653 = G__30658;
chunk__30650_30654 = G__30659;
count__30651_30655 = G__30660;
i__30652_30656 = G__30661;
continue;
} else {
var temp__4425__auto___30662 = cljs.core.seq.call(null,seq__30649_30653);
if(temp__4425__auto___30662){
var seq__30649_30663__$1 = temp__4425__auto___30662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30649_30663__$1)){
var c__5474__auto___30664 = cljs.core.chunk_first.call(null,seq__30649_30663__$1);
var G__30665 = cljs.core.chunk_rest.call(null,seq__30649_30663__$1);
var G__30666 = c__5474__auto___30664;
var G__30667 = cljs.core.count.call(null,c__5474__auto___30664);
var G__30668 = (0);
seq__30649_30653 = G__30665;
chunk__30650_30654 = G__30666;
count__30651_30655 = G__30667;
i__30652_30656 = G__30668;
continue;
} else {
var x_30669 = cljs.core.first.call(null,seq__30649_30663__$1);
ret.push(x_30669);

var G__30670 = cljs.core.next.call(null,seq__30649_30663__$1);
var G__30671 = null;
var G__30672 = (0);
var G__30673 = (0);
seq__30649_30653 = G__30670;
chunk__30650_30654 = G__30671;
count__30651_30655 = G__30672;
i__30652_30656 = G__30673;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30674_30678 = cljs.core.seq.call(null,v);
var chunk__30675_30679 = null;
var count__30676_30680 = (0);
var i__30677_30681 = (0);
while(true){
if((i__30677_30681 < count__30676_30680)){
var x_30682 = cljs.core._nth.call(null,chunk__30675_30679,i__30677_30681);
ret.push(x_30682);

var G__30683 = seq__30674_30678;
var G__30684 = chunk__30675_30679;
var G__30685 = count__30676_30680;
var G__30686 = (i__30677_30681 + (1));
seq__30674_30678 = G__30683;
chunk__30675_30679 = G__30684;
count__30676_30680 = G__30685;
i__30677_30681 = G__30686;
continue;
} else {
var temp__4425__auto___30687 = cljs.core.seq.call(null,seq__30674_30678);
if(temp__4425__auto___30687){
var seq__30674_30688__$1 = temp__4425__auto___30687;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30674_30688__$1)){
var c__5474__auto___30689 = cljs.core.chunk_first.call(null,seq__30674_30688__$1);
var G__30690 = cljs.core.chunk_rest.call(null,seq__30674_30688__$1);
var G__30691 = c__5474__auto___30689;
var G__30692 = cljs.core.count.call(null,c__5474__auto___30689);
var G__30693 = (0);
seq__30674_30678 = G__30690;
chunk__30675_30679 = G__30691;
count__30676_30680 = G__30692;
i__30677_30681 = G__30693;
continue;
} else {
var x_30694 = cljs.core.first.call(null,seq__30674_30688__$1);
ret.push(x_30694);

var G__30695 = cljs.core.next.call(null,seq__30674_30688__$1);
var G__30696 = null;
var G__30697 = (0);
var G__30698 = (0);
seq__30674_30678 = G__30695;
chunk__30675_30679 = G__30696;
count__30676_30680 = G__30697;
i__30677_30681 = G__30698;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__30699_30703 = cljs.core.seq.call(null,v);
var chunk__30700_30704 = null;
var count__30701_30705 = (0);
var i__30702_30706 = (0);
while(true){
if((i__30702_30706 < count__30701_30705)){
var x_30707 = cljs.core._nth.call(null,chunk__30700_30704,i__30702_30706);
ret.push(x_30707);

var G__30708 = seq__30699_30703;
var G__30709 = chunk__30700_30704;
var G__30710 = count__30701_30705;
var G__30711 = (i__30702_30706 + (1));
seq__30699_30703 = G__30708;
chunk__30700_30704 = G__30709;
count__30701_30705 = G__30710;
i__30702_30706 = G__30711;
continue;
} else {
var temp__4425__auto___30712 = cljs.core.seq.call(null,seq__30699_30703);
if(temp__4425__auto___30712){
var seq__30699_30713__$1 = temp__4425__auto___30712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30699_30713__$1)){
var c__5474__auto___30714 = cljs.core.chunk_first.call(null,seq__30699_30713__$1);
var G__30715 = cljs.core.chunk_rest.call(null,seq__30699_30713__$1);
var G__30716 = c__5474__auto___30714;
var G__30717 = cljs.core.count.call(null,c__5474__auto___30714);
var G__30718 = (0);
seq__30699_30703 = G__30715;
chunk__30700_30704 = G__30716;
count__30701_30705 = G__30717;
i__30702_30706 = G__30718;
continue;
} else {
var x_30719 = cljs.core.first.call(null,seq__30699_30713__$1);
ret.push(x_30719);

var G__30720 = cljs.core.next.call(null,seq__30699_30713__$1);
var G__30721 = null;
var G__30722 = (0);
var G__30723 = (0);
seq__30699_30703 = G__30720;
chunk__30700_30704 = G__30721;
count__30701_30705 = G__30722;
i__30702_30706 = G__30723;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args30724 = [];
var len__5729__auto___30735 = arguments.length;
var i__5730__auto___30736 = (0);
while(true){
if((i__5730__auto___30736 < len__5729__auto___30735)){
args30724.push((arguments[i__5730__auto___30736]));

var G__30737 = (i__5730__auto___30736 + (1));
i__5730__auto___30736 = G__30737;
continue;
} else {
}
break;
}

var G__30726 = args30724.length;
switch (G__30726) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30724.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__30727 = obj;
G__30727.push(kfn.call(null,k),vfn.call(null,v));

return G__30727;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30728 = cljs.core.clone.call(null,handlers);
x30728.forEach = ((function (x30728,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30729 = cljs.core.seq.call(null,coll);
var chunk__30730 = null;
var count__30731 = (0);
var i__30732 = (0);
while(true){
if((i__30732 < count__30731)){
var vec__30733 = cljs.core._nth.call(null,chunk__30730,i__30732);
var k = cljs.core.nth.call(null,vec__30733,(0),null);
var v = cljs.core.nth.call(null,vec__30733,(1),null);
f.call(null,v,k);

var G__30739 = seq__30729;
var G__30740 = chunk__30730;
var G__30741 = count__30731;
var G__30742 = (i__30732 + (1));
seq__30729 = G__30739;
chunk__30730 = G__30740;
count__30731 = G__30741;
i__30732 = G__30742;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30729);
if(temp__4425__auto__){
var seq__30729__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30729__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__30729__$1);
var G__30743 = cljs.core.chunk_rest.call(null,seq__30729__$1);
var G__30744 = c__5474__auto__;
var G__30745 = cljs.core.count.call(null,c__5474__auto__);
var G__30746 = (0);
seq__30729 = G__30743;
chunk__30730 = G__30744;
count__30731 = G__30745;
i__30732 = G__30746;
continue;
} else {
var vec__30734 = cljs.core.first.call(null,seq__30729__$1);
var k = cljs.core.nth.call(null,vec__30734,(0),null);
var v = cljs.core.nth.call(null,vec__30734,(1),null);
f.call(null,v,k);

var G__30747 = cljs.core.next.call(null,seq__30729__$1);
var G__30748 = null;
var G__30749 = (0);
var G__30750 = (0);
seq__30729 = G__30747;
chunk__30730 = G__30748;
count__30731 = G__30749;
i__30732 = G__30750;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30728,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30728;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args30751 = [];
var len__5729__auto___30757 = arguments.length;
var i__5730__auto___30758 = (0);
while(true){
if((i__5730__auto___30758 < len__5729__auto___30757)){
args30751.push((arguments[i__5730__auto___30758]));

var G__30759 = (i__5730__auto___30758 + (1));
i__5730__auto___30758 = G__30759;
continue;
} else {
}
break;
}

var G__30753 = args30751.length;
switch (G__30753) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30751.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30754 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30754 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30755){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30755 = meta30755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30756,meta30755__$1){
var self__ = this;
var _30756__$1 = this;
return (new cognitect.transit.t_cognitect$transit30754(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30755__$1));
});

cognitect.transit.t_cognitect$transit30754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30756){
var self__ = this;
var _30756__$1 = this;
return self__.meta30755;
});

cognitect.transit.t_cognitect$transit30754.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30754.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30754.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30754.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30755","meta30755",-656443549,null)], null);
});

cognitect.transit.t_cognitect$transit30754.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30754.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30754";

cognitect.transit.t_cognitect$transit30754.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"cognitect.transit/t_cognitect$transit30754");
});

cognitect.transit.__GT_t_cognitect$transit30754 = (function cognitect$transit$__GT_t_cognitect$transit30754(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30755){
return (new cognitect.transit.t_cognitect$transit30754(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30755));
});

}

return (new cognitect.transit.t_cognitect$transit30754(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4671__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1454563844406