(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-order"],{"0969":function(t,e,i){"use strict";var a=i("1e43"),n=i.n(a);n.a},"1e43":function(t,e,i){var a=i("d1eb");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("65d348fa",a,!0,{sourceMap:!1,shadowMode:!1})},"33fe":function(t,e,i){var a=i("c1ab");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6a287b3f",a,!0,{sourceMap:!1,shadowMode:!1})},"4b29":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){this.mescroll.resetUpScroll()},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},n=a;e.default=n},6163:function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("a434"),i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("4b29")),o=a(i("feb0")),d={mixins:[n.default],components:{AppTabs:o.default},data:function(){return{downOption:{native:!0},upOption:{noMoreSize:4,empty:{tip:"~ 暂时没有订单 ~",btnText:"去购物"},page:{num:0,size:20,time:null},textNoMore:"~别再拉了，我是有底线的~"},goods:[],tabs:["全部","待发货","配货中","撤单中","已发货","已关闭"],status:{0:"待发货",1:"配货中",2:"申请退款",3:"已关闭",4:"已完成"},tabCodes:["11","0","1","2","4","3"],tabIndex:0,tabItem:[],tabIndexSel:0}},mounted:function(){var t=parseInt(this.tabIndexSel);this.$refs.appTab.tabClick(t)},onLoad:function(t){var e=t.state;e&&(this.tabIndexSel=e)},methods:{navTo:function(t){uni.navigateTo({url:t})},deleteOrder:function(t){var e=this;uni.showLoading({title:"请稍后"}),setTimeout((function(){e.navList[e.tabCurrentIndex].orderList.splice(t,1),uni.hideLoading()}),600)},cancelOrder:function(t,e){var i=this,a=this;uni.showModal({title:"温馨提示",content:"确定需要申请撤单么？",confirmText:"确定",cancelText:"取消",success:function(n){if(n.confirm){var o={orderId:t.oid};i.$http.post(i.$httpApi.order.cancelOrder,o).then((function(t){a.$api.msg("取消订单成功"),a.tabItem[e].orderStatus=3}))}}})},upCallback:function(t){var e=this.tabCodes[this.tabIndex],i=this,a={type:e,pageNum:t.num,pageSize:t.size};this.$http.get(this.$httpApi.order.showOrder,a).then((function(e){i.mescroll.endByPage(e.pageSize,e.totalPage),1==t.num&&(i.tabItem=[]),i.tabItem=i.tabItem.concat(e.list)})).catch((function(t){this.mescroll.endErr()}))},emptyClick:function(){uni.showToast({title:"点击了按钮,具体逻辑自行实现"})},tabChange:function(){this.goods=[],this.mescroll.resetUpScroll()}}};e.default=d},7128:function(t,e,i){"use strict";i.r(e);var a=i("d347"),n=i("e0d6");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("b12e");var d,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"6d83ac7f",null,!1,a["a"],d);e["default"]=l.exports},a7fd:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.tabs&&t.tabs.length?i("v-uni-view",{staticClass:"app-tabs",class:{"tabs-fixed":t.fixed}},[i("v-uni-view",{staticClass:"tabs-item"},t._l(t.tabs,(function(e,a){return i("v-uni-view",{key:a,staticClass:"tab-item",class:{active:t.value===a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(a)}}},[t._v(t._s(t.getTabName(e)))])})),1),i("v-uni-view",{staticClass:"tabs-line",style:{left:t.lineLift}})],1):t._e()},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},b12e:function(t,e,i){"use strict";var a=i("33fe"),n=i.n(a);n.a},c1ab:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-6d83ac7f],\n.content[data-v-6d83ac7f]{background:#f8f8f8;height:100%}.swiper-box[data-v-6d83ac7f]{height:calc(100% - 40px)}.list-scroll-content[data-v-6d83ac7f]{height:100%}.navbar[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;-webkit-box-shadow:0 1px 5px rgba(0,0,0,.06);box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-6d83ac7f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-6d83ac7f]{color:#fa436a}.navbar .nav-item.current[data-v-6d83ac7f]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-6d83ac7f]{height:auto}.order-item[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-left:%?30?%;background:#fff;margin-top:%?16?%\n  /* 多条商品 */\n  /* 单条商品 */}.order-item .i-top[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;padding-right:%?30?%;font-size:%?28?%;color:#303133;position:relative}.order-item .i-top .time[data-v-6d83ac7f]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.order-item .i-top .state[data-v-6d83ac7f]{color:#fa436a}.order-item .i-top .del-btn[data-v-6d83ac7f]{padding:%?10?% 0 %?10?% %?36?%;font-size:%?32?%;color:#909399;position:relative}.order-item .i-top .del-btn[data-v-6d83ac7f]:after{content:"";width:0;height:%?30?%;border-left:1px solid #dcdfe6;position:absolute;left:%?20?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.order-item .goods-box[data-v-6d83ac7f]{height:%?160?%;padding:%?20?% 0;white-space:nowrap}.order-item .goods-box .goods-item[data-v-6d83ac7f]{width:%?120?%;height:%?120?%;display:inline-block;margin-right:%?24?%}.order-item .goods-box .goods-img[data-v-6d83ac7f]{display:block;width:100%;height:100%}.order-item .goods-box-single[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;padding:%?20?% 0}.order-item .goods-box-single .goods-img[data-v-6d83ac7f]{display:block;width:%?120?%;height:%?120?%}.order-item .goods-box-single .right[data-v-6d83ac7f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?30?% 0 %?24?%;overflow:hidden}.order-item .goods-box-single .right .title[data-v-6d83ac7f]{font-size:%?30?%;color:#303133;line-height:1}.order-item .goods-box-single .right .attr-box[data-v-6d83ac7f]{font-size:%?26?%;color:#909399;padding:%?10?% %?12?%}.order-item .goods-box-single .right .price[data-v-6d83ac7f]{font-size:%?30?%;color:0}.order-item .goods-box-single .right .price[data-v-6d83ac7f]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .price-box[data-v-6d83ac7f]{-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?0?%;font-size:%?26?%;color:#909399}.order-item .price-box .order-time[data-v-6d83ac7f]{padding-right:%?100?%}.order-item .price-box .num[data-v-6d83ac7f]{margin:0 %?8?%;color:#303133}.order-item .price-box .price[data-v-6d83ac7f]{font-size:%?32?%;color:#e04b28}.order-item .price-box .price[data-v-6d83ac7f]:before{content:"￥";font-size:%?24?%;margin:0 %?2?% 0 %?8?%}.order-item .action-box[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?100?%;position:relative;padding-right:%?30?%}.order-item .action-btn[data-v-6d83ac7f]{width:%?160?%;height:%?60?%;margin:0;margin-left:%?24?%;padding:0;text-align:center;line-height:%?60?%;font-size:%?26?%;color:#303133;background:#fff;-webkit-border-radius:100px;border-radius:100px}.order-item .action-btn[data-v-6d83ac7f]:after{-webkit-border-radius:100px;border-radius:100px}.order-item .action-btn.recom[data-v-6d83ac7f]{background:#fff9f9;color:#fa436a}.order-item .action-btn.recom[data-v-6d83ac7f]:after{border-color:#f7bcc8}\n/* load-more */.uni-load-more[data-v-6d83ac7f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-6d83ac7f]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-6d83ac7f]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-6d83ac7f]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-6d83ac7f]{width:6px;height:2px;-webkit-border-top-left-radius:1px;border-top-left-radius:1px;-webkit-border-bottom-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-6d83ac7f 1.56s ease infinite;animation:load-data-v-6d83ac7f 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-6d83ac7f]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-6d83ac7f]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-6d83ac7f]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-6d83ac7f]:nth-child(4){top:11px;left:0}.load1[data-v-6d83ac7f],\n.load2[data-v-6d83ac7f],\n.load3[data-v-6d83ac7f]{height:24px;width:24px}.load2[data-v-6d83ac7f]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-6d83ac7f]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-6d83ac7f]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-6d83ac7f]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-6d83ac7f]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-6d83ac7f]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-6d83ac7f]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-6d83ac7f]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-6d83ac7f]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-6d83ac7f]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-6d83ac7f]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-6d83ac7f]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-6d83ac7f]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-6d83ac7f]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-6d83ac7f{0%{opacity:1}100%{opacity:.2}}body.?%PAGE?%[data-v-6d83ac7f]{background:#f8f8f8}',""]),t.exports=e},c2e3:function(t,e,i){"use strict";(function(t){i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{tabs:Array,value:{type:[String,Number],default:function(){return 0}},fixed:Boolean},computed:{lineLift:function(){return 100/this.tabs.length*(this.value+1)-100/(2*this.tabs.length)+"%"}},methods:{getTabName:function(t){return"object"===typeof t?t.name:t},tabClick:function(e){t("log",this.value," at components/app-tabs.vue:39"),t("log","tb"+e," at components/app-tabs.vue:40"),this.value!=e&&(this.$emit("input",e),this.$emit("change",e))}}};e.default=a}).call(this,i("0de9")["log"])},c4db:function(t,e,i){"use strict";i.r(e);var a=i("c2e3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},d1eb:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".app-tabs[data-v-07b57003]{position:relative;height:%?60?%;line-height:%?60?%;font-size:%?24?%;background-color:#fff;border-bottom:%?1?% solid #eee}.app-tabs .tabs-item[data-v-07b57003]{display:-webkit-box;display:-webkit-flex;display:flex;text-align:center}.app-tabs .tabs-item .tab-item[data-v-07b57003]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.app-tabs .tabs-item .active[data-v-07b57003]{color:red}.app-tabs .tabs-line[data-v-07b57003]{position:absolute;bottom:0;width:%?40?%;height:%?4?%;-webkit-transform:translateX(-50%);transform:translateX(-50%);-webkit-border-radius:%?4?%;border-radius:%?4?%;-webkit-transition:left .3s;transition:left .3s;background:red}\n/*悬浮*/.app-tabs.tabs-fixed[data-v-07b57003]{z-index:9999;position:fixed;top:var(--window-top);left:0;width:100%}",""]),t.exports=e},d347:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("mescroll-body",{ref:"mescrollRef",attrs:{down:t.downOption,up:t.upOption},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)},emptyclick:function(e){arguments[0]=e=t.$handleEvent(e),t.emptyClick.apply(void 0,arguments)}}},[i("app-tabs",{ref:"appTab",attrs:{tabs:t.tabs},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}}),t._l(t.tabItem,(function(e,a){return i("v-uni-view",{key:a,staticClass:"order-item"},[i("v-uni-view",{staticClass:"i-top b-b"},[i("v-uni-text",{staticClass:"time"},[t._v("订单号："+t._s(e.orderNo))]),i("v-uni-text",{staticClass:"state",staticStyle:{color:"red"}},[t._v(t._s(t.status[e.orderStatus]))]),9===e.state?i("v-uni-text",{staticClass:"del-btn yticon icon-iconfontshanchu1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteOrder(a)}}}):t._e()],1),i("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/order/orderDetail?orderId="+e.oid)}}},t._l(e.orderGoodInfos,(function(t,e){return i("v-uni-view",{key:e,staticClass:"goods-item"},[i("v-uni-image",{staticClass:"goods-img",attrs:{src:"http://yuns.ricebuy.cn/"+t.imageUrl,mode:"aspectFill"}})],1)})),1),i("v-uni-view",{staticClass:"b-b price-box"},[i("v-uni-text",{staticClass:"order-time"},[t._v(t._s(e.orderTime))]),t._v("共"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.totalNum))]),t._v("件商品 实付款"),i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.amount))])],1),0==e.orderStatus?i("v-uni-view",{staticClass:"action-box b-t"},[i("v-uni-button",{staticClass:"action-btn",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.cancelOrder(e,a)}}},[t._v("申请撤单")])],1):t._e()],1)}))],2)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},e0d6:function(t,e,i){"use strict";i.r(e);var a=i("6163"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},feb0:function(t,e,i){"use strict";i.r(e);var a=i("a7fd"),n=i("c4db");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("0969");var d,r=i("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"07b57003",null,!1,a["a"],d);e["default"]=l.exports}}]);