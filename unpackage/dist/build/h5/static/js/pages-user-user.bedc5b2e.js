(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"00bc":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.icon .mix-list-cell.b-b[data-v-79567dc6]:after{left:%?90?%}.mix-list-cell[data-v-79567dc6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;padding:%?20?% %?30?%;line-height:%?60?%;position:relative}.mix-list-cell.cell-hover[data-v-79567dc6]{background:#fafafa}.mix-list-cell.b-b[data-v-79567dc6]:after{left:%?30?%}.mix-list-cell .cell-icon[data-v-79567dc6]{-webkit-align-self:center;align-self:center;width:%?56?%;max-height:%?60?%;font-size:%?38?%}.mix-list-cell .cell-more[data-v-79567dc6]{-webkit-align-self:center;align-self:center;font-size:%?30?%;color:#606266;margin-left:10px}.mix-list-cell .cell-tit[data-v-79567dc6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133;margin-right:%?10?%}.mix-list-cell .cell-tip[data-v-79567dc6]{font-size:%?26?%;color:#909399}',""]),t.exports=i},"08d5":function(t,i,e){"use strict";var n=e("b61e"),a=e.n(n);a.a},"2bb0":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n={data:function(){return{typeList:{left:"icon-zuo",right:"icon-you",up:"icon-shang",down:"icon-xia"}}},props:{icon:{type:String,default:""},title:{type:String,default:"标题"},tips:{type:String,default:""},navigateType:{type:String,default:"right"},border:{type:String,default:"b-b"},hoverClass:{type:String,default:"cell-hover"},iconColor:{type:String,default:"#333"}},methods:{eventClick:function(){this.$emit("eventClick")}}};i.default=n},"434f":function(t,i,e){var n=e("00bc");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("e123264e",n,!0,{sourceMap:!1,shadowMode:!1})},"57b8":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"user-section"},[e("v-uni-image",{staticClass:"bg",attrs:{src:"/static/user-bg.jpg"}}),e("v-uni-view",{staticClass:"user-info-box"},[e("v-uni-view",{staticClass:"portrait-box"},[e("v-uni-image",{staticClass:"portrait",attrs:{src:t.userInfo.portrait||"/static/missing-face.png"}})],1),e("v-uni-view",{staticClass:"info-box"},[e("v-uni-text",{staticClass:"username"},[t._v(t._s(t.userInfo.nickname||"游客"))])],1)],1),e("v-uni-view",{staticClass:"vip-card-box"},[e("v-uni-image",{staticClass:"card-bg",attrs:{src:"/static/vip-card-bg.png",mode:""}}),e("v-uni-view",{staticClass:"b-btn"},[t._v("立即开通")]),e("v-uni-view",{staticClass:"tit"},[e("v-uni-text",{staticClass:"yticon icon-iLinkapp-"}),t._v("DCloud会员")],1),e("v-uni-text",{staticClass:"e-m"},[t._v("DCloud Union")]),e("v-uni-text",{staticClass:"e-b"},[t._v("开通会员开发无bug 一测就上线")])],1)],1),e("v-uni-view",{staticClass:"cover-container",style:[{transform:t.coverTransform,transition:t.coverTransition}],on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchstart.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchmove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.coverTouchend.apply(void 0,arguments)}}},[e("v-uni-image",{staticClass:"arc",attrs:{src:"/static/arc.png"}}),e("v-uni-view",{staticClass:"tj-sction"},[e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("128.8")]),e("v-uni-text",[t._v("余额")])],1),e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("0")]),e("v-uni-text",[t._v("优惠券")])],1),e("v-uni-view",{staticClass:"tj-item"},[e("v-uni-text",{staticClass:"num"},[t._v("20")]),e("v-uni-text",[t._v("积分")])],1)],1),e("v-uni-view",{staticClass:"order-section"},[e("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/order/order?state=0")}}},[e("v-uni-text",{staticClass:"yticon icon-shouye"}),e("v-uni-text",[t._v("全部订单")])],1),e("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/order/order?state=1")}}},[e("v-uni-text",{staticClass:"yticon icon-daifukuan"}),e("v-uni-text",[t._v("待付款")])],1),e("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/order/order?state=2")}}},[e("v-uni-text",{staticClass:"yticon icon-yishouhuo"}),e("v-uni-text",[t._v("待收货")])],1),e("v-uni-view",{staticClass:"order-item",attrs:{"hover-class":"common-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/order/order?state=4")}}},[e("v-uni-text",{staticClass:"yticon icon-shouhoutuikuan"}),e("v-uni-text",[t._v("退款/售后")])],1)],1),e("v-uni-view",{staticClass:"history-section icon"},[e("v-uni-view",{staticClass:"sec-header"},[e("v-uni-text",{staticClass:"yticon icon-lishijilu"}),e("v-uni-text",[t._v("浏览历史")])],1),e("v-uni-scroll-view",{staticClass:"h-list",attrs:{"scroll-x":!0}},[e("v-uni-image",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105186633&di=c121a29beece4e14269948d990f9e720&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fm8%2FM04%2FDE%2FDE%2FwKhQplZ-QteEBvsbAAAAADUkobU751.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}}),e("v-uni-image",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105231218&di=09534b9833b5243296630e6d5b728eff&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm1%2FM05%2FD1%2FAC%2FwKhQcFQ3iN2EQTo8AAAAAHQU6_8355.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}}),e("v-uni-image",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105320890&di=c743386be51f2c4c0fd4b75754d14f3c&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fhb%2FMTQ1OTg4ODY0MDA3Ny05OTQ4ODY1NDQ%3D.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}}),e("v-uni-image",{attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2691146630,2165926318&fm=26&gp=0.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}}),e("v-uni-image",{attrs:{src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105443324&di=8141bf13f3f208c61524d67f9bb83942&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac9a5548d29b0000019ae98e6d98.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}}),e("v-uni-image",{attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=191678693,2701202375&fm=26&gp=0.jpg",mode:"aspectFill"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/product/product")}}})],1),e("list-cell",{attrs:{icon:"icon-iconfontweixin",iconColor:"#e07472",title:"我的钱包",tips:"您的会员还有3天过期"}}),e("list-cell",{attrs:{icon:"icon-dizhi",iconColor:"#5fcda2",title:"地址管理"},on:{eventClick:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/address/address")}}}),e("list-cell",{attrs:{icon:"icon-share",iconColor:"#9789f7",title:"分享",tips:"邀请好友赢10万大礼"}}),e("list-cell",{attrs:{icon:"icon-pinglun-copy",iconColor:"#ee883b",title:"晒单",tips:"晒单抢红包"}}),e("list-cell",{attrs:{icon:"icon-shoucang_xuanzhongzhuangtai",iconColor:"#54b4ef",title:"我的收藏"}}),e("list-cell",{attrs:{icon:"icon-shezhi1",iconColor:"#e07472",title:"设置",border:""},on:{eventClick:function(i){arguments[0]=i=t.$handleEvent(i),t.navTo("/pages/set/set")}}})],1)],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},6138:function(t,i,e){"use strict";e.r(i);var n=e("63b6"),a=e("cce9");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("add0");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"79567dc6",null,!1,n["a"],s);i["default"]=r.exports},"63b6":function(t,i,e){"use strict";var n,a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"mix-list-cell",class:t.border,attrs:{"hover-class":"cell-hover","hover-stay-time":50},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.eventClick.apply(void 0,arguments)}}},[t.icon?e("v-uni-text",{staticClass:"cell-icon yticon",class:t.icon,style:[{color:t.iconColor}]}):t._e(),e("v-uni-text",{staticClass:"cell-tit clamp"},[t._v(t._s(t.title))]),t.tips?e("v-uni-text",{staticClass:"cell-tip"},[t._v(t._s(t.tips))]):t._e(),e("v-uni-text",{staticClass:"cell-more yticon",class:t.typeList[t.navigateType]})],1)],1)},o=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return n}))},7513:function(t,i,e){"use strict";e.r(i);var n=e("57b8"),a=e("b546");for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);e("08d5");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"00104bd7",null,!1,n["a"],s);i["default"]=r.exports},"78a7":function(t,i,e){var n=e("24fb");i=n(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.tj-sction .tj-item[data-v-00104bd7], .order-section .order-item[data-v-00104bd7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tj-sction[data-v-00104bd7], .order-section[data-v-00104bd7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-align-content:center;align-content:center;background:#fff;border-radius:%?10?%}.user-section[data-v-00104bd7]{height:%?520?%;padding:%?100?% %?30?% 0;position:relative}.user-section .bg[data-v-00104bd7]{position:absolute;left:0;top:0;width:100%;height:100%;-webkit-filter:blur(1px);filter:blur(1px);opacity:.7}.user-info-box[data-v-00104bd7]{height:%?180?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;z-index:1}.user-info-box .portrait[data-v-00104bd7]{width:%?130?%;height:%?130?%;border:%?5?% solid #fff;border-radius:50%}.user-info-box .username[data-v-00104bd7]{font-size:%?38?%;color:#303133;margin-left:%?20?%}.vip-card-box[data-v-00104bd7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;color:#f7d680;height:%?240?%;background:-webkit-linear-gradient(left,rgba(0,0,0,.7),rgba(0,0,0,.8));background:linear-gradient(left,rgba(0,0,0,.7),rgba(0,0,0,.8));border-radius:%?16?% %?16?% 0 0;overflow:hidden;position:relative;padding:%?20?% %?24?%}.vip-card-box .card-bg[data-v-00104bd7]{position:absolute;top:%?20?%;right:0;width:%?380?%;height:%?260?%}.vip-card-box .b-btn[data-v-00104bd7]{position:absolute;right:%?20?%;top:%?16?%;width:%?132?%;height:%?40?%;text-align:center;line-height:%?40?%;font-size:%?22?%;color:#36343c;border-radius:20px;background:-webkit-linear-gradient(left,#f9e6af,#ffd465);background:linear-gradient(left,#f9e6af,#ffd465);z-index:1}.vip-card-box .tit[data-v-00104bd7]{font-size:%?30?%;color:#f7d680;margin-bottom:%?28?%}.vip-card-box .tit .yticon[data-v-00104bd7]{color:#f6e5a3;margin-right:%?16?%}.vip-card-box .e-b[data-v-00104bd7]{font-size:%?24?%;color:#d8cba9;margin-top:%?10?%}.cover-container[data-v-00104bd7]{background:#f8f8f8;margin-top:%?-150?%;padding:0 %?30?%;position:relative;background:#f5f5f5;padding-bottom:%?20?%}.cover-container .arc[data-v-00104bd7]{position:absolute;left:0;top:%?-34?%;width:100%;height:%?36?%}.tj-sction .tj-item[data-v-00104bd7]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:%?140?%;font-size:%?24?%;color:#75787d}.tj-sction .num[data-v-00104bd7]{font-size:%?32?%;color:#303133;margin-bottom:%?8?%}.order-section[data-v-00104bd7]{padding:%?28?% 0;margin-top:%?20?%}.order-section .order-item[data-v-00104bd7]{width:%?120?%;height:%?120?%;border-radius:%?10?%;font-size:%?24?%;color:#303133}.order-section .yticon[data-v-00104bd7]{font-size:%?48?%;margin-bottom:%?18?%;color:#fa436a}.order-section .icon-shouhoutuikuan[data-v-00104bd7]{font-size:%?44?%}.history-section[data-v-00104bd7]{padding:%?30?% 0 0;margin-top:%?20?%;background:#fff;border-radius:%?10?%}.history-section .sec-header[data-v-00104bd7]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;color:#303133;line-height:%?40?%;margin-left:%?30?%}.history-section .sec-header .yticon[data-v-00104bd7]{font-size:%?44?%;color:#5eba8f;margin-right:%?16?%;line-height:%?40?%}.history-section .h-list[data-v-00104bd7]{white-space:nowrap;padding:%?30?% %?30?% 0}.history-section .h-list uni-image[data-v-00104bd7]{display:inline-block;width:%?160?%;height:%?160?%;margin-right:%?20?%;border-radius:%?10?%}',""]),t.exports=i},add0:function(t,i,e){"use strict";var n=e("434f"),a=e.n(n);a.a},b546:function(t,i,e){"use strict";e.r(i);var n=e("df9f"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},b61e:function(t,i,e){var n=e("78a7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("5a080009",n,!0,{sourceMap:!1,shadowMode:!1})},cce9:function(t,i,e){"use strict";e.r(i);var n=e("2bb0"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},df9f:function(t,i,e){"use strict";var n=e("ee27");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("f3f3")),o=n(e("6138")),s=e("2f62"),c=0,r=0,l=!0,d={components:{listCell:o.default},data:function(){return{coverTransform:"translateY(0px)",coverTransition:"0s",moving:!1}},onLoad:function(){},onNavigationBarButtonTap:function(t){var i=t.index;0===i?this.navTo("/pages/set/set"):1===i&&uni.navigateTo({url:"/pages/notice/notice"})},computed:(0,a.default)({},(0,s.mapState)(["hasLogin","userInfo"])),methods:{navTo:function(t){this.hasLogin||(t="/pages/public/login"),uni.navigateTo({url:t})},coverTouchstart:function(t){!1!==l&&(this.coverTransition="transform .1s linear",c=t.touches[0].clientY)},coverTouchmove:function(t){r=t.touches[0].clientY;var i=r-c;i<0?this.moving=!1:(this.moving=!0,i>=80&&i<100&&(i=80),i>0&&i<=80&&(this.coverTransform="translateY(".concat(i,"px)")))},coverTouchend:function(){!1!==this.moving&&(this.moving=!1,this.coverTransition="transform 0.3s cubic-bezier(.21,1.93,.53,.64)",this.coverTransform="translateY(0px)")}}};i.default=d}}]);