(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-classify"],{"0827":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".page-body[data-v-13128337]{display:-webkit-box;display:-webkit-flex;display:flex;background:#fff;overflow:hidden}.nav[data-v-13128337]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%}.nav-left[data-v-13128337]{width:25%;background:#fafafa}.nav-left-item[data-v-13128337]{height:%?100?%;border-right:solid 1px #f1f1f1;border-bottom:solid 1px #f1f1f1;font-size:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.nav-left-item[data-v-13128337]:last-child{border-bottom:none}.nav-right[data-v-13128337]{width:75%}.box[data-v-13128337]{display:block;overflow:hidden;border-bottom:%?20?% solid #f3f3f3\n\t\t/* min-height: 100vh; */ \n\t\t/*若您的子分类过少想使得每个子分类占满屏请放开上边注视 */}.box[data-v-13128337]:last-child{border:none;min-height:100vh}.nav-right-item[data-v-13128337]{width:32%;height:%?220?%;float:left;text-align:center;padding:%?11?%;font-size:%?28?%;background:#fff}.nav-right-item uni-image[data-v-13128337]{width:%?150?%;height:%?150?%}.active[data-v-13128337]{color:#ff80ab;background:#fff;border-right:0}[data-v-13128337]::-webkit-scrollbar{/*取消小程序的默认导航条样式*/width:0;height:0;color:transparent}",""]),t.exports=i},"0d3a":function(t,i,e){"use strict";e.r(i);var a=e("7ac4"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"1cf1":function(t,i,e){"use strict";e.r(i);var a=e("7453"),n=e("0d3a");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("82a4");var c,l=e("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"13128337",null,!1,a["a"],c);i["default"]=r.exports},7453:function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"page-body",style:"height:"+t.height+"px"},[e("v-uni-scroll-view",{staticClass:"nav-left",style:"height:"+t.height+"px",attrs:{"scroll-y":!0,"scroll-top":t.scrollLeftTop,"scroll-with-animation":!0}},t._l(t.classifyData,(function(i,a){return e("v-uni-view",{key:a,staticClass:"nav-left-item",class:a==t.categoryActive?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryClickMain(a)}}},[t._v(t._s(i.name))])})),1),e("v-uni-scroll-view",{staticClass:"nav-right",style:"height:"+t.height+"px",attrs:{"scroll-y":!0,"scroll-top":t.scrollTop,"scroll-with-animation":!0},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},t._l(t.classifyData,(function(i,a){return e("v-uni-view",{key:a,staticClass:"box"},t._l(i.goods,(function(i,a){return e("v-uni-view",{key:a,staticClass:"nav-right-item",attrs:{id:0==a?"first":""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cart(i.id)}}},[e("v-uni-image",{attrs:{src:i.icon}}),e("v-uni-view",[t._v(t._s(i.name))])],1)})),1)})),1)],1)},o=[]},"7ac4":function(t,i,e){"use strict";(function(t){e("4160"),e("ac1f"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{name:"wkiwi",height:0,categoryActive:0,scrollTop:0,scrollLeftTop:0,classifyData:{},arr:[0,584,1168,1752,2336,2805,3274,3858,4442,4911,5380,5734,6203,6672,7017],leftItemHeight:51,navLeftHeight:0,diff:0,tabBarHeight:0}},created:function(){this.loadInfo()},onLoad:function(){this.height=uni.getSystemInfoSync().windowHeight-this.tabBarHeight},onReady:function(){},methods:{loadInfo:function(){var t=this;this.$http.get(this.$httpApi.goods.classify,{}).then((function(i){t.classifyData=i,t.$nextTick((function(){t.getHeightList()}))})).catch((function(t){}))},getHeightList:function(){var i=this,e=uni.createSelectorQuery();e.selectAll(".nav-left-item").boundingClientRect((function(t){i.leftItemHeight=t[0].height,i.navLeftHeight=i.leftItemHeight*i.classifyData.length,i.diff=i.navLeftHeight-i.height})),e.selectAll(".box").boundingClientRect((function(e){var a=[0],n=0;e.forEach((function(t){n+=t.height,a.push(n)})),t("log",a," at pages/category/classify.vue:88"),i.arr=a})).exec()},scroll:function(t){var i=this;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout((function(){i.scrollHeight=t.detail.scrollTop+1+i.height/2;for(var e=0;e<i.arr.length;e++){var a=i.arr[e],n=i.arr[e+1];if(!n||i.scrollHeight>=a&&i.scrollHeight<n)return i.categoryActive=e,i.diff>0&&(i.scrollLeftTop=Math.round(i.categoryActive*i.diff/(classifyData.length-1))),!1}i.categoryActive=0,i.timeoutId=void 0}),10)},categoryClickMain:function(t){this.categoryActive=t,this.scrollTop==this.arr[t]?this.scrollTop=this.scrollTop+1:this.scrollTop=this.arr[t]},cart:function(t){uni.navigateTo({url:"/pages/product/list?classId=".concat(t)})}},components:{}};i.default=a}).call(this,e("0de9")["log"])},"82a4":function(t,i,e){"use strict";var a=e("de74"),n=e.n(a);n.a},de74:function(t,i,e){var a=e("0827");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("9698c8d2",a,!0,{sourceMap:!1,shadowMode:!1})}}]);