(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/set/set"],{"44c3":function(t,e,n){"use strict";var o,r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}))},"5dbd":function(t,e,n){"use strict";n.r(e);var o=n("44c3"),r=n("b8b9");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("aa94");var c,a=n("f0c5"),i=Object(a["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=i.exports},8312:function(t,e,n){"use strict";(function(t){n("105b"),n("921b");o(n("66fd"));var e=o(n("5dbd"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("c11b")["createPage"])},a0ec:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(n("e503")),r=c(n("c2ba")),u=n("2f62");function c(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{}},computed:i({},(0,u.mapState)(["hasLogin"])),methods:i({},(0,u.mapMutations)(["logout"]),{toLogout:function(){var e=this;t.showModal({content:"确定要退出登录么",success:function(t){t.confirm&&e.toLogOut()}})},toLogOut:function(){var e=this;this.$http.post(this.$httpApi.user.logout,{}).then((function(n){e.logout(),t.switchTab({url:"/pages/index/index"})})).catch((function(t){console.log(t),e.$api.msg("退出失败")}))},navTo:function(e){t.navigateTo({url:e})},resetPwd:function(){this.hasLogin||r.default.showUnloginModal(),t.navigateTo({url:"/pages/set/resetPwd"})},clear:function(){o.default.remove("user_account"),this.$api.msg("清除成功"),this.hasLogin&&this.toLogOut()}})};e.default=f}).call(this,n("c11b")["default"])},aa94:function(t,e,n){"use strict";var o=n("dcfe"),r=n.n(o);r.a},b8b9:function(t,e,n){"use strict";n.r(e);var o=n("a0ec"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=r.a},dcfe:function(t,e,n){}},[["8312","common/runtime","common/vendor"]]]);