// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__31571__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__31570 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__31570,(0),null);
var body = cljs.core.nthnext.call(null,vec__31570,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__31571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31572__i = 0, G__31572__a = new Array(arguments.length -  0);
while (G__31572__i < G__31572__a.length) {G__31572__a[G__31572__i] = arguments[G__31572__i + 0]; ++G__31572__i;}
  args = new cljs.core.IndexedSeq(G__31572__a,0);
} 
return G__31571__delegate.call(this,args);};
G__31571.cljs$lang$maxFixedArity = 0;
G__31571.cljs$lang$applyTo = (function (arglist__31573){
var args = cljs.core.seq(arglist__31573);
return G__31571__delegate(args);
});
G__31571.cljs$core$IFn$_invoke$arity$variadic = G__31571__delegate;
return G__31571;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5443__auto__ = (function sablono$core$update_arglists_$_iter__31578(s__31579){
return (new cljs.core.LazySeq(null,(function (){
var s__31579__$1 = s__31579;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31579__$1);
if(temp__4425__auto__){
var s__31579__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31579__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__31579__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__31581 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__31580 = (0);
while(true){
if((i__31580 < size__5442__auto__)){
var args = cljs.core._nth.call(null,c__5441__auto__,i__31580);
cljs.core.chunk_append.call(null,b__31581,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__31582 = (i__31580 + (1));
i__31580 = G__31582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31581),sablono$core$update_arglists_$_iter__31578.call(null,cljs.core.chunk_rest.call(null,s__31579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31581),null);
}
} else {
var args = cljs.core.first.call(null,s__31579__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__31578.call(null,cljs.core.rest.call(null,s__31579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__5736__auto__ = [];
var len__5729__auto___31588 = arguments.length;
var i__5730__auto___31589 = (0);
while(true){
if((i__5730__auto___31589 < len__5729__auto___31588)){
args__5736__auto__.push((arguments[i__5730__auto___31589]));

var G__31590 = (i__5730__auto___31589 + (1));
i__5730__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5443__auto__ = (function sablono$core$iter__31584(s__31585){
return (new cljs.core.LazySeq(null,(function (){
var s__31585__$1 = s__31585;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31585__$1);
if(temp__4425__auto__){
var s__31585__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31585__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__31585__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__31587 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__31586 = (0);
while(true){
if((i__31586 < size__5442__auto__)){
var style = cljs.core._nth.call(null,c__5441__auto__,i__31586);
cljs.core.chunk_append.call(null,b__31587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__31591 = (i__31586 + (1));
i__31586 = G__31591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31587),sablono$core$iter__31584.call(null,cljs.core.chunk_rest.call(null,s__31585__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31587),null);
}
} else {
var style = cljs.core.first.call(null,s__31585__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__31584.call(null,cljs.core.rest.call(null,s__31585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq31583){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31583));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to31592 = (function sablono$core$link_to31592(var_args){
var args__5736__auto__ = [];
var len__5729__auto___31595 = arguments.length;
var i__5730__auto___31596 = (0);
while(true){
if((i__5730__auto___31596 < len__5729__auto___31595)){
args__5736__auto__.push((arguments[i__5730__auto___31596]));

var G__31597 = (i__5730__auto___31596 + (1));
i__5730__auto___31596 = G__31597;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.link_to31592.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.link_to31592.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to31592.cljs$lang$maxFixedArity = (1);

sablono.core.link_to31592.cljs$lang$applyTo = (function (seq31593){
var G__31594 = cljs.core.first.call(null,seq31593);
var seq31593__$1 = cljs.core.next.call(null,seq31593);
return sablono.core.link_to31592.cljs$core$IFn$_invoke$arity$variadic(G__31594,seq31593__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to31592);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to31598 = (function sablono$core$mail_to31598(var_args){
var args__5736__auto__ = [];
var len__5729__auto___31603 = arguments.length;
var i__5730__auto___31604 = (0);
while(true){
if((i__5730__auto___31604 < len__5729__auto___31603)){
args__5736__auto__.push((arguments[i__5730__auto___31604]));

var G__31605 = (i__5730__auto___31604 + (1));
i__5730__auto___31604 = G__31605;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.mail_to31598.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.mail_to31598.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__31601){
var vec__31602 = p__31601;
var content = cljs.core.nth.call(null,vec__31602,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4671__auto__ = content;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to31598.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to31598.cljs$lang$applyTo = (function (seq31599){
var G__31600 = cljs.core.first.call(null,seq31599);
var seq31599__$1 = cljs.core.next.call(null,seq31599);
return sablono.core.mail_to31598.cljs$core$IFn$_invoke$arity$variadic(G__31600,seq31599__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to31598);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list31606 = (function sablono$core$unordered_list31606(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5443__auto__ = (function sablono$core$unordered_list31606_$_iter__31611(s__31612){
return (new cljs.core.LazySeq(null,(function (){
var s__31612__$1 = s__31612;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31612__$1);
if(temp__4425__auto__){
var s__31612__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31612__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__31612__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__31614 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__31613 = (0);
while(true){
if((i__31613 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__31613);
cljs.core.chunk_append.call(null,b__31614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31615 = (i__31613 + (1));
i__31613 = G__31615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31614),sablono$core$unordered_list31606_$_iter__31611.call(null,cljs.core.chunk_rest.call(null,s__31612__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31614),null);
}
} else {
var x = cljs.core.first.call(null,s__31612__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list31606_$_iter__31611.call(null,cljs.core.rest.call(null,s__31612__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list31606);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list31616 = (function sablono$core$ordered_list31616(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5443__auto__ = (function sablono$core$ordered_list31616_$_iter__31621(s__31622){
return (new cljs.core.LazySeq(null,(function (){
var s__31622__$1 = s__31622;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31622__$1);
if(temp__4425__auto__){
var s__31622__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31622__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__31622__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__31624 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__31623 = (0);
while(true){
if((i__31623 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__31623);
cljs.core.chunk_append.call(null,b__31624,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__31625 = (i__31623 + (1));
i__31623 = G__31625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31624),sablono$core$ordered_list31616_$_iter__31621.call(null,cljs.core.chunk_rest.call(null,s__31622__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31624),null);
}
} else {
var x = cljs.core.first.call(null,s__31622__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list31616_$_iter__31621.call(null,cljs.core.rest.call(null,s__31622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list31616);
/**
 * Create an image element.
 */
sablono.core.image31626 = (function sablono$core$image31626(var_args){
var args31627 = [];
var len__5729__auto___31630 = arguments.length;
var i__5730__auto___31631 = (0);
while(true){
if((i__5730__auto___31631 < len__5729__auto___31630)){
args31627.push((arguments[i__5730__auto___31631]));

var G__31632 = (i__5730__auto___31631 + (1));
i__5730__auto___31631 = G__31632;
continue;
} else {
}
break;
}

var G__31629 = args31627.length;
switch (G__31629) {
case 1:
return sablono.core.image31626.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image31626.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31627.length)].join('')));

}
});

sablono.core.image31626.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image31626.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image31626.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image31626);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__31634_SHARP_,p2__31635_SHARP_){
return [cljs.core.str(p1__31634_SHARP_),cljs.core.str("["),cljs.core.str(p2__31635_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__31636_SHARP_,p2__31637_SHARP_){
return [cljs.core.str(p1__31636_SHARP_),cljs.core.str("-"),cljs.core.str(p2__31637_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field31638 = (function sablono$core$color_field31638(var_args){
var args31639 = [];
var len__5729__auto___31706 = arguments.length;
var i__5730__auto___31707 = (0);
while(true){
if((i__5730__auto___31707 < len__5729__auto___31706)){
args31639.push((arguments[i__5730__auto___31707]));

var G__31708 = (i__5730__auto___31707 + (1));
i__5730__auto___31707 = G__31708;
continue;
} else {
}
break;
}

var G__31641 = args31639.length;
switch (G__31641) {
case 1:
return sablono.core.color_field31638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field31638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31639.length)].join('')));

}
});

sablono.core.color_field31638.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.color_field31638.call(null,name__31559__auto__,null);
});

sablono.core.color_field31638.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.color_field31638.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field31638);

/**
 * Creates a date input field.
 */
sablono.core.date_field31642 = (function sablono$core$date_field31642(var_args){
var args31643 = [];
var len__5729__auto___31710 = arguments.length;
var i__5730__auto___31711 = (0);
while(true){
if((i__5730__auto___31711 < len__5729__auto___31710)){
args31643.push((arguments[i__5730__auto___31711]));

var G__31712 = (i__5730__auto___31711 + (1));
i__5730__auto___31711 = G__31712;
continue;
} else {
}
break;
}

var G__31645 = args31643.length;
switch (G__31645) {
case 1:
return sablono.core.date_field31642.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field31642.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31643.length)].join('')));

}
});

sablono.core.date_field31642.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.date_field31642.call(null,name__31559__auto__,null);
});

sablono.core.date_field31642.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.date_field31642.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field31642);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field31646 = (function sablono$core$datetime_field31646(var_args){
var args31647 = [];
var len__5729__auto___31714 = arguments.length;
var i__5730__auto___31715 = (0);
while(true){
if((i__5730__auto___31715 < len__5729__auto___31714)){
args31647.push((arguments[i__5730__auto___31715]));

var G__31716 = (i__5730__auto___31715 + (1));
i__5730__auto___31715 = G__31716;
continue;
} else {
}
break;
}

var G__31649 = args31647.length;
switch (G__31649) {
case 1:
return sablono.core.datetime_field31646.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field31646.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31647.length)].join('')));

}
});

sablono.core.datetime_field31646.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.datetime_field31646.call(null,name__31559__auto__,null);
});

sablono.core.datetime_field31646.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.datetime_field31646.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field31646);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field31650 = (function sablono$core$datetime_local_field31650(var_args){
var args31651 = [];
var len__5729__auto___31718 = arguments.length;
var i__5730__auto___31719 = (0);
while(true){
if((i__5730__auto___31719 < len__5729__auto___31718)){
args31651.push((arguments[i__5730__auto___31719]));

var G__31720 = (i__5730__auto___31719 + (1));
i__5730__auto___31719 = G__31720;
continue;
} else {
}
break;
}

var G__31653 = args31651.length;
switch (G__31653) {
case 1:
return sablono.core.datetime_local_field31650.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field31650.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31651.length)].join('')));

}
});

sablono.core.datetime_local_field31650.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.datetime_local_field31650.call(null,name__31559__auto__,null);
});

sablono.core.datetime_local_field31650.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.datetime_local_field31650.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field31650);

/**
 * Creates a email input field.
 */
sablono.core.email_field31654 = (function sablono$core$email_field31654(var_args){
var args31655 = [];
var len__5729__auto___31722 = arguments.length;
var i__5730__auto___31723 = (0);
while(true){
if((i__5730__auto___31723 < len__5729__auto___31722)){
args31655.push((arguments[i__5730__auto___31723]));

var G__31724 = (i__5730__auto___31723 + (1));
i__5730__auto___31723 = G__31724;
continue;
} else {
}
break;
}

var G__31657 = args31655.length;
switch (G__31657) {
case 1:
return sablono.core.email_field31654.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field31654.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31655.length)].join('')));

}
});

sablono.core.email_field31654.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.email_field31654.call(null,name__31559__auto__,null);
});

sablono.core.email_field31654.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.email_field31654.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field31654);

/**
 * Creates a file input field.
 */
sablono.core.file_field31658 = (function sablono$core$file_field31658(var_args){
var args31659 = [];
var len__5729__auto___31726 = arguments.length;
var i__5730__auto___31727 = (0);
while(true){
if((i__5730__auto___31727 < len__5729__auto___31726)){
args31659.push((arguments[i__5730__auto___31727]));

var G__31728 = (i__5730__auto___31727 + (1));
i__5730__auto___31727 = G__31728;
continue;
} else {
}
break;
}

var G__31661 = args31659.length;
switch (G__31661) {
case 1:
return sablono.core.file_field31658.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field31658.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31659.length)].join('')));

}
});

sablono.core.file_field31658.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.file_field31658.call(null,name__31559__auto__,null);
});

sablono.core.file_field31658.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.file_field31658.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field31658);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field31662 = (function sablono$core$hidden_field31662(var_args){
var args31663 = [];
var len__5729__auto___31730 = arguments.length;
var i__5730__auto___31731 = (0);
while(true){
if((i__5730__auto___31731 < len__5729__auto___31730)){
args31663.push((arguments[i__5730__auto___31731]));

var G__31732 = (i__5730__auto___31731 + (1));
i__5730__auto___31731 = G__31732;
continue;
} else {
}
break;
}

var G__31665 = args31663.length;
switch (G__31665) {
case 1:
return sablono.core.hidden_field31662.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field31662.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31663.length)].join('')));

}
});

sablono.core.hidden_field31662.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.hidden_field31662.call(null,name__31559__auto__,null);
});

sablono.core.hidden_field31662.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.hidden_field31662.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field31662);

/**
 * Creates a month input field.
 */
sablono.core.month_field31666 = (function sablono$core$month_field31666(var_args){
var args31667 = [];
var len__5729__auto___31734 = arguments.length;
var i__5730__auto___31735 = (0);
while(true){
if((i__5730__auto___31735 < len__5729__auto___31734)){
args31667.push((arguments[i__5730__auto___31735]));

var G__31736 = (i__5730__auto___31735 + (1));
i__5730__auto___31735 = G__31736;
continue;
} else {
}
break;
}

var G__31669 = args31667.length;
switch (G__31669) {
case 1:
return sablono.core.month_field31666.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field31666.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31667.length)].join('')));

}
});

sablono.core.month_field31666.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.month_field31666.call(null,name__31559__auto__,null);
});

sablono.core.month_field31666.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.month_field31666.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field31666);

/**
 * Creates a number input field.
 */
sablono.core.number_field31670 = (function sablono$core$number_field31670(var_args){
var args31671 = [];
var len__5729__auto___31738 = arguments.length;
var i__5730__auto___31739 = (0);
while(true){
if((i__5730__auto___31739 < len__5729__auto___31738)){
args31671.push((arguments[i__5730__auto___31739]));

var G__31740 = (i__5730__auto___31739 + (1));
i__5730__auto___31739 = G__31740;
continue;
} else {
}
break;
}

var G__31673 = args31671.length;
switch (G__31673) {
case 1:
return sablono.core.number_field31670.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field31670.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31671.length)].join('')));

}
});

sablono.core.number_field31670.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.number_field31670.call(null,name__31559__auto__,null);
});

sablono.core.number_field31670.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.number_field31670.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field31670);

/**
 * Creates a password input field.
 */
sablono.core.password_field31674 = (function sablono$core$password_field31674(var_args){
var args31675 = [];
var len__5729__auto___31742 = arguments.length;
var i__5730__auto___31743 = (0);
while(true){
if((i__5730__auto___31743 < len__5729__auto___31742)){
args31675.push((arguments[i__5730__auto___31743]));

var G__31744 = (i__5730__auto___31743 + (1));
i__5730__auto___31743 = G__31744;
continue;
} else {
}
break;
}

var G__31677 = args31675.length;
switch (G__31677) {
case 1:
return sablono.core.password_field31674.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field31674.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31675.length)].join('')));

}
});

sablono.core.password_field31674.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.password_field31674.call(null,name__31559__auto__,null);
});

sablono.core.password_field31674.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.password_field31674.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field31674);

/**
 * Creates a range input field.
 */
sablono.core.range_field31678 = (function sablono$core$range_field31678(var_args){
var args31679 = [];
var len__5729__auto___31746 = arguments.length;
var i__5730__auto___31747 = (0);
while(true){
if((i__5730__auto___31747 < len__5729__auto___31746)){
args31679.push((arguments[i__5730__auto___31747]));

var G__31748 = (i__5730__auto___31747 + (1));
i__5730__auto___31747 = G__31748;
continue;
} else {
}
break;
}

var G__31681 = args31679.length;
switch (G__31681) {
case 1:
return sablono.core.range_field31678.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field31678.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31679.length)].join('')));

}
});

sablono.core.range_field31678.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.range_field31678.call(null,name__31559__auto__,null);
});

sablono.core.range_field31678.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.range_field31678.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field31678);

/**
 * Creates a search input field.
 */
sablono.core.search_field31682 = (function sablono$core$search_field31682(var_args){
var args31683 = [];
var len__5729__auto___31750 = arguments.length;
var i__5730__auto___31751 = (0);
while(true){
if((i__5730__auto___31751 < len__5729__auto___31750)){
args31683.push((arguments[i__5730__auto___31751]));

var G__31752 = (i__5730__auto___31751 + (1));
i__5730__auto___31751 = G__31752;
continue;
} else {
}
break;
}

var G__31685 = args31683.length;
switch (G__31685) {
case 1:
return sablono.core.search_field31682.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field31682.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31683.length)].join('')));

}
});

sablono.core.search_field31682.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.search_field31682.call(null,name__31559__auto__,null);
});

sablono.core.search_field31682.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.search_field31682.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field31682);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field31686 = (function sablono$core$tel_field31686(var_args){
var args31687 = [];
var len__5729__auto___31754 = arguments.length;
var i__5730__auto___31755 = (0);
while(true){
if((i__5730__auto___31755 < len__5729__auto___31754)){
args31687.push((arguments[i__5730__auto___31755]));

var G__31756 = (i__5730__auto___31755 + (1));
i__5730__auto___31755 = G__31756;
continue;
} else {
}
break;
}

var G__31689 = args31687.length;
switch (G__31689) {
case 1:
return sablono.core.tel_field31686.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field31686.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31687.length)].join('')));

}
});

sablono.core.tel_field31686.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.tel_field31686.call(null,name__31559__auto__,null);
});

sablono.core.tel_field31686.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.tel_field31686.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field31686);

/**
 * Creates a text input field.
 */
sablono.core.text_field31690 = (function sablono$core$text_field31690(var_args){
var args31691 = [];
var len__5729__auto___31758 = arguments.length;
var i__5730__auto___31759 = (0);
while(true){
if((i__5730__auto___31759 < len__5729__auto___31758)){
args31691.push((arguments[i__5730__auto___31759]));

var G__31760 = (i__5730__auto___31759 + (1));
i__5730__auto___31759 = G__31760;
continue;
} else {
}
break;
}

var G__31693 = args31691.length;
switch (G__31693) {
case 1:
return sablono.core.text_field31690.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field31690.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31691.length)].join('')));

}
});

sablono.core.text_field31690.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.text_field31690.call(null,name__31559__auto__,null);
});

sablono.core.text_field31690.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.text_field31690.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field31690);

/**
 * Creates a time input field.
 */
sablono.core.time_field31694 = (function sablono$core$time_field31694(var_args){
var args31695 = [];
var len__5729__auto___31762 = arguments.length;
var i__5730__auto___31763 = (0);
while(true){
if((i__5730__auto___31763 < len__5729__auto___31762)){
args31695.push((arguments[i__5730__auto___31763]));

var G__31764 = (i__5730__auto___31763 + (1));
i__5730__auto___31763 = G__31764;
continue;
} else {
}
break;
}

var G__31697 = args31695.length;
switch (G__31697) {
case 1:
return sablono.core.time_field31694.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field31694.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31695.length)].join('')));

}
});

sablono.core.time_field31694.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.time_field31694.call(null,name__31559__auto__,null);
});

sablono.core.time_field31694.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.time_field31694.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field31694);

/**
 * Creates a url input field.
 */
sablono.core.url_field31698 = (function sablono$core$url_field31698(var_args){
var args31699 = [];
var len__5729__auto___31766 = arguments.length;
var i__5730__auto___31767 = (0);
while(true){
if((i__5730__auto___31767 < len__5729__auto___31766)){
args31699.push((arguments[i__5730__auto___31767]));

var G__31768 = (i__5730__auto___31767 + (1));
i__5730__auto___31767 = G__31768;
continue;
} else {
}
break;
}

var G__31701 = args31699.length;
switch (G__31701) {
case 1:
return sablono.core.url_field31698.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field31698.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31699.length)].join('')));

}
});

sablono.core.url_field31698.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.url_field31698.call(null,name__31559__auto__,null);
});

sablono.core.url_field31698.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.url_field31698.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field31698);

/**
 * Creates a week input field.
 */
sablono.core.week_field31702 = (function sablono$core$week_field31702(var_args){
var args31703 = [];
var len__5729__auto___31770 = arguments.length;
var i__5730__auto___31771 = (0);
while(true){
if((i__5730__auto___31771 < len__5729__auto___31770)){
args31703.push((arguments[i__5730__auto___31771]));

var G__31772 = (i__5730__auto___31771 + (1));
i__5730__auto___31771 = G__31772;
continue;
} else {
}
break;
}

var G__31705 = args31703.length;
switch (G__31705) {
case 1:
return sablono.core.week_field31702.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field31702.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31703.length)].join('')));

}
});

sablono.core.week_field31702.cljs$core$IFn$_invoke$arity$1 = (function (name__31559__auto__){
return sablono.core.week_field31702.call(null,name__31559__auto__,null);
});

sablono.core.week_field31702.cljs$core$IFn$_invoke$arity$2 = (function (name__31559__auto__,value__31560__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__31559__auto__,value__31560__auto__);
});

sablono.core.week_field31702.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field31702);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box31774 = (function sablono$core$check_box31774(var_args){
var args31775 = [];
var len__5729__auto___31778 = arguments.length;
var i__5730__auto___31779 = (0);
while(true){
if((i__5730__auto___31779 < len__5729__auto___31778)){
args31775.push((arguments[i__5730__auto___31779]));

var G__31780 = (i__5730__auto___31779 + (1));
i__5730__auto___31779 = G__31780;
continue;
} else {
}
break;
}

var G__31777 = args31775.length;
switch (G__31777) {
case 1:
return sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31775.length)].join('')));

}
});

sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box31774.call(null,name,null);
});

sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box31774.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box31774.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box31774.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box31774);
/**
 * Creates a radio button.
 */
sablono.core.radio_button31782 = (function sablono$core$radio_button31782(var_args){
var args31783 = [];
var len__5729__auto___31786 = arguments.length;
var i__5730__auto___31787 = (0);
while(true){
if((i__5730__auto___31787 < len__5729__auto___31786)){
args31783.push((arguments[i__5730__auto___31787]));

var G__31788 = (i__5730__auto___31787 + (1));
i__5730__auto___31787 = G__31788;
continue;
} else {
}
break;
}

var G__31785 = args31783.length;
switch (G__31785) {
case 1:
return sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31783.length)].join('')));

}
});

sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button31782.call(null,group,null);
});

sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button31782.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button31782.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button31782.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button31782);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options31790 = (function sablono$core$select_options31790(coll){
var iter__5443__auto__ = (function sablono$core$select_options31790_$_iter__31799(s__31800){
return (new cljs.core.LazySeq(null,(function (){
var s__31800__$1 = s__31800;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__31800__$1);
if(temp__4425__auto__){
var s__31800__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31800__$2)){
var c__5441__auto__ = cljs.core.chunk_first.call(null,s__31800__$2);
var size__5442__auto__ = cljs.core.count.call(null,c__5441__auto__);
var b__31802 = cljs.core.chunk_buffer.call(null,size__5442__auto__);
if((function (){var i__31801 = (0);
while(true){
if((i__31801 < size__5442__auto__)){
var x = cljs.core._nth.call(null,c__5441__auto__,i__31801);
cljs.core.chunk_append.call(null,b__31802,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31805 = x;
var text = cljs.core.nth.call(null,vec__31805,(0),null);
var val = cljs.core.nth.call(null,vec__31805,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31805,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31790.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__31807 = (i__31801 + (1));
i__31801 = G__31807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31802),sablono$core$select_options31790_$_iter__31799.call(null,cljs.core.chunk_rest.call(null,s__31800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31802),null);
}
} else {
var x = cljs.core.first.call(null,s__31800__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__31806 = x;
var text = cljs.core.nth.call(null,vec__31806,(0),null);
var val = cljs.core.nth.call(null,vec__31806,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__31806,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options31790.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options31790_$_iter__31799.call(null,cljs.core.rest.call(null,s__31800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5443__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options31790);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down31808 = (function sablono$core$drop_down31808(var_args){
var args31809 = [];
var len__5729__auto___31812 = arguments.length;
var i__5730__auto___31813 = (0);
while(true){
if((i__5730__auto___31813 < len__5729__auto___31812)){
args31809.push((arguments[i__5730__auto___31813]));

var G__31814 = (i__5730__auto___31813 + (1));
i__5730__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31811 = args31809.length;
switch (G__31811) {
case 2:
return sablono.core.drop_down31808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down31808.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31809.length)].join('')));

}
});

sablono.core.drop_down31808.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down31808.call(null,name,options,null);
});

sablono.core.drop_down31808.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down31808.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down31808);
/**
 * Creates a text area element.
 */
sablono.core.text_area31816 = (function sablono$core$text_area31816(var_args){
var args31817 = [];
var len__5729__auto___31820 = arguments.length;
var i__5730__auto___31821 = (0);
while(true){
if((i__5730__auto___31821 < len__5729__auto___31820)){
args31817.push((arguments[i__5730__auto___31821]));

var G__31822 = (i__5730__auto___31821 + (1));
i__5730__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31819 = args31817.length;
switch (G__31819) {
case 1:
return sablono.core.text_area31816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area31816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31817.length)].join('')));

}
});

sablono.core.text_area31816.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area31816.call(null,name,null);
});

sablono.core.text_area31816.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area31816.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area31816);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label31824 = (function sablono$core$label31824(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label31824);
/**
 * Creates a submit button.
 */
sablono.core.submit_button31825 = (function sablono$core$submit_button31825(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button31825);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button31826 = (function sablono$core$reset_button31826(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button31826);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to31827 = (function sablono$core$form_to31827(var_args){
var args__5736__auto__ = [];
var len__5729__auto___31832 = arguments.length;
var i__5730__auto___31833 = (0);
while(true){
if((i__5730__auto___31833 < len__5729__auto___31832)){
args__5736__auto__.push((arguments[i__5730__auto___31833]));

var G__31834 = (i__5730__auto___31833 + (1));
i__5730__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return sablono.core.form_to31827.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

sablono.core.form_to31827.cljs$core$IFn$_invoke$arity$variadic = (function (p__31830,body){
var vec__31831 = p__31830;
var method = cljs.core.nth.call(null,vec__31831,(0),null);
var action = cljs.core.nth.call(null,vec__31831,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to31827.cljs$lang$maxFixedArity = (1);

sablono.core.form_to31827.cljs$lang$applyTo = (function (seq31828){
var G__31829 = cljs.core.first.call(null,seq31828);
var seq31828__$1 = cljs.core.next.call(null,seq31828);
return sablono.core.form_to31827.cljs$core$IFn$_invoke$arity$variadic(G__31829,seq31828__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to31827);

//# sourceMappingURL=core.js.map?rel=1454563846202