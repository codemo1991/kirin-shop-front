(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"012c":function(t,i,e){"use strict";e.r(i);var a=e("f267"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},"198a":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[t.show?e("v-uni-view",{ref:"ani",staticClass:"message round bg-gradual-orange flex justify-start shadow",staticStyle:{padding:"3px"},style:{top:t.top+"px",left:t.left+"px"},attrs:{animation:t.animationData}},[e("v-uni-view",{staticClass:"cu-avatar cu-a-sm round",style:{backgroundImage:"url("+t.content.img+")"}}),e("v-uni-view",{staticClass:"padding-lr-sm flex align-center"},[e("v-uni-text",{staticClass:"text-sm"},[t._v(t._s(t.content.title))])],1)],1):t._e()],1)},o=[]},"1c40":function(t,i,e){"use strict";var a=e("5e1f"),n=e.n(a);n.a},"37e88":function(t,i,e){"use strict";e("a9e3"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={name:"Pengpai-FadeInOut",props:{duration:{type:Number,default:2600},wait:{type:Number,default:3e3},top:{type:Number,default:350},left:{type:Number,default:10},radius:{type:Number,default:30},loop:{type:Boolean,default:!0},list:{type:[Array,Object],default:function(){}}},data:function(){return{animationData:{},content:[],show:!0}},created:function(){var t=this;if(0!=this.list.length){var i=0;this.content=this.list[0],this.donghua();var e=setInterval((function(){!t.loop&&i>=t.list.length-2&&clearInterval(e),i>=t.list.length-1&&(i=-1),t.list.length>0&&i<=t.list.length&&(i++,t.content=t.list[i],t.donghua())}),this.wait+this.duration)}else this.show=!1},methods:{donghua:function(){var t=this;this.animationData=uni.createAnimation({duration:this.duration/2,timingFunction:"ease"}).top(this.top-this.radius).opacity(.9).step().export(),setTimeout((function(){t.animationData=uni.createAnimation({duration:t.duration/2,timingFunction:"ease"}).top(t.top-2*t.radius).opacity(0).step().export(),setTimeout((function(){t.animationData=uni.createAnimation({duration:0,timingFunction:"ease"}).top(t.top).opacity(0).step().export()}),t.duration/2)}),this.wait)}}};i.default=a},"5e1f":function(t,i,e){var a=e("b3f5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("96dffcba",a,!0,{sourceMap:!1,shadowMode:!1})},6128:function(t,i,e){"use strict";e.r(i);var a=e("198a"),n=e("b921");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("1c40");var r,s=e("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b7ec38f2",null,!1,a["a"],r);i["default"]=l.exports},9083:function(t,i,e){"use strict";var a=e("94fe"),n=e.n(a);n.a},"94fe":function(t,i,e){var a=e("aa5a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("1cd1be23",a,!0,{sourceMap:!1,shadowMode:!1})},aa5a:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-279ba733]{background:#f5f5f5}.m-t[data-v-279ba733]{margin-top:%?16?%}\n/* 头部 轮播图 */.carousel-section[data-v-279ba733]{position:relative;padding-top:10px}.carousel-section .titleNview-placing[data-v-279ba733]{height:0;padding-top:44px;-webkit-box-sizing:content-box;box-sizing:content-box}.carousel-section .titleNview-background[data-v-279ba733]{position:absolute;top:0;left:0;width:100%;height:%?426?%;-webkit-transition:.4s;transition:.4s}.carousel[data-v-279ba733]{width:100%;height:%?350?%}.carousel .carousel-item[data-v-279ba733]{width:100%;height:100%;padding:0 %?28?%;overflow:hidden}.carousel uni-image[data-v-279ba733]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.swiper-dots[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:%?60?%;bottom:%?15?%;width:%?72?%;height:%?36?%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);background-size:100% 100%}.swiper-dots .num[data-v-279ba733]{width:%?36?%;height:%?36?%;-webkit-border-radius:50px;border-radius:50px;font-size:%?24?%;color:#fff;text-align:center;line-height:%?36?%}.swiper-dots .sign[data-v-279ba733]{position:absolute;top:0;left:50%;line-height:%?36?%;font-size:%?12?%;color:#fff;-webkit-transform:translateX(-50%);transform:translateX(-50%)}\n/* 分类 */.cate-section[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?30?% %?22?%;background:#fff\n  /* 原图标颜色太深,不想改图了,所以加了透明度 */}.cate-section .cate-item[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#303133}.cate-section uni-image[data-v-279ba733]{width:%?88?%;height:%?88?%;margin-bottom:%?14?%}.ad-1[data-v-279ba733]{width:100%;height:%?210?%;padding:%?10?% 0;background:#fff}.ad-1 uni-image[data-v-279ba733]{width:100%;height:100%}\n/* 秒杀专区 */.seckill-section[data-v-279ba733]{padding:%?4?% %?30?% %?24?%;background:#fff}.seckill-section .s-header[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?92?%;line-height:1}.seckill-section .s-header .s-img[data-v-279ba733]{width:%?140?%;height:%?30?%}.seckill-section .s-header .tip[data-v-279ba733]{font-size:%?28?%;color:#909399;margin:0 %?20?% 0 %?40?%}.seckill-section .s-header .timer[data-v-279ba733]{display:inline-block;width:%?40?%;height:%?36?%;text-align:center;line-height:%?36?%;margin-right:%?14?%;font-size:%?26?%;color:#fff;-webkit-border-radius:2px;border-radius:2px;background:rgba(0,0,0,.8)}.seckill-section .s-header .icon-you[data-v-279ba733]{font-size:%?32?%;color:#909399;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.seckill-section .floor-list[data-v-279ba733]{white-space:nowrap}.seckill-section .scoll-wrapper[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.seckill-section .floor-item[data-v-279ba733]{width:%?150?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.seckill-section .floor-item uni-image[data-v-279ba733]{width:%?150?%;height:%?150?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.seckill-section .floor-item .price[data-v-279ba733]{color:#fa436a}.f-header[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?140?%;padding:%?6?% %?30?% %?8?%;background:#fff}.f-header uni-image[data-v-279ba733]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%;margin-right:%?20?%}.f-header .tit-box[data-v-279ba733]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.f-header .tit[data-v-279ba733]{font-size:%?34?%;color:#font-color-dark;line-height:1.3}.f-header .tit2[data-v-279ba733]{font-size:%?24?%;color:#909399}.f-header .icon-you[data-v-279ba733]{font-size:%?34?%;color:#909399}\n/* 团购楼层 */.group-section[data-v-279ba733]{background:#fff}.group-section .g-swiper[data-v-279ba733]{height:%?650?%;padding-bottom:%?30?%}.group-section .g-swiper-item[data-v-279ba733]{width:100%;padding:0 %?30?%;display:-webkit-box;display:-webkit-flex;display:flex}.group-section uni-image[data-v-279ba733]{width:100%;height:%?460?%;-webkit-border-radius:4px;border-radius:4px}.group-section .g-item[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.group-section .left[data-v-279ba733]{-webkit-box-flex:1.2;-webkit-flex:1.2;flex:1.2;margin-right:%?24?%}.group-section .left .t-box[data-v-279ba733]{padding-top:%?20?%}.group-section .right[data-v-279ba733]{-webkit-box-flex:0.8;-webkit-flex:0.8;flex:0.8;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;flex-direction:column-reverse}.group-section .right .t-box[data-v-279ba733]{padding-bottom:%?20?%}.group-section .t-box[data-v-279ba733]{height:%?160?%;font-size:%?30?%;color:#303133;line-height:1.6}.group-section .price[data-v-279ba733]{color:#fa436a}.group-section .m-price[data-v-279ba733]{font-size:%?26?%;text-decoration:line-through;color:#909399;margin-left:%?8?%}.group-section .pro-box[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?10?%;font-size:%?24?%;color:%?28?%;padding-right:%?10?%}.group-section .progress-box[data-v-279ba733]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-border-radius:10px;border-radius:10px;overflow:hidden;margin-right:%?8?%}\n/* 分类推荐楼层 */.hot-floor[data-v-279ba733]{width:100%;overflow:hidden;margin-bottom:%?20?%}.hot-floor .floor-img-box[data-v-279ba733]{width:100%;height:%?320?%;position:relative}.hot-floor .floor-img-box[data-v-279ba733]:after{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:-webkit-gradient(linear,left top,left bottom,color-stop(30%,hsla(0,0%,100%,.06)),to(#f8f8f8));background:-webkit-linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8);background:linear-gradient(hsla(0,0%,100%,.06) 30%,#f8f8f8)}.hot-floor .floor-img[data-v-279ba733]{width:100%;height:100%}.hot-floor .floor-list[data-v-279ba733]{white-space:nowrap;padding:%?20?%;padding-right:%?50?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;margin-top:%?-140?%;margin-left:%?30?%;background:#fff;-webkit-box-shadow:1px 1px 5px rgba(0,0,0,.2);box-shadow:1px 1px 5px rgba(0,0,0,.2);position:relative;z-index:1}.hot-floor .scoll-wrapper[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.hot-floor .floor-item[data-v-279ba733]{width:%?180?%;margin-right:%?20?%;font-size:%?26?%;color:#303133;line-height:1.8}.hot-floor .floor-item uni-image[data-v-279ba733]{width:%?180?%;height:%?180?%;-webkit-border-radius:%?6?%;border-radius:%?6?%}.hot-floor .floor-item .price[data-v-279ba733]{color:#fa436a}.hot-floor .more[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-shrink:0;flex-shrink:0;width:%?180?%;height:%?180?%;-webkit-border-radius:%?6?%;border-radius:%?6?%;background:#f3f3f3;font-size:%?28?%;color:#909399}.hot-floor .more uni-text[data-v-279ba733]:first-child{margin-bottom:%?4?%}\n/* 猜你喜欢 */.guess-section[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:0 %?25?%;background:#fff}.guess-section .guess-item[data-v-279ba733]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:30%;padding-bottom:%?30?%}.guess-section .guess-item[data-v-279ba733]:nth-child(3n+2){margin-right:%?30?%;margin-left:%?30?%}.guess-section .image-wrapper[data-v-279ba733]{width:100%;height:%?220?%;-webkit-border-radius:3px;border-radius:3px;overflow:hidden;-webkit-border-radius:10px;border-radius:10px}.guess-section .image-wrapper uni-image[data-v-279ba733]{width:100%;height:100%;opacity:1}.guess-section .title[data-v-279ba733]{font-size:%?25?%;color:#303133;line-height:%?50?%}.guess-section .price[data-v-279ba733]{font-size:%?25?%;color:#fa436a;line-height:1}body.?%PAGE?%[data-v-279ba733]{background:#f5f5f5}',""]),t.exports=i},b3f5:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,".message[data-v-b7ec38f2]{position:fixed;z-index:99999;opacity:0}.round[data-v-b7ec38f2]{-webkit-border-radius:5000px;border-radius:5000px}.bg-gradual-orange[data-v-b7ec38f2]{\r\nbackground-image:-webkit-linear-gradient(45deg,#ff9700,#ed1c24);background-image:linear-gradient(45deg,#ff9700,#ed1c24);\r\n\r\n\r\ncolor:#fff}.shadow[data-v-b7ec38f2]{-webkit-box-shadow:4px 4px 5px rgba(217,109,26,.2);box-shadow:4px 4px 5px rgba(217,109,26,.2)}.flex[data-v-b7ec38f2]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.justify-start[data-v-b7ec38f2]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.cu-avatar[data-v-b7ec38f2]{\r\nfont-variant:small-caps;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;white-space:nowrap;background-size:cover;background-position:50%;vertical-align:middle;\r\nmargin:0;padding:0;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ccc;color:#fff;position:relative;width:30px;height:30px;font-size:1.5em}\n.cu-a-sm[data-v-b7ec38f2]{width:30px;height:30px;font-size:1em}.padding-lr-sm[data-v-b7ec38f2]{padding-left:%?20?%;padding-right:%?20?%}.align-center[data-v-b7ec38f2]{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.margin-left-xs[data-v-b7ec38f2]{margin-left:%?10?%}.text-bold[data-v-b7ec38f2]{font-weight:700}.margin-lr-sm[data-v-b7ec38f2]{margin-left:%?20?%;margin-right:%?20?%}.text-sm[data-v-b7ec38f2]{font-size:15px;color:#fff}",""]),t.exports=i},b921:function(t,i,e){"use strict";e.r(i);var a=e("37e88"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,(function(){return a[t]}))}(o);i["default"]=n.a},ba59:function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return o})),e.d(i,"a",(function(){return a}));var a={PengpaiFadeInOut:e("6128").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"carousel-section"},[e("v-uni-view",{staticClass:"titleNview-placing"}),e("v-uni-view",{staticClass:"titleNview-background",staticStyle:{backgroundColor:"rgb(81, 163, 244)"}}),e("v-uni-swiper",{staticClass:"carousel",attrs:{circular:!0},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.swiperChange.apply(void 0,arguments)}}},t._l(t.carouselList,(function(i,a){return e("v-uni-swiper-item",{key:a,staticClass:"carousel-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navTo(i.url)}}},[e("v-uni-image",{attrs:{src:i.imgUrl}})],1)})),1),e("v-uni-view",{staticClass:"swiper-dots"},[e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperCurrent+1))]),e("v-uni-text",{staticClass:"sign"},[t._v("/")]),e("v-uni-text",{staticClass:"num"},[t._v(t._s(t.swiperLength))])],1)],1),t._l(t.menuList,(function(i,a){return e("v-uni-view",{key:a},[e("v-uni-view",{staticClass:"cate-section"},t._l(i,(function(i,a){return e("v-uni-view",{key:a,staticClass:"cate-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToListPage(i.cateId)}}},[e("v-uni-image",{attrs:{src:i.imgUrl}}),e("v-uni-text",[t._v(t._s(i.name))])],1)})),1)],1)})),e("v-uni-view",{staticClass:"seckill-section m-t"},[e("v-uni-view",{staticClass:"s-header"},[e("v-uni-image",{staticClass:"s-img",attrs:{src:"/static/temp/secskill-img.jpg",mode:"widthFix"}}),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-scroll-view",{staticClass:"floor-list",attrs:{"scroll-x":!0}},[e("v-uni-view",{staticClass:"scoll-wrapper"},t._l(t.goodsList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"floor-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-image",{attrs:{src:i.imgUrl,mode:"aspectFill"}}),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.goodName))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)})),1)],1)],1),e("v-uni-view",{staticClass:"f-header m-t"},[e("v-uni-image",{attrs:{src:"/static/temp/h1.png"}}),e("v-uni-view",{staticClass:"tit-box"},[e("v-uni-text",{staticClass:"tit"},[t._v("热销榜")]),e("v-uni-text",{staticClass:"tit2"},[t._v("recommend")])],1),e("v-uni-text",{staticClass:"yticon icon-you"})],1),e("v-uni-view",{staticClass:"guess-section"},t._l(t.goodsList,(function(i,a){return e("v-uni-view",{key:a,staticClass:"guess-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navToDetailPage(i)}}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{attrs:{src:i.imgUrl,mode:"aspectFill"}})],1),e("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(i.goodName))]),e("v-uni-text",{staticClass:"price"},[t._v("￥"+t._s(i.price))])],1)})),1),e("v-uni-view",[e("Pengpai-FadeInOut",{attrs:{duration:2600,wait:3e3,top:100,left:10,radius:30,loop:!0,list:t.list}})],1)],2)},o=[]},f0ba:function(t,i,e){"use strict";e.r(i);var a=e("ba59"),n=e("012c");for(var o in n)"default"!==o&&function(t){e.d(i,t,(function(){return n[t]}))}(o);e("9083");var r,s=e("f0c5"),l=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"279ba733",null,!1,a["a"],r);i["default"]=l.exports},f267:function(t,i,e){"use strict";var a=e("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),o={data:function(){return{titleNViewBackground:"",swiperCurrent:0,swiperLength:0,carouselList:[],goodsList:[],menuList:[],list:[{title:"踮起脚尖走向阳光 刚刚浏览分享了特惠套装",img:"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er0aq5WuQhWxXcQoQbSnSPywUheQrot5biaFxV47nF2OB0aegkH12q2A6VkGUBDfUVqiaqgzVCJJicDg/132"},{title:"幸福的小女人  刚刚浏览了丸子",img:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIOeUhleCNwcOoTtk9Y1zwmpw76FsmAr1bYcKia2AVPiapbtl34jac7SQgjMaibKDJCqjYaHwvmUh3IQ/132"},{title:"快乐天使  购买了冷敷贴",img:"https://wx.qlogo.cn/mmopen/vi_32/OaXz0rjMsrHkZlfxeEqRhhUCKyaXyVSbCQZWFUeZQuUetKhbQRZiclqNQhFfv3yiclOzTl1FgZdjDpwAFG5gDhBg/132"},{title:"握不住的沙  刚刚浏览了鸡趴",img:"https://wx.qlogo.cn/mmopen/vi_32/bVfMeCPxSQsfBRc1XFHiaAiaZvvdrXC9hMTWAHoqDZKk7HD2By7km1dc55eSEibibKwDaW3ZQ2Zcbccr4KzwILVquQ/132"},{title:"顺其自然  刚刚购买了柔贝儿",img:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJghoO6zuibOUG6AMubJJIUicbbWjyOyljFr4QVZecvRqEhHfkIribPfEyfxiaKY5MpiaAeVjvokLLATDw/132"}]}},onShow:function(){this.loadHomeBaseInfo()},onLoad:function(){},methods:{loadHomeBaseInfo:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:e=t,t.$http.get(t.$httpApi.home.banner,{}).then((function(t){var i=t.gallerys;e.carouselList=i,e.swiperLength=i.length;var a=t.recGoods;e.goodsList=a||[];var n=t.goodMenus;e.menuList=n||[]})).catch((function(t){}));case 2:case"end":return i.stop()}}),i)})))()},swiperChange:function(t){var i=t.detail.current;this.swiperCurrent=i,this.titleNViewBackground=this.carouselList[i].background},navToDetailPage:function(t){var i=t.goodId;uni.navigateTo({url:"/pages/product/product?id=".concat(i)})},navToListPage:function(t){uni.navigateTo({url:"/pages/product/list?classId=".concat(t)})},navTo:function(t){uni.navigateTo({url:t})}},onNavigationBarSearchInputClicked:function(){var t=(0,n.default)(regeneratorRuntime.mark((function t(i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function i(i){return t.apply(this,arguments)}return i}(),onNavigationBarButtonTap:function(t){}};i.default=o}}]);