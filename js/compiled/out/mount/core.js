// Compiled by ClojureScript 1.7.170 {}
goog.provide('mount.core');
goog.require('cljs.core');
goog.require('mount.tools.macro');
if(typeof mount.core._args !== 'undefined'){
} else {
mount.core._args = cljs.core.atom.call(null,new cljs.core.Keyword(null,"no-args","no-args",2028338665));
}
if(typeof mount.core.state_seq !== 'undefined'){
} else {
mount.core.state_seq = cljs.core.atom.call(null,(0));
}
if(typeof mount.core.mode !== 'undefined'){
} else {
mount.core.mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"clj","clj",-660495428));
}
if(typeof mount.core.meta_state !== 'undefined'){
} else {
mount.core.meta_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof mount.core.running !== 'undefined'){
} else {
mount.core.running = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mount.core.make_state_seq = (function mount$core$make_state_seq(state){
var or__4671__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state));
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return cljs.core.swap_BANG_.call(null,mount.core.state_seq,cljs.core.inc);
}
});

/**
* @constructor
 * @implements {mount.core.Object}
*/
mount.core.NotStartedState = (function (state){
this.state = state;
})
mount.core.NotStartedState.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str("'"),cljs.core.str(self__.state),cljs.core.str("' is not started (to start all the states call mount/start)")].join('');
});

mount.core.NotStartedState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

mount.core.NotStartedState.cljs$lang$type = true;

mount.core.NotStartedState.cljs$lang$ctorStr = "mount.core/NotStartedState";

mount.core.NotStartedState.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"mount.core/NotStartedState");
});

mount.core.__GT_NotStartedState = (function mount$core$__GT_NotStartedState(state){
return (new mount.core.NotStartedState(state));
});

mount.core.validate = (function mount$core$validate(p__19591){
var map__19594 = p__19591;
var map__19594__$1 = ((((!((map__19594 == null)))?((((map__19594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19594):map__19594);
var lifecycle = map__19594__$1;
var start = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__19594__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
if(cljs.core.not.call(null,start)){
throw [cljs.core.str("can't start a stateful thing without a start function. (i.e. missing :start fn)")].join('');
} else {
if(cljs.core.truth_((function (){var and__4659__auto__ = suspend;
if(cljs.core.truth_(and__4659__auto__)){
return cljs.core.not.call(null,resume);
} else {
return and__4659__auto__;
}
})())){
throw [cljs.core.str("suspendable state should have a resume function (i.e. missing :resume fn)")].join('');
} else {
return null;
}
}
});
mount.core.with_ns = (function mount$core$with_ns(ns,name){
return [cljs.core.str("#'"),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join('');
});
mount.core.pounded_QMARK_ = (function mount$core$pounded_QMARK_(f){
var pound = "(fn* [] ";
return [cljs.core.str(f)].join('').startsWith(pound);
});
mount.core.unpound = (function mount$core$unpound(f){
if(cljs.core.truth_(mount.core.pounded_QMARK_.call(null,f))){
return cljs.core.nth.call(null,f,(2));
} else {
return f;
}
});
/**
 * in case a namespace is recompiled without calling (mount/stop),
 * a running state instance will still be running.
 * this function stops this 'lost' state instance.
 * it is meant to be called by defstate before defining a new state
 */
mount.core.cleanup_if_dirty = (function mount$core$cleanup_if_dirty(state){
var temp__4425__auto__ = cljs.core.deref.call(null,mount.core.running).call(null,state);
if(cljs.core.truth_(temp__4425__auto__)){
var map__19598 = temp__4425__auto__;
var map__19598__$1 = ((((!((map__19598 == null)))?((((map__19598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19598):map__19598);
var up = map__19598__$1;
var stop = cljs.core.get.call(null,map__19598__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
if(cljs.core.truth_(stop)){
var note_19600 = [cljs.core.str("<< stopping.. "),cljs.core.str(state),cljs.core.str(" (namespace was recompiled)")].join('');
console.log(note_19600);

stop.call(null);
} else {
}

return cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);
} else {
return null;
}
});
mount.core.current_state = (function mount$core$current_state(state){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"inst","inst",645962501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)));
});
mount.core.alter_state_BANG_ = (function mount$core$alter_state_BANG_(p__19601,value){
var map__19604 = p__19601;
var map__19604__$1 = ((((!((map__19604 == null)))?((((map__19604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19604):map__19604);
var inst = cljs.core.get.call(null,map__19604__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
return cljs.core.reset_BANG_.call(null,inst,value);
});
mount.core.update_meta_BANG_ = (function mount$core$update_meta_BANG_(path,v){
return cljs.core.swap_BANG_.call(null,mount.core.meta_state,cljs.core.assoc_in,path,v);
});
mount.core.record_BANG_ = (function mount$core$record_BANG_(state_name,f,done){
var state = f.call(null);
cljs.core.swap_BANG_.call(null,done,cljs.core.conj,state_name);

return state;
});
mount.core.up = (function mount$core$up(state,p__19606,done){
var map__19610 = p__19606;
var map__19610__$1 = ((((!((map__19610 == null)))?((((map__19610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19610):map__19610);
var current = map__19610__$1;
var start = cljs.core.get.call(null,map__19610__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__19610__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var resume = cljs.core.get.call(null,map__19610__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
var status = cljs.core.get.call(null,map__19610__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
return null;
} else {
var s = (function (){try{if(cljs.core.truth_(new cljs.core.Keyword(null,"suspended","suspended",-753628113).cljs$core$IFn$_invoke$arity$1(status))){
return mount.core.record_BANG_.call(null,state,resume,done);
} else {
return mount.core.record_BANG_.call(null,state,start,done);
}
}catch (e19612){var t__15596__auto__ = e19612;
throw [cljs.core.str([cljs.core.str("could not start ["),cljs.core.str(state),cljs.core.str("] due to")].join('')),cljs.core.str(" "),cljs.core.str(t__15596__auto__)].join('');
}})();
mount.core.alter_state_BANG_.call(null,current,s);

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.assoc,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stop","stop",-2140911342),stop], null));

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null));
}
});
mount.core.down = (function mount$core$down(state,p__19613,done){
var map__19617 = p__19613;
var map__19617__$1 = ((((!((map__19617 == null)))?((((map__19617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19617):map__19617);
var current = map__19617__$1;
var stop = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var status = cljs.core.get.call(null,map__19617__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(cljs.core.some.call(null,status,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"started","started",585705024),null,new cljs.core.Keyword(null,"suspended","suspended",-753628113),null], null), null)))){
if(cljs.core.truth_(stop)){
try{mount.core.record_BANG_.call(null,state,stop,done);
}catch (e19619){var t__15596__auto___19620 = e19619;
throw [cljs.core.str([cljs.core.str("could not stop ["),cljs.core.str(state),cljs.core.str("] due to")].join('')),cljs.core.str(" "),cljs.core.str(t__15596__auto___19620)].join('');
}} else {
}

mount.core.alter_state_BANG_.call(null,current,(new mount.core.NotStartedState(state)));

cljs.core.swap_BANG_.call(null,mount.core.running,cljs.core.dissoc,state);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),null], null), null));
} else {
return null;
}
});
mount.core.sigstop = (function mount$core$sigstop(state,p__19621,done){
var map__19625 = p__19621;
var map__19625__$1 = ((((!((map__19625 == null)))?((((map__19625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19625):map__19625);
var current = map__19625__$1;
var resume = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
var suspend = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var status = cljs.core.get.call(null,map__19625__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_((function (){var and__4659__auto__ = new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status);
if(cljs.core.truth_(and__4659__auto__)){
return resume;
} else {
return and__4659__auto__;
}
})())){
if(cljs.core.truth_(suspend)){
var s_19628 = (function (){try{return mount.core.record_BANG_.call(null,state,suspend,done);
}catch (e19627){var t__15596__auto__ = e19627;
throw [cljs.core.str([cljs.core.str("could not suspend ["),cljs.core.str(state),cljs.core.str("] due to")].join('')),cljs.core.str(" "),cljs.core.str(t__15596__auto__)].join('');
}})();
mount.core.alter_state_BANG_.call(null,current,s_19628);
} else {
}

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suspended","suspended",-753628113),null], null), null));
} else {
return null;
}
});
mount.core.sigcont = (function mount$core$sigcont(state,p__19629,done){
var map__19633 = p__19629;
var map__19633__$1 = ((((!((map__19633 == null)))?((((map__19633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19633):map__19633);
var current = map__19633__$1;
var resume = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
var status = cljs.core.get.call(null,map__19633__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_(new cljs.core.Keyword(null,"suspended","suspended",-753628113).cljs$core$IFn$_invoke$arity$1(status))){
var s = (function (){try{return mount.core.record_BANG_.call(null,state,resume,done);
}catch (e19635){var t__15596__auto__ = e19635;
throw [cljs.core.str([cljs.core.str("could not resume ["),cljs.core.str(state),cljs.core.str("] due to")].join('')),cljs.core.str(" "),cljs.core.str(t__15596__auto__)].join('');
}})();
mount.core.alter_state_BANG_.call(null,current,s);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),null], null), null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
mount.core.DerefableState = (function (name){
this.name = name;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
mount.core.DerefableState.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var map__19636 = cljs.core.deref.call(null,mount.core.meta_state).call(null,self__.name);
var map__19636__$1 = ((((!((map__19636 == null)))?((((map__19636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19636):map__19636);
var state = map__19636__$1;
var status = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var inst = cljs.core.get.call(null,map__19636__$1,new cljs.core.Keyword(null,"inst","inst",645962501));
if(cljs.core.truth_(new cljs.core.Keyword(null,"started","started",585705024).cljs$core$IFn$_invoke$arity$1(status))){
} else {
mount.core.up.call(null,self__.name,state,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY));
}

return cljs.core.deref.call(null,inst);
});

mount.core.DerefableState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null);
});

mount.core.DerefableState.cljs$lang$type = true;

mount.core.DerefableState.cljs$lang$ctorStr = "mount.core/DerefableState";

mount.core.DerefableState.cljs$lang$ctorPrWriter = (function (this__5269__auto__,writer__5270__auto__,opt__5271__auto__){
return cljs.core._write.call(null,writer__5270__auto__,"mount.core/DerefableState");
});

mount.core.__GT_DerefableState = (function mount$core$__GT_DerefableState(name){
return (new mount.core.DerefableState(name));
});

mount.core.log = (function mount$core$log(msg){
return console.log(msg);
});
mount.core.in_cljc_mode = (function mount$core$in_cljc_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"cljc","cljc",-1728400583));
});
mount.core.in_clj_mode = (function mount$core$in_clj_mode(){
return cljs.core.reset_BANG_.call(null,mount.core.mode,new cljs.core.Keyword(null,"clj","clj",-660495428));
});
mount.core.args = (function mount$core$args(){
return cljs.core.deref.call(null,mount.core._args);
});
mount.core.find_all_states = (function mount$core$find_all_states(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,mount.core.meta_state));
});
mount.core.var_to_str = (function mount$core$var_to_str(v){
if((v instanceof cljs.core.Var)){
var map__19642 = cljs.core.meta.call(null,v);
var map__19642__$1 = ((((!((map__19642 == null)))?((((map__19642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19642):map__19642);
var ns = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__19642__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return mount.core.with_ns.call(null,ns,name);
} else {
return v;
}
});
mount.core.bring = (function mount$core$bring(states,fun,order){
var done = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var $_19656 = states;
var $_19657__$1 = cljs.core.map.call(null,mount.core.var_to_str,$_19656);
var $_19658__$2 = cljs.core.select_keys.call(null,cljs.core.deref.call(null,mount.core.meta_state),$_19657__$1);
var $_19659__$3 = cljs.core.sort_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.val),order,$_19658__$2);
var $_19660__$4 = (function (){var seq__19650 = cljs.core.seq.call(null,$_19659__$3);
var chunk__19651 = null;
var count__19652 = (0);
var i__19653 = (0);
while(true){
if((i__19653 < count__19652)){
var vec__19654 = cljs.core._nth.call(null,chunk__19651,i__19653);
var k = cljs.core.nth.call(null,vec__19654,(0),null);
var v = cljs.core.nth.call(null,vec__19654,(1),null);
fun.call(null,k,v,done);

var G__19661 = seq__19650;
var G__19662 = chunk__19651;
var G__19663 = count__19652;
var G__19664 = (i__19653 + (1));
seq__19650 = G__19661;
chunk__19651 = G__19662;
count__19652 = G__19663;
i__19653 = G__19664;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__19650);
if(temp__4425__auto__){
var seq__19650__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19650__$1)){
var c__5474__auto__ = cljs.core.chunk_first.call(null,seq__19650__$1);
var G__19665 = cljs.core.chunk_rest.call(null,seq__19650__$1);
var G__19666 = c__5474__auto__;
var G__19667 = cljs.core.count.call(null,c__5474__auto__);
var G__19668 = (0);
seq__19650 = G__19665;
chunk__19651 = G__19666;
count__19652 = G__19667;
i__19653 = G__19668;
continue;
} else {
var vec__19655 = cljs.core.first.call(null,seq__19650__$1);
var k = cljs.core.nth.call(null,vec__19655,(0),null);
var v = cljs.core.nth.call(null,vec__19655,(1),null);
fun.call(null,k,v,done);

var G__19669 = cljs.core.next.call(null,seq__19650__$1);
var G__19670 = null;
var G__19671 = (0);
var G__19672 = (0);
seq__19650 = G__19669;
chunk__19651 = G__19670;
count__19652 = G__19671;
i__19653 = G__19672;
continue;
}
} else {
return null;
}
}
break;
}
})();

return cljs.core.deref.call(null,done);
});
/**
 * merges with overriding _certain_ non existing keys.
 * i.e. :suspend is in a 'state', but not in a 'substitute': it should be overriden with nil
 *      however other keys of 'state' (such as :ns,:name,:order) should not be overriden
 */
mount.core.merge_lifecycles = (function mount$core$merge_lifecycles(var_args){
var args19673 = [];
var len__5729__auto___19679 = arguments.length;
var i__5730__auto___19680 = (0);
while(true){
if((i__5730__auto___19680 < len__5729__auto___19679)){
args19673.push((arguments[i__5730__auto___19680]));

var G__19681 = (i__5730__auto___19680 + (1));
i__5730__auto___19680 = G__19681;
continue;
} else {
}
break;
}

var G__19675 = args19673.length;
switch (G__19675) {
case 2:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19673.length)].join('')));

}
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$2 = (function (state,sub){
return mount.core.merge_lifecycles.call(null,state,null,sub);
});

mount.core.merge_lifecycles.cljs$core$IFn$_invoke$arity$3 = (function (state,origin,p__19676){
var map__19677 = p__19676;
var map__19677__$1 = ((((!((map__19677 == null)))?((((map__19677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19677):map__19677);
var start = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var suspend = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"suspend","suspend",849690959));
var resume = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"resume","resume",-118572261));
var status = cljs.core.get.call(null,map__19677__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"origin","origin",1037372088),origin,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop,new cljs.core.Keyword(null,"suspend","suspend",849690959),suspend,new cljs.core.Keyword(null,"resume","resume",-118572261),resume);
});

mount.core.merge_lifecycles.cljs$lang$maxFixedArity = 3;
mount.core.rollback_BANG_ = (function mount$core$rollback_BANG_(state){
var map__19685 = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var map__19685__$1 = ((((!((map__19685 == null)))?((((map__19685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19685):map__19685);
var sub = map__19685__$1;
var origin = cljs.core.get.call(null,map__19685__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(origin)){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,sub,origin));
} else {
return null;
}
});
mount.core.substitute_BANG_ = (function mount$core$substitute_BANG_(state,with$){
var lifecycle_fns = (function (p1__19687_SHARP_){
return cljs.core.select_keys.call(null,p1__19687_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.Keyword(null,"suspend","suspend",849690959),new cljs.core.Keyword(null,"resume","resume",-118572261),new cljs.core.Keyword(null,"status","status",-1997798413)], null));
});
var origin = cljs.core.deref.call(null,mount.core.meta_state).call(null,state);
var sub = cljs.core.deref.call(null,mount.core.meta_state).call(null,with$);
mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [with$,new cljs.core.Keyword(null,"sub?","sub?",768712042)], null),true);

return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [state], null),mount.core.merge_lifecycles.call(null,origin,lifecycle_fns.call(null,origin),sub));
});
mount.core.unsub = (function mount$core$unsub(state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sub?","sub?",768712042).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,mount.core.meta_state).call(null,state)))){
return mount.core.update_meta_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,new cljs.core.Keyword(null,"sub?","sub?",768712042)], null),null);
} else {
return null;
}
});
mount.core.all_without_subs = (function mount$core$all_without_subs(){
return cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"sub?","sub?",768712042),cljs.core.deref.call(null,mount.core.meta_state)),mount.core.find_all_states.call(null));
});
mount.core.start = (function mount$core$start(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19689 = arguments.length;
var i__5730__auto___19690 = (0);
while(true){
if((i__5730__auto___19690 < len__5729__auto___19689)){
args__5736__auto__.push((arguments[i__5730__auto___19690]));

var G__19691 = (i__5730__auto___19690 + (1));
i__5730__auto___19690 = G__19691;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.start.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var states__$1 = (function (){var or__4671__auto__ = cljs.core.seq.call(null,states);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"started","started",585705024),mount.core.bring.call(null,states__$1,mount.core.up,cljs.core._LT_)], null);
});

mount.core.start.cljs$lang$maxFixedArity = (0);

mount.core.start.cljs$lang$applyTo = (function (seq19688){
return mount.core.start.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19688));
});
mount.core.stop = (function mount$core$stop(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19693 = arguments.length;
var i__5730__auto___19694 = (0);
while(true){
if((i__5730__auto___19694 < len__5729__auto___19693)){
args__5736__auto__.push((arguments[i__5730__auto___19694]));

var G__19695 = (i__5730__auto___19694 + (1));
i__5730__auto___19694 = G__19695;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.stop.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var states__$1 = (function (){var or__4671__auto__ = states;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return mount.core.find_all_states.call(null);
}
})();
var _ = cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.unsub,states__$1));
var stopped = mount.core.bring.call(null,states__$1,mount.core.down,cljs.core._GT_);
cljs.core.dorun.call(null,cljs.core.map.call(null,mount.core.rollback_BANG_,states__$1));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stopped","stopped",-1490414640),stopped], null);
});

mount.core.stop.cljs$lang$maxFixedArity = (0);

mount.core.stop.cljs$lang$applyTo = (function (seq19692){
return mount.core.stop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19692));
});
mount.core.stop_except = (function mount$core$stop_except(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19697 = arguments.length;
var i__5730__auto___19698 = (0);
while(true){
if((i__5730__auto___19698 < len__5729__auto___19697)){
args__5736__auto__.push((arguments[i__5730__auto___19698]));

var G__19699 = (i__5730__auto___19698 + (1));
i__5730__auto___19698 = G__19699;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var all = cljs.core.set.call(null,mount.core.find_all_states.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var states__$2 = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),all);
return cljs.core.apply.call(null,mount.core.stop,states__$2);
});

mount.core.stop_except.cljs$lang$maxFixedArity = (0);

mount.core.stop_except.cljs$lang$applyTo = (function (seq19696){
return mount.core.stop_except.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19696));
});
mount.core.start_with_args = (function mount$core$start_with_args(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19702 = arguments.length;
var i__5730__auto___19703 = (0);
while(true){
if((i__5730__auto___19703 < len__5729__auto___19702)){
args__5736__auto__.push((arguments[i__5730__auto___19703]));

var G__19704 = (i__5730__auto___19703 + (1));
i__5730__auto___19703 = G__19704;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((1) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((1)),(0))):null);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5737__auto__);
});

mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic = (function (xs,states){
cljs.core.reset_BANG_.call(null,mount.core._args,xs);

if(cljs.core.truth_(cljs.core.first.call(null,states))){
return cljs.core.apply.call(null,mount.core.start,states);
} else {
return mount.core.start.call(null);
}
});

mount.core.start_with_args.cljs$lang$maxFixedArity = (1);

mount.core.start_with_args.cljs$lang$applyTo = (function (seq19700){
var G__19701 = cljs.core.first.call(null,seq19700);
var seq19700__$1 = cljs.core.next.call(null,seq19700);
return mount.core.start_with_args.cljs$core$IFn$_invoke$arity$variadic(G__19701,seq19700__$1);
});
mount.core.start_with = (function mount$core$start_with(with$){
var seq__19711_19717 = cljs.core.seq.call(null,with$);
var chunk__19712_19718 = null;
var count__19713_19719 = (0);
var i__19714_19720 = (0);
while(true){
if((i__19714_19720 < count__19713_19719)){
var vec__19715_19721 = cljs.core._nth.call(null,chunk__19712_19718,i__19714_19720);
var from_19722 = cljs.core.nth.call(null,vec__19715_19721,(0),null);
var to_19723 = cljs.core.nth.call(null,vec__19715_19721,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_19722),mount.core.var_to_str.call(null,to_19723));

var G__19724 = seq__19711_19717;
var G__19725 = chunk__19712_19718;
var G__19726 = count__19713_19719;
var G__19727 = (i__19714_19720 + (1));
seq__19711_19717 = G__19724;
chunk__19712_19718 = G__19725;
count__19713_19719 = G__19726;
i__19714_19720 = G__19727;
continue;
} else {
var temp__4425__auto___19728 = cljs.core.seq.call(null,seq__19711_19717);
if(temp__4425__auto___19728){
var seq__19711_19729__$1 = temp__4425__auto___19728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19711_19729__$1)){
var c__5474__auto___19730 = cljs.core.chunk_first.call(null,seq__19711_19729__$1);
var G__19731 = cljs.core.chunk_rest.call(null,seq__19711_19729__$1);
var G__19732 = c__5474__auto___19730;
var G__19733 = cljs.core.count.call(null,c__5474__auto___19730);
var G__19734 = (0);
seq__19711_19717 = G__19731;
chunk__19712_19718 = G__19732;
count__19713_19719 = G__19733;
i__19714_19720 = G__19734;
continue;
} else {
var vec__19716_19735 = cljs.core.first.call(null,seq__19711_19729__$1);
var from_19736 = cljs.core.nth.call(null,vec__19716_19735,(0),null);
var to_19737 = cljs.core.nth.call(null,vec__19716_19735,(1),null);
mount.core.substitute_BANG_.call(null,mount.core.var_to_str.call(null,from_19736),mount.core.var_to_str.call(null,to_19737));

var G__19738 = cljs.core.next.call(null,seq__19711_19729__$1);
var G__19739 = null;
var G__19740 = (0);
var G__19741 = (0);
seq__19711_19717 = G__19738;
chunk__19712_19718 = G__19739;
count__19713_19719 = G__19740;
i__19714_19720 = G__19741;
continue;
}
} else {
}
}
break;
}

return mount.core.start.call(null);
});
mount.core.start_without = (function mount$core$start_without(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19743 = arguments.length;
var i__5730__auto___19744 = (0);
while(true){
if((i__5730__auto___19744 < len__5729__auto___19743)){
args__5736__auto__.push((arguments[i__5730__auto___19744]));

var G__19745 = (i__5730__auto___19744 + (1));
i__5730__auto___19744 = G__19745;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic = (function (states){
if(cljs.core.truth_(cljs.core.first.call(null,states))){
var app = cljs.core.set.call(null,mount.core.all_without_subs.call(null));
var states__$1 = cljs.core.map.call(null,mount.core.var_to_str,states);
var without = cljs.core.remove.call(null,cljs.core.set.call(null,states__$1),app);
return cljs.core.apply.call(null,mount.core.start,without);
} else {
return mount.core.start.call(null);
}
});

mount.core.start_without.cljs$lang$maxFixedArity = (0);

mount.core.start_without.cljs$lang$applyTo = (function (seq19742){
return mount.core.start_without.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19742));
});
mount.core.suspend = (function mount$core$suspend(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19747 = arguments.length;
var i__5730__auto___19748 = (0);
while(true){
if((i__5730__auto___19748 < len__5729__auto___19747)){
args__5736__auto__.push((arguments[i__5730__auto___19748]));

var G__19749 = (i__5730__auto___19748 + (1));
i__5730__auto___19748 = G__19749;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.suspend.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.suspend.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var states__$1 = (function (){var or__4671__auto__ = cljs.core.seq.call(null,states);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suspended","suspended",-753628113),mount.core.bring.call(null,states__$1,mount.core.sigstop,cljs.core._LT_)], null);
});

mount.core.suspend.cljs$lang$maxFixedArity = (0);

mount.core.suspend.cljs$lang$applyTo = (function (seq19746){
return mount.core.suspend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19746));
});
mount.core.resume = (function mount$core$resume(var_args){
var args__5736__auto__ = [];
var len__5729__auto___19751 = arguments.length;
var i__5730__auto___19752 = (0);
while(true){
if((i__5730__auto___19752 < len__5729__auto___19751)){
args__5736__auto__.push((arguments[i__5730__auto___19752]));

var G__19753 = (i__5730__auto___19752 + (1));
i__5730__auto___19752 = G__19753;
continue;
} else {
}
break;
}

var argseq__5737__auto__ = ((((0) < args__5736__auto__.length))?(new cljs.core.IndexedSeq(args__5736__auto__.slice((0)),(0))):null);
return mount.core.resume.cljs$core$IFn$_invoke$arity$variadic(argseq__5737__auto__);
});

mount.core.resume.cljs$core$IFn$_invoke$arity$variadic = (function (states){
var states__$1 = (function (){var or__4671__auto__ = cljs.core.seq.call(null,states);
if(or__4671__auto__){
return or__4671__auto__;
} else {
return mount.core.all_without_subs.call(null);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"resumed","resumed",897761340),mount.core.bring.call(null,states__$1,mount.core.sigcont,cljs.core._LT_)], null);
});

mount.core.resume.cljs$lang$maxFixedArity = (0);

mount.core.resume.cljs$lang$applyTo = (function (seq19750){
return mount.core.resume.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19750));
});

//# sourceMappingURL=core.js.map?rel=1454563829279