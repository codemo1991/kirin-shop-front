(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/order/createOrder"],{"55bf":function(t,a,e){"use strict";var r,n=function(){var t=this,a=t.$createElement;t._self._c},d=[];e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return d})),e.d(a,"a",(function(){return r}))},"5df9":function(t,a,e){"use strict";(function(t){e("105b"),e("921b");r(e("66fd"));var a=r(e("755a"));function r(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("c11b")["createPage"])},"755a":function(t,a,e){"use strict";e.r(a);var r=e("55bf"),n=e("9978");for(var d in n)"default"!==d&&function(t){e.d(a,t,(function(){return n[t]}))}(d);e("b17f");var i,s=e("f0c5"),o=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);a["default"]=o.exports},8341:function(t,a,e){},9978:function(t,a,e){"use strict";e.r(a);var r=e("cb8a"),n=e.n(r);for(var d in r)"default"!==d&&function(t){e.d(a,t,(function(){return r[t]}))}(d);a["default"]=n.a},b17f:function(t,a,e){"use strict";var r=e("8341"),n=e.n(r);n.a},cb8a:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{maskState:0,desc:"",payType:1,addressData:{address:"",city:"",id:"",name:"",phone:"",province:"",zone:""},goodData:[],totalPrice:0,orderData:{},allDeliveryFee:0}},onLoad:function(t){var a=JSON.parse(t.data).orderTemp;this.goodData=a.goodsData,this.totalPrice=a.totalPrice,this.allDeliveryFee=a.allDeliveryFee,this.orderData=a,this.loadDefaultAddr(),this.calPrice(a)},methods:{calPrice:function(t){console.log(t)},submit:function(){this.addressData.id?(this.orderData["addressData"]=this.addressData,t.redirectTo({url:"/pages/money/pay?data=".concat(JSON.stringify({orderTemp:this.orderData}))})):this.$api.msg("请选择收货地址")},loadDefaultAddr:function(){var t=this;this.$http.get(this.$httpApi.address.defaultAddr,{}).then((function(a){t.addressData.address=a.address,t.addressData.city=a.city,t.addressData.id=a.id,t.addressData.name=a.name,t.addressData.phone=a.phone,t.addressData.province=a.province,t.addressData.zone=a.zone})).catch((function(t){}))}}};a.default=e}).call(this,e("c11b")["default"])}},[["5df9","common/runtime","common/vendor"]]]);