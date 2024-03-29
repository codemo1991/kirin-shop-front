var jweixin = require('@/components/jweixin-module/index');
import http from '@/js_sdk/zhouWei-request/requestConfig';
import httpApi from '@/common/httpApi'

export default {
	//判断是否在微信中
	isWechat: function() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/micromessenger/i) == 'micromessenger') {
			//console.log('是微信客户端')
			return true;
		} else {
			//console.log('不是微信客户端')
			return false;
		}
	},
	initJssdk: function(callback) {
		var that = this;
		http.get(httpApi.share.share, {
			"url": window.location.href.split('#')[0]
			// "url": "https://www.ricebuy.cn/v1"
			
		}).
		then(function(response) {
			//这里只会在接口是成功状态返回
			jweixin.config({
				debug: false,
				appId: response.appid,
				timestamp: response.timestamp,
				nonceStr: response.noncestr,
				signature: response.signature,
				jsApiList: ['updateAppMessageShareData','updateTimelineShareData']
			});
			callback(response);
		}).catch(function(error) {
			//这里只会在接口是失败状态返回，不需要去处理错误提示
		});
	},
	//在需要定位页面调用
	getlocation: function(callback) {
		if (!this.isWechat()) {
			console.log('不是微信客户端')
			return;
		}
		this.initJssdk(function(res) {
			jweixin.ready(function() {
				jweixin.getLocation({
					type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					success: function(res) {
						// console.log(res);
						callback(res)
					},
					fail: function(res) {},
					// complete:function(res){
					//     console.log(res)
					// }
				});
			});
		});
	},
	share: function(data, callback) {
		if (!this.isWechat()) {
			console.log('不是微信客户端')
			return;
		}
		this.initJssdk(function(res) {
			jweixin.ready(function() {
				var shareData = {
					title: data.strShareTitle,
					desc: data.strShareSummary,
					link: data.strShareUrl,
					imgUrl: data.strShareImageUrl,
					success: function(res) {
						callback(res)
					},
					cancel: function(res) {}
				};
				jweixin.updateAppMessageShareData(shareData);
				//分享到朋友圈接口
				// jweixin.updateTimelineShareData(shareData);
			});
		});

	},
	openLocation: function(data, callback) { //打开位置
		if (!this.isWechat()) {
			//console.log('不是微信客户端')
			return;
		}
		this.initJssdk(function(res) {
			jweixin.ready(function() {
				jweixin.openLocation({ //根据传入的坐标打开地图
					latitude: data.latitude,
					longitude: data.longitude
				});
			});
		});
	},
	chooseImage: function(callback) { //选择图片
		if (!this.isWechat()) {
			//console.log('不是微信客户端')
			return;
		}
		//console.log(data);
		this.initJssdk(function(res) {
			jweixin.ready(function() {
				jweixin.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					sourceType: ['album'],
					success: function(rs) {
						callback(rs)
					}
				})
			});
		});
	},
	//微信支付
	wxpay: function(data, callback) {
		let that = this;
		if (!this.isWechat()) {
			console.log("不是微信客户端")
			uni.showToast({
			title: '请在微信客户端打开',
			icon:'none',
			duration: 2000
			});
			return;
		}
		this.initJssdk(function(res) {
			jweixin.ready(function() {
				jweixin.chooseWXPay({
					timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
					package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
					signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: data.paySign, // 支付签名
					success: function(res) {
						callback(1,res)
					},
					fail: function(res) {
						callback(0,res)
					},
					cancel: function(res) {
						that.tools.toast('取消支付')
						// callback(res)
					},
					// complete:function(res){
					//     console.log(res)
					// }
				});
			});
		});
	}
}
