(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"0b4e":function(e,t,n){"use strict";var i=n("8bf0"),r=n.n(i);r.a},"731e":function(e,t,n){"use strict";var i={uniBadge:function(){return n.e("components/uni-badge/uni-badge").then(n.bind(null,"8ad8"))},uniNumberBox:function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"83e1"))},uniPopup:function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"3658"))},shareBtn:function(){return n.e("components/share-btn/share-btn").then(n.bind(null,"9904"))}},r=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){"buy"==e.dialogType?e.buy():e.add2ShopCar()})},o=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},"8bf0":function(e,t,n){},a406:function(e,t,n){"use strict";n.r(t);var i=n("731e"),r=n("af43");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("0b4e");var s,a=n("f0c5"),c=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);t["default"]=c.exports},af43:function(e,t,n){"use strict";n.r(t);var i=n("e122"),r=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=r.a},c274:function(e,t,n){"use strict";(function(e){n("105b"),n("921b");i(n("66fd"));var t=i(n("a406"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("f266")["createPage"])},e122:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("4795")),r=a(n("8702")),o=n("2f62"),s=a(n("c2ba"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=u(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,o=!0,s=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return o=e.done,e},e:function(e){s=!0,r=e},f:function(){try{o||null==i.return||i.return()}finally{if(s)throw r}}}}function u(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function h(e,t,n,i,r,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(i,r)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function s(e){h(o,i,r,s,a,"next",e)}function a(e){h(o,i,r,s,a,"throw",e)}s(void 0)}))}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(){n.e("components/modal/share-guide").then(function(){return resolve(n("0d31"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/uni-number-box/uni-number-box").then(function(){return resolve(n("83e1"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("components/uni-badge/uni-badge").then(function(){return resolve(n("8ad8"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/uni-popup/uni-popup").then(function(){return resolve(n("3658"))}.bind(null,n)).catch(n.oe)},S=function(){n.e("components/share-btn/share-btn").then(function(){return resolve(n("9904"))}.bind(null,n)).catch(n.oe)},C={components:{uniNumberBox:v,uniBadge:b,uniPopup:y,shareBtn:S,shareGuide:g},computed:f({},(0,o.mapState)(["hasLogin","userInfo"])),data:function(){return{showShare:!1,maxGoodNum:1,dialogType:null,shopcarNum:0,goodDetailId:"",goodDetailPrice:"",goodDetailStore:"",num:1,price:"",recPrice:"",sold:"",store:"",specClass:"none",specSelected:[],goodName:"",favorite:!0,imgList:[],desc:"",specList:[{id:1,name:"商品品类"}],specChildList:[],deliveryFrom:"",deliveryTime:"",deliveryFee:0,pinkAge:1,goodDetailImg:"",sharedata:{type:1,strShareUrl:"",strShareTitle:"",strShareSummary:"",strShareImageUrl:""}}},onLoad:function(e){var t=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=e.id,t.loadGoodBaseInfo(r),t.hasLogin&&t.getShopCarNum(),t.specList.forEach((function(e){var n,i=c(t.specChildList);try{for(i.s();!(n=i.n()).done;){var r=n.value;if(r.pid===e.id){t.$set(r,"selected",!0),t.specSelected.push(r);break}}}catch(o){i.e(o)}finally{i.f()}}));case 4:case"end":return n.stop()}}),n)})))()},methods:{add2CarToggleSpec:function(){var e=this;null!=this.specChildList&&this.specChildList.length>0&&this.selectSpec(0,this.specChildList[0].pid),this.dialogType="add2Car","show"===this.specClass?(this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show")},buyToggleSpec:function(){var e=this;null!=this.specChildList&&this.specChildList.length>0&&this.selectSpec(0,this.specChildList[0].pid),this.dialogType="buy","show"===this.specClass?(this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show")},numberChange:function(e){e<=this.goodDetailStore&&(this.num=e)},getShopCarNum:function(){var e=this;return d(i.default.mark((function t(){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,e.$http.get(e.$httpApi.shopcar.getShopCarNum,{}).then((function(e){n.shopcarNum=e})).catch((function(e){}));case 2:case"end":return t.stop()}}),t)})))()},loadGoodBaseInfo:function(e){var t=this;return d(i.default.mark((function n(){var r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t,t.$http.get(t.$httpApi.goods.iteminfo,{goodId:e}).then((function(t){var n=t.imgs;r.imgList=n||[];var i=t.name;r.goodName=i;var o=t.price;r.price=o;var s=t.recPrice;r.recPrice=s;var a=t.soldNum;r.sold=a;var c=t.store;r.store=c;var u=t.desc;r.desc=u;var l=t.goodDetails;r.specChildList=l;var h=t.deliveryFrom;r.deliveryFrom=h;var d=t.deliveryTime;r.deliveryTime=d;var p=t.img;r.deliveryFee=t.deliveryFee,r.pinkAge=t.pinkAge,r.sharedata={type:1,strShareUrl:"https://www.ricebuy.cn/v1/pages/product/product?id="+e,strShareTitle:i,strShareSummary:"我在【灵犀】发现了超值的【"+i+"】,推荐给你，一起省钱吧~",strShareImageUrl:"http://yuns.ricebuy.cn/"+p}})).catch((function(e){}));case 2:case"end":return n.stop()}}),n)})))()},toggleSpec:function(){var e=this;null!=this.specChildList&&this.specChildList.length>0&&this.selectSpec(0,this.specChildList[0].pid),"show"===this.specClass?(this.specClass="hide",setTimeout((function(){e.specClass="none"}),250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(e,t){var n=this,i=this.specChildList;i.forEach((function(e){e.pid===t&&(n.$set(e,"selected",!1),n.maxGoodNum=e.store)})),this.$set(i[e],"selected",!0),this.specSelected=[],i.forEach((function(e){!0===e.selected&&(n.specSelected.push(e),n.goodDetailPrice=e.price,n.goodDetailStore=parseInt(e.store),n.goodDetailId=e.goodDetailId,n.goodDetailImg=e.imageUrl)}))},share:function(){var e=this;r.default.share(this.sharedata,(function(t){e.showShare=!0}))},toFavorite:function(){this.favorite=!this.favorite},buy:function(){var t=this;if(this.hasLogin){var n=this,i=this.goodDetailId;if(!i||!this.num||0==this.num)return this.$api.msg("请选择购买类型"),void this.toggleSpec();if(this.num>this.goodDetailStore)this.$api.msg("抱歉！商品数量不足!");else{var r=this.specChildList,o=[],a={};r.forEach((function(e){e.goodDetailId==i&&o.push({goodDetailId:e.goodDetailId,num:n.num,price:e.price,name:t.goodName,imgUrl:e.imageUrl,property:e.name})})),a["goodsData"]=o,a["orderType"]=1,a["totalPrice"]=parseInt(this.num)*parseFloat(o[0].price),e.navigateTo({url:"/pages/order/createOrder?data=".concat(JSON.stringify({orderTemp:a}))}),this.toggleSpec()}}else s.default.showUnloginModal()},add2ShopCar:function(){if(this.hasLogin){var e=this.goodDetailId;if(e&&this.num&&0!=this.num)if(this.num>this.goodDetailStore)this.$api.msg("抱歉！商品数量不足!");else{var t=this;this.$http.post(this.$httpApi.shopcar.add2shopCar,{goodDetailId:e,num:t.num}).then((function(e){t.$api.msg("加入购物车成功"),t.shopcarNum=parseInt(t.shopcarNum)+1,t.toggleSpec()})).catch((function(e){}))}else this.$api.msg("请选择购买类型")}else s.default.showUnloginModal()},stopPrevent:function(){},shareOn:function(){this.$refs.sharepopup.open()}}};t.default=C}).call(this,n("f266")["default"])}},[["c274","common/runtime","common/vendor"]]]);