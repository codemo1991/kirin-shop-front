(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-phoneBind"],{"06d2":function(t,e,i){var n=i("ba8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("1d10d444",n,!0,{sourceMap:!1,shadowMode:!1})},"0b5e":function(t,e,i){"use strict";var n=i("06d2"),o=i.n(n);o.a},3596:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"left-bottom-sign"}),i("v-uni-view",{staticClass:"back-btn yticon icon-zuojiantou-up",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.navBack.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"right-top-sign"}),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"left-top-sign"},[t._v("LOGIN")]),i("v-uni-view",{staticClass:"welcome"},[t._v("绑定手机号码！")]),i("v-uni-view",{staticClass:"input-content"},[i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机号码")]),i("v-uni-input",{attrs:{type:"number",value:t.mobile,placeholder:"请输入手机号码",maxlength:"11","data-key":"mobile"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("手机验证码")]),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-input",{attrs:{type:"digit",value:t.smsCode,placeholder:"请输入手机验证码","placeholder-class":"input-empty",maxlength:"6","data-key":"smsCode"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)}}}),i("v-uni-button",{class:{active:!t.disableCodeBtn},staticStyle:{width:"100px",height:"30px","font-size":"10px","line-height":"30px",position:"absolute",right:"40px"},attrs:{disabled:t.disableCodeBtn},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v(t._s(t.codeBtn.text))])],1)],1),i("v-uni-view",{staticClass:"input-item"},[i("v-uni-text",{staticClass:"tit"},[t._v("密码")]),i("v-uni-input",{attrs:{type:"password",value:t.password,placeholder:"6-12位不含特殊字符的数字或字母组合","placeholder-class":"input-empty",maxlength:"20",password:!0,"data-key":"password"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.toLogin.apply(void 0,arguments)}}})],1)],1),i("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:t.logining},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegist.apply(void 0,arguments)}}},[t._v("绑定手机号码")])],1)],1)},a=[]},3849:function(t,e,i){"use strict";i.r(e);var n=i("dd92"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},6029:function(t,e,i){"use strict";i.r(e);var n=i("3596"),o=i("3849");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("0b5e");var d,s=i("f0c5"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,"7b1a6b3d",null,!1,n["a"],d);e["default"]=r.exports},"6dbd":function(t,e,i){"use strict";function n(t){if(!document.queryCommandSupported("copy"))return!1;var e=document.createElement("textarea");e.value=t,e.readOnly="readOnly",document.body.appendChild(e),e.select(),e.setSelectionRange(0,t.length);var i=document.execCommand("copy");return e.remove(),i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},ba8c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-7b1a6b3d]{background:#fff}.container[data-v-7b1a6b3d]{padding-top:55px;position:relative;width:100vw;height:100vh;overflow:hidden;background:#fff}.wrapper[data-v-7b1a6b3d]{position:relative;z-index:90;background:#fff;padding-bottom:%?40?%}.back-btn[data-v-7b1a6b3d]{position:absolute;left:%?40?%;z-index:9999;padding-top:0;top:%?40?%;font-size:%?40?%;color:#303133}.left-top-sign[data-v-7b1a6b3d]{font-size:%?120?%;color:#f8f8f8;position:relative;left:%?-16?%}.right-top-sign[data-v-7b1a6b3d]{position:absolute;top:%?80?%;right:%?-30?%;z-index:95}.right-top-sign[data-v-7b1a6b3d]:before, .right-top-sign[data-v-7b1a6b3d]:after{display:block;content:"";width:%?400?%;height:%?80?%;background:#b4f3e2}.right-top-sign[data-v-7b1a6b3d]:before{-webkit-transform:rotate(50deg);transform:rotate(50deg);-webkit-border-radius:0 50px 0 0;border-radius:0 50px 0 0}.right-top-sign[data-v-7b1a6b3d]:after{position:absolute;right:%?-198?%;top:0;-webkit-transform:rotate(-50deg);transform:rotate(-50deg);-webkit-border-radius:50px 0 0 0;border-radius:50px 0 0 0\n  /* background: pink; */}.left-bottom-sign[data-v-7b1a6b3d]{position:absolute;left:%?-270?%;bottom:%?-320?%;border:%?100?% solid #d0d1fd;-webkit-border-radius:50%;border-radius:50%;padding:%?180?%}.welcome[data-v-7b1a6b3d]{position:relative;left:%?50?%;top:%?-90?%;font-size:%?46?%;color:#555;text-shadow:1px 0 1px rgba(0,0,0,.3)}.input-content[data-v-7b1a6b3d]{padding:0 %?60?%}.input-item[data-v-7b1a6b3d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?30?%;background:#f8f6fc;height:%?120?%;-webkit-border-radius:4px;border-radius:4px;margin-bottom:%?50?%}.input-item[data-v-7b1a6b3d]:last-child{margin-bottom:0}.input-item .tit[data-v-7b1a6b3d]{height:%?50?%;line-height:%?56?%;font-size:%?26?%;color:#606266}.input-item uni-input[data-v-7b1a6b3d]{height:%?60?%;font-size:%?30?%;color:#303133;width:100%}.confirm-btn[data-v-7b1a6b3d]{width:%?630?%;height:%?76?%;line-height:%?76?%;-webkit-border-radius:50px;border-radius:50px;margin-top:%?70?%;background:#fa436a;color:#fff;font-size:%?32?%}.confirm-btn[data-v-7b1a6b3d]:after{-webkit-border-radius:100px;border-radius:100px}.forget-section[data-v-7b1a6b3d]{font-size:%?26?%;color:#4399fc;text-align:center;margin-top:%?40?%}.register-section[data-v-7b1a6b3d]{position:absolute;left:0;bottom:%?50?%;width:100%;font-size:%?26?%;color:#606266;text-align:center}.register-section uni-text[data-v-7b1a6b3d]{color:#4399fc;margin-left:%?10?%}.login-footer[data-v-7b1a6b3d]{padding:0 %?70?%}.login-footer .footer-tip[data-v-7b1a6b3d]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;color:#999;text-align:center}.login-footer .footer-tip[data-v-7b1a6b3d]:before{-webkit-box-flex:1;-webkit-flex:1;flex:1;content:"";height:%?2?%;background:#d0d0d0;margin-right:%?30?%}.login-footer .footer-tip[data-v-7b1a6b3d]:after{margin-left:%?30?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;content:"";height:%?2?%;background:#d0d0d0}.login-footer .footer-other[data-v-7b1a6b3d]{padding:%?40?% 0 %?100?% 0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.login-footer .footer-other .other-list[data-v-7b1a6b3d]{width:%?80?%;height:%?80?%;margin:0 auto}.login-footer .footer-other .other-list uni-image[data-v-7b1a6b3d]{width:100%;height:100%}body.?%PAGE?%[data-v-7b1a6b3d]{background:#fff}',""]),t.exports=e},dd92:function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("5530")),a=i("2f62"),d=(n(i("d0f8")),n(i("6dbd")),{data:function(){return{mobile:"",password:"",smsCode:"",logining:!1,seconds:60,codeBtn:{text:"获取验证码",waitingCode:!1,count:this.seconds}}},onLoad:function(t){},methods:(0,o.default)((0,o.default)({},(0,a.mapMutations)(["login"])),{},{inputChange:function(t){var e=t.currentTarget.dataset.key;this[e]=t.detail.value},navBack:function(){uni.navigateBack()},toRegist:function(){if(this.mobile)if(this.password)if(t("log",this.smsCode," at pages/user/phoneBind.vue:78"),this.smsCode){this.logining=!0;var e=this;this.$http.post(this.$httpApi.my.phoneBind,{phone:e.mobile,password:e.password,code:e.smsCode},{header:{"content-type":"application/x-www-form-urlencoded"}}).then((function(t){e.$api.msg("恭喜你！绑定成功!"),uni.switchTab({url:"/pages/user/user"})})).catch((function(e){t("log",e," at pages/user/phoneBind.vue:103")})),this.logining=!1}else this.$api.msg("验证码不能为空");else this.$api.msg("密码不能为空");else this.$api.msg("手机号码不能为空")},sendCode:function(){if(this.codeBtn.waitingCode=!0,!this.mobile)return this.codeBtn.waitingCode=!1,void this.$api.msg("电话号码不能为空");if(this.codeBtn.waitingCode){var t=this;this.$http.get(this.$httpApi.user.sendSms,{phone:t.mobile}).then((function(e){t.$api.msg("获取验证码成功，请留意短信"),t.codeBtn.count=t.seconds,t.codeBtn.text=t.codeBtn.count+"s";var i=setInterval((function(){t.codeBtn.count--,t.codeBtn.text=t.codeBtn.count+"s",t.codeBtn.count<0&&(clearInterval(i),t.codeBtn.text="重新发送",t.codeBtn.waitingCode=!1)}),1e3)})).catch((function(t){})),this.codeBtn.waitingCode=!1}}}),computed:{disableCodeBtn:function(){return this.codeBtn.waitingCode}}});e.default=d}).call(this,i("0de9")["log"])}}]);