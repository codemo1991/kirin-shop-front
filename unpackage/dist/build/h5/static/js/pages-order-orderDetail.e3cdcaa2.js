(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-orderDetail"],{"03ce":function(t,e,i){"use strict";i.r(e);var a=i("60b7"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);e["default"]=o.a},1954:function(t,e,i){"use strict";i.r(e);var a=i("2b16"),o=i("03ce");for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("d91f");var c,l=i("f0c5"),s=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"5b9c0dab",null,!1,a["a"],c);e["default"]=s.exports},"2b16":function(t,e,i){"use strict";var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-text",{staticClass:"yticon icon-comment"}),i("v-uni-text",{staticClass:"name"},[t._v("商品清单")])],1),t._l(t.goodData,(function(e,a){return i("v-uni-view",{key:e.goodDetailId,staticClass:"g-item"},[i("v-uni-image",{attrs:{src:e.imageUrl}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.goodName))]),i("v-uni-text",{staticClass:"spec"},[t._v(t._s(e.goodNorm))]),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(e.price))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(e.num))])],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥"+t._s(t.totalPrice))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("免运费")])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("收货地址")]),i("v-uni-text",{staticClass:"cell-tip",staticStyle:{width:"270px","line-height":"normal"}},[t._v(t._s(t.receiver)+" "+t._s(t.phone)+" \\n "+t._s(t.province)+" "+t._s(t.city)+"  "+t._s(t.zone)+" "+t._s(t.address))])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-text",{staticClass:"cell-tip"})],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("快递单号")]),i("v-uni-text",{staticClass:"cell-tip",staticStyle:{width:"270px","line-height":"normal"}},t._l(t.goodData,(function(e,a){return i("v-uni-text",{key:e.goodDetailId},[t._v(t._s(e.deliveryNo)+" \\n")])})),1)],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v(t._s(t.totalPrice))])],1),0==t.orderStatus?i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("撤单")]):t._e(),1==t.orderStatus?i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("申请撤单")]):t._e(),1==t.orderStatus?i("v-uni-text",{staticClass:"submit-quick",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("催单")]):t._e()],1)],1)},n=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return a}))},"60b7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{goodData:[],totalPrice:0,orderId:0,province:"",city:"",zone:"",address:"",receiver:"",phone:"",orderStatus:""}},onLoad:function(t){this.orderId=t.orderId,this.loadOrder()},methods:{submit:function(){},stopPrevent:function(){},loadOrder:function(){var t=this;this.$http.get(this.$httpApi.order.showOrderDetail,{orderId:this.orderId}).then((function(e){t.goodData=e.orderGoodInfos,t.totalPrice=e.amount,t.province=e.province,t.city=e.city,t.zone=e.area,t.address=e.detailarea,t.receiver=e.receiver,t.phone=e.phone,t.orderStatus=e.orderStatus})).catch((function(e){t.mescroll.endErr()}))}}};e.default=a},ada2:function(t,e,i){var a=i("dae8");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("7e2e48cf",a,!0,{sourceMap:!1,shadowMode:!1})},d91f:function(t,e,i){"use strict";var a=i("ada2"),o=i.n(a);o.a},dae8:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-5b9c0dab]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-5b9c0dab]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-5b9c0dab]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-5b9c0dab]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-5b9c0dab]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-5b9c0dab]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-5b9c0dab]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-5b9c0dab]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-5b9c0dab]{display:block;width:%?50?%;height:%?50?%;-webkit-border-radius:100px;border-radius:100px}.goods-section .name[data-v-5b9c0dab]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-5b9c0dab]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;-webkit-border-radius:%?4?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-5b9c0dab]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-5b9c0dab]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-5b9c0dab]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-5b9c0dab]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-5b9c0dab]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-5b9c0dab]{position:relative}.yt-list[data-v-5b9c0dab]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-5b9c0dab]{background:#fafafa}.yt-list-cell.b-b[data-v-5b9c0dab]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-5b9c0dab]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;-webkit-border-radius:%?4?%;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-5b9c0dab]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-5b9c0dab]{background:#3ab54a}.yt-list-cell .cell-more[data-v-5b9c0dab]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-5b9c0dab]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-5b9c0dab]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-5b9c0dab]{color:#909399}.yt-list-cell .cell-tip.active[data-v-5b9c0dab]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-5b9c0dab]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-5b9c0dab]{max-width:%?90?%}.yt-list-cell .desc[data-v-5b9c0dab]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-5b9c0dab]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-5b9c0dab]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-5b9c0dab]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-5b9c0dab]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-5b9c0dab]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;-webkit-box-shadow:0 -1px 5px rgba(0,0,0,.1);box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-5b9c0dab]{padding-left:%?30?%}.footer .price-tip[data-v-5b9c0dab]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-5b9c0dab]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}.footer .submit-quick[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#4cd964}\n/* 优惠券面板 */.mask[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-5b9c0dab]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-5b9c0dab]{display:none}.mask.show[data-v-5b9c0dab]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-5b9c0dab]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-5b9c0dab]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-5b9c0dab]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-5b9c0dab]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-5b9c0dab]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-5b9c0dab]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-5b9c0dab]:before{content:"￥";font-size:%?34?%}.coupon-item .tips[data-v-5b9c0dab]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-5b9c0dab]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;-webkit-border-radius:100px;border-radius:100px}.coupon-item .circle.r[data-v-5b9c0dab]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-5b9c0dab]{background:#f8f8f8}',""]),t.exports=e}}]);