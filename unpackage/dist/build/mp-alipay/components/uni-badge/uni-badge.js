;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{3911:function(t,e,n){"use strict";var u,i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return u}))},"8ad8":function(t,e,n){"use strict";n.r(e);var u=n("3911"),i=n("b60a");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f981");var c,r=n("f0c5"),f=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"1a8b4504",null,!1,u["a"],c);e["default"]=f.exports},b5c9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},b60a:function(t,e,n){"use strict";n.r(e);var u=n("b5c9"),i=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);e["default"]=i.a},e8c4:function(t,e,n){},f981:function(t,e,n){"use strict";var u=n("e8c4"),i=n.n(u);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("8ad8"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);
