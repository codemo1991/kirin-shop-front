(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-addressManage"],{"2f83":function(a,t,e){"use strict";var i=e("cd93"),s=e.n(i);s.a},"58f8":function(a,t,e){var i=e("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-370991ea]{background:#f8f8f8;padding-top:%?16?%}.row[data-v-370991ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;padding:0 %?30?%;height:%?110?%;background:#fff}.row .tit[data-v-370991ea]{-webkit-flex-shrink:0;flex-shrink:0;width:%?120?%;font-size:%?30?%;color:#303133}.row .input[data-v-370991ea]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;color:#303133}.row .icon-shouhuodizhi[data-v-370991ea]{font-size:%?36?%;color:#909399}.default-row[data-v-370991ea]{margin-top:%?16?%}.default-row .tit[data-v-370991ea]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.default-row uni-switch[data-v-370991ea]{-webkit-transform:translateX(%?16?%) scale(.9);transform:translateX(%?16?%) scale(.9)}.add-btn[data-v-370991ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?690?%;height:%?80?%;margin:%?60?% auto;font-size:%?32?%;color:#fff;background-color:#fa436a;border-radius:%?10?%;box-shadow:1px 2px 5px rgba(219,63,96,.4)}body.?%PAGE?%[data-v-370991ea]{background:#f8f8f8}',""]),a.exports=t},9955:function(a,t,e){"use strict";var i,s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[a._v("联系人")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"收货人姓名","placeholder-class":"placeholder"},model:{value:a.addressData.name,callback:function(t){a.$set(a.addressData,"name",t)},expression:"addressData.name"}})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[a._v("手机号")]),e("v-uni-input",{staticClass:"input",attrs:{type:"number",placeholder:"收货人手机号码","placeholder-class":"placeholder"},model:{value:a.addressData.mobile,callback:function(t){a.$set(a.addressData,"mobile",t)},expression:"addressData.mobile"}})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[a._v("地址")]),e("v-uni-text",{staticClass:"input",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.chooseLocation.apply(void 0,arguments)}}},[a._v(a._s(a.addressData.addressName))]),e("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"})],1),e("v-uni-view",{staticClass:"row b-b"},[e("v-uni-text",{staticClass:"tit"},[a._v("门牌号")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",placeholder:"楼号、门牌","placeholder-class":"placeholder"},model:{value:a.addressData.area,callback:function(t){a.$set(a.addressData,"area",t)},expression:"addressData.area"}})],1),e("v-uni-view",{staticClass:"row default-row"},[e("v-uni-text",{staticClass:"tit"},[a._v("设为默认")]),e("v-uni-switch",{attrs:{checked:a.addressData.defaule,color:"#fa436a"},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.switchChange.apply(void 0,arguments)}}})],1),e("v-uni-button",{staticClass:"add-btn",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.confirm.apply(void 0,arguments)}}},[a._v("提交")])],1)},n=[];e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return n})),e.d(t,"a",(function(){return i}))},c4d0:function(a,t,e){"use strict";e.r(t);var i=e("9955"),s=e("e7e9");for(var n in s)"default"!==n&&function(a){e.d(t,a,(function(){return s[a]}))}(n);e("2f83");var o,r=e("f0c5"),d=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"370991ea",null,!1,i["a"],o);t["default"]=d.exports},cd93:function(a,t,e){var i=e("58f8");"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var s=e("4f06").default;s("dfd99386",i,!0,{sourceMap:!1,shadowMode:!1})},d52b:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{addressData:{name:"",mobile:"",addressName:"在地图选择",address:"",area:"",default:!1}}},onLoad:function(a){var t="新增收货地址";"edit"===a.type&&(t="编辑收货地址",this.addressData=JSON.parse(a.data)),this.manageType=a.type,uni.setNavigationBarTitle({title:t})},methods:{switchChange:function(a){this.addressData.default=a.detail},chooseLocation:function(){var a=this;uni.chooseLocation({success:function(t){a.addressData.addressName=t.name,a.addressData.address=t.name}})},confirm:function(){var a=this.addressData;a.name?/(^1[3|4|5|7|8][0-9]{9}$)/.test(a.mobile)?a.address?a.area?(this.$api.prePage().refreshList(a,this.manageType),this.$api.msg("地址".concat("edit"==this.manageType?"修改":"添加","成功")),setTimeout((function(){uni.navigateBack()}),800)):this.$api.msg("请填写门牌号信息"):this.$api.msg("请在地图选择所在位置"):this.$api.msg("请输入正确的手机号码"):this.$api.msg("请填写收货人姓名")}}};t.default=i},e7e9:function(a,t,e){"use strict";e.r(t);var i=e("d52b"),s=e.n(i);for(var n in i)"default"!==n&&function(a){e.d(t,a,(function(){return i[a]}))}(n);t["default"]=s.a}}]);