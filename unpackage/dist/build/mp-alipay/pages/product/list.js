(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/product/list"],{2907:function(t,n,e){"use strict";e.r(n);var c=e("9f7b"),o=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,(function(){return c[t]}))}(u);n["default"]=o.a},"34c8":function(t,n,e){},"34f4":function(t,n,e){"use strict";var c,o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return c}))},"9f7b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{cateId:void 0,goodsList:[]}},onLoad:function(t){this.cateId=t.classId,this.loadData()},methods:{loadData:function(){var t=this;this.$http.get(this.$httpApi.goods.goodList,{cateId:this.cateId}).then((function(n){t.goodsList=n})).catch((function(t){}))},navToDetailPage:function(n){t.navigateTo({url:"/pages/product/product?id=".concat(n)})},stopPrevent:function(){}}};n.default=e}).call(this,e("c11b")["default"])},b018:function(t,n,e){"use strict";(function(t){e("105b"),e("921b");c(e("66fd"));var n=c(e("fe72"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("c11b")["createPage"])},ed73:function(t,n,e){"use strict";var c=e("34c8"),o=e.n(c);o.a},fe72:function(t,n,e){"use strict";e.r(n);var c=e("34f4"),o=e("2907");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("ed73");var a,i=e("f0c5"),f=Object(i["a"])(o["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],a);n["default"]=f.exports}},[["b018","common/runtime","common/vendor"]]]);