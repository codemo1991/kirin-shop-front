;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{"2db2":function(n,t,e){"use strict";var u=e("58d3"),c=e.n(u);c.a},"58d3":function(n,t,e){},"77ee":function(n,t,e){"use strict";e.r(t);var u=e("8741"),c=e("9862");for(var r in c)"default"!==r&&function(n){e.d(t,n,(function(){return c[n]}))}(r);e("2db2");var i,o=e("f0c5"),a=Object(o["a"])(c["default"],u["b"],u["c"],!1,null,"ffb66962",null,!1,u["a"],i);t["default"]=a.exports},8741:function(n,t,e){"use strict";var u,c=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}))},9862:function(n,t,e){"use strict";e.r(t);var u=e("e136"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=c.a},e136:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=u}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("77ee"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
