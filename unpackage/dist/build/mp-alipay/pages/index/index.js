(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/index/index"],{"30d6":function(n,t,e){"use strict";e.r(t);var r=e("9536"),o=e("6fbf");for(var u in o)"default"!==u&&function(n){e.d(t,n,(function(){return o[n]}))}(u);e("7307");var a,i=e("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=c.exports},"38a3":function(n,t,e){"use strict";(function(n){e("105b"),e("921b");r(e("66fd"));var t=r(e("30d6"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("c11b")["createPage"])},"6fbf":function(n,t,e){"use strict";e.r(t);var r=e("f527"),o=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=o.a},7307:function(n,t,e){"use strict";var r=e("b929"),o=e.n(r);o.a},9536:function(n,t,e){"use strict";var r,o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}))},b929:function(n,t,e){},f527:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(e("4795"));function o(n){return n&&n.__esModule?n:{default:n}}function u(n,t,e,r,o,u,a){try{var i=n[u](a),c=i.value}catch(s){return void e(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function i(n){u(a,r,o,i,c,"next",n)}function c(n){u(a,r,o,i,c,"throw",n)}i(void 0)}))}}var i={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[],menuList:[]}},onShow:function(){this.loadHomeBaseInfo()},onLoad:function(){},methods:{loadHomeBaseInfo:function(){var n=this;return a(r.default.mark((function t(){var e;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=n,n.$http.get(n.$httpApi.home.banner,{}).then((function(n){var t=n.gallerys;e.carouselList=t,e.swiperLength=t.length;var r=n.recGoods;e.goodsList=r||[];var o=n.goodMenus;e.menuList=o||[]})).catch((function(n){}));case 2:case"end":return t.stop()}}),t)})))()},swiperChange:function(n){var t=n.detail.current;this.swiperCurrent=t,this.titleNViewBackground=this.carouselList[t].background},navToDetailPage:function(t){var e=t.goodId;n.navigateTo({url:"/pages/product/product?id=".concat(e)})},navToListPage:function(t){n.navigateTo({url:"/pages/product/list?classId=".concat(t)})},navTo:function(t){n.navigateTo({url:t})}}};t.default=i}).call(this,e("c11b")["default"])}},[["38a3","common/runtime","common/vendor"]]]);