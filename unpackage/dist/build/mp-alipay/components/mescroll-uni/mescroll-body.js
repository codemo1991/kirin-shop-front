;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/mescroll-uni/mescroll-body"],{"0e3b":function(t,o,n){"use strict";n.r(o);var e=n("9475"),i=n("6468");for(var r in i)"default"!==r&&function(t){n.d(o,t,(function(){return i[t]}))}(r);n("5bb2");var s,a=n("f0c5"),u=Object(a["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);o["default"]=u.exports},"5bb2":function(t,o,n){"use strict";var e=n("6b14"),i=n.n(e);i.a},6468:function(t,o,n){"use strict";n.r(o);var e=n("c5b3"),i=n.n(e);for(var r in e)"default"!==r&&function(t){n.d(o,t,(function(){return e[t]}))}(r);o["default"]=i.a},"6b14":function(t,o,n){},9475:function(t,o,n){"use strict";var e,i=function(){var t=this,o=t.$createElement;t._self._c},r=[];n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return r})),n.d(o,"a",(function(){return e}))},c5b3:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=r(n("f3d4")),i=r(n("a646"));function r(t){return t&&t.__esModule?t:{default:t}}var s=function(){n.e("components/mescroll-uni/components/mescroll-empty").then(function(){return resolve(n("90e5"))}.bind(null,n)).catch(n.oe)},a=function(){n.e("components/mescroll-uni/components/mescroll-top").then(function(){return resolve(n("f95a"))}.bind(null,n)).catch(n.oe)},u={components:{MescrollEmpty:s,MescrollTop:a},data:function(){return{mescroll:{optDown:{},optUp:{}},downHight:0,downRate:0,downLoadType:4,upLoadType:0,isShowEmpty:!1,isShowToTop:!1,windowHeight:0,statusBarHeight:0,isSafearea:!1}},props:{down:Object,up:Object,top:[String,Number],topbar:Boolean,bottom:[String,Number],safearea:Boolean,height:[String,Number]},computed:{minHeight:function(){return this.toPx(this.height||"100%")+"px"},numTop:function(){return this.toPx(this.top)+(this.topbar?this.statusBarHeight:0)},padTop:function(){return this.numTop+"px"},numBottom:function(){return this.toPx(this.bottom)},padBottom:function(){return this.numBottom+"px"},padBottomConstant:function(){return this.isSafearea?"calc("+this.padBottom+" + constant(safe-area-inset-bottom))":this.padBottom},padBottomEnv:function(){return this.isSafearea?"calc("+this.padBottom+" + env(safe-area-inset-bottom))":this.padBottom},isDownReset:function(){return 3===this.downLoadType||4===this.downLoadType},transition:function(){return this.isDownReset?"transform 300ms":this.downTransition},translateY:function(){return this.downHight>0?"translateY("+this.downHight+"px)":""},isDownLoading:function(){return 3===this.downLoadType},downRotate:function(){return"rotate("+360*this.downRate+"deg)"},downText:function(){switch(this.downLoadType){case 1:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.optDown.textLoading;default:return this.mescroll.optDown.textInOffset}}},methods:{toPx:function(o){if("string"===typeof o)if(-1!==o.indexOf("px"))if(-1!==o.indexOf("rpx"))o=o.replace("rpx","");else{if(-1===o.indexOf("upx"))return Number(o.replace("px",""));o=o.replace("upx","")}else if(-1!==o.indexOf("%")){var n=Number(o.replace("%",""))/100;return this.windowHeight*n}return o?t.upx2px(Number(o)):0},touchstartEvent:function(t){this.mescroll.touchstartEvent(t)},touchmoveEvent:function(t){this.mescroll.touchmoveEvent(t)},touchendEvent:function(t){this.mescroll.touchendEvent(t)},emptyClick:function(){this.$emit("emptyclick",this.mescroll)},toTopClick:function(){this.mescroll.scrollTo(0,this.mescroll.optUp.toTop.duration),this.$emit("topclick",this.mescroll)}},created:function(){var o=this,n={down:{inOffset:function(t){o.downLoadType=1},outOffset:function(t){o.downLoadType=2},onMoving:function(t,n,e){o.downHight=e,o.downRate=n},showLoading:function(t,n){o.downLoadType=3,o.downHight=n},endDownScroll:function(t){o.downLoadType=4,o.downHight=0},callback:function(t){o.$emit("down",t)}},up:{showLoading:function(){o.upLoadType=1},showNoMore:function(){o.upLoadType=2},hideUpScroll:function(){o.upLoadType=0},empty:{onShow:function(t){o.isShowEmpty=t}},toTop:{onShow:function(t){o.isShowToTop=t}},callback:function(t){o.$emit("up",t)}}};e.default.extend(n,i.default);var r=JSON.parse(JSON.stringify({down:o.down,up:o.up}));e.default.extend(r,n),o.mescroll=new e.default(r,!0),o.$emit("init",o.mescroll);var s=t.getSystemInfoSync();s.windowHeight&&(o.windowHeight=s.windowHeight),s.statusBarHeight&&(o.statusBarHeight=s.statusBarHeight),o.mescroll.setBodyHeight(s.windowHeight),"android"==s.platform&&(o.downTransition="transform 200ms"),o.mescroll.resetScrollTo((function(o,n){t.pageScrollTo({scrollTop:o,duration:n})})),"ios"==s.platform?(o.isSafearea=o.safearea,o.up&&o.up.toTop&&null!=o.up.toTop.safearea||(o.mescroll.optUp.toTop.safearea=o.safearea)):(o.isSafearea=!1,o.mescroll.optUp.toTop.safearea=!1)}};o.default=u}).call(this,n("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/mescroll-uni/mescroll-body-create-component',
    {
        'components/mescroll-uni/mescroll-body-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("0e3b"))
        })
    },
    [['components/mescroll-uni/mescroll-body-create-component']]
]);