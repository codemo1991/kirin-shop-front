(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"0607":function(t,e,n){"use strict";n.r(e);var a=n("21e4"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},"06bc":function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}))},"21e4":function(t,e,n){"use strict";(function(t){function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{source:0,addressList:[]}},onLoad:function(t){this.source=t.source,this.loadDefaultData()},methods:{checkAddress:function(e){1==this.source&&(this.$api.prePage().addressData=e,t.navigateBack())},addAddress:function(e,n){t.navigateTo({url:"/pages/address/addressManage?type=".concat(e,"&data=").concat(JSON.stringify(n))})},delAddr:function(e,n){var a=this;t.showModal({title:"提示",content:"确认删除该地址？",success:function(t){a.$http.post(a.$httpApi.address.delAddr,{id:e.id},{header:{"content-type":"application/x-www-form-urlencoded"}}).then((function(t){a.$api.msg("删除地址成功"),a.addressList.splice(n,1)})).catch((function(t){}))}})},refreshList:function(t,e){this.addressList.unshift(t),console.log(t,e)},loadDefaultData:function(){var t=this;this.addressList=[],this.$http.get(this.$httpApi.address.showAddr,{}).then((function(e){for(var a=0;a<e.length;a++){var s,i=e[a];t.addressList.push((s={address:i.address,city:i.city,id:i.id,name:i.name,phone:i.phone,province:i.province,zone:i.zone},n(s,"id",i.id),n(s,"defaultFlag",i.defaultFlag),s))}})).catch((function(t){}))}}};e.default=a}).call(this,n("f266")["default"])},5953:function(t,e,n){},9146:function(t,e,n){"use strict";n.r(e);var a=n("06bc"),s=n("0607");for(var i in s)"default"!==i&&function(t){n.d(e,t,(function(){return s[t]}))}(i);n("e428");var r,c=n("f0c5"),d=Object(c["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=d.exports},e428:function(t,e,n){"use strict";var a=n("5953"),s=n.n(a);s.a},e4c0:function(t,e,n){"use strict";(function(t){n("105b"),n("921b");a(n("66fd"));var e=a(n("9146"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("f266")["createPage"])}},[["e4c0","common/runtime","common/vendor"]]]);