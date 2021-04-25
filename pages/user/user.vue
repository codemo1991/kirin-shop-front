<template>
	<view class="container">

		<view class="user-section">
			<image class="bg" src="/static/group_detail_bg.png"></image>
			<view class="user-info-box" @tap="navToLogin('/pages/public/login',1)">
				<view class="portrait-box">
					<image class="portrait" :src='!headImg?"/static/missing-face.png":headImg'></image>
				</view>
				<view class="info-box">
					<text class="username">{{accountName || '点击登录'}}</text>
				</view>
			</view>
			<view class="vip-card-box">
				<image class="card-bg" src="" mode=""></image>
				<view class="tit">
					<text class="yticon icon-iLinkapp-"></text>
					熊猫集市
				</view>
				<text class="e-m"></text>
				<text class="e-b"></text>
			</view>
		</view>

		<!-- @touchstart="coverTouchstart" @touchmove="coverTouchmove" @touchend="coverTouchend" -->
		<view class="cover-container" :style="[{
				transform: coverTransform,
				transition: coverTransition
			}]">
			<image class="arc" src="/static/arc.png"></image>

			<view class="notice-box tj-sction" v-if="hasLogin && (!isWxBind || isWxBind === 'N')">
				<view class="notice-detail one-t" style="font-size: 15px;line-height: 25px;">为了账户安全，请绑定微信！</view>
				<button class="bindPhone " style="margin-right: 5px; line-height: 25px;" @tap="bindWx()">去绑定</button>
			</view>

			<view class="notice-box tj-sction" v-if="hasLogin && (!isPhoneBind || isPhoneBind === 'N')">
				<view class="notice-detail one-t" style="font-size: 15px;line-height: 25px;">为了账户安全，请绑定手机！</view>
				<button class="bindPhone " style="margin-right: 5px; line-height: 25px;" @tap="bindPhone()">去绑定</button>
			</view>

			<view class="tj-sction">
				<view class="tj-item">
					<text class="num">{{accountRemain}}</text>
					<text>余额</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>佣金</text>
				</view>
				<view class="tj-item">
					<text class="num">0</text>
					<text>积分</text>
				</view>
			</view>
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>待发货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>配货中</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=5')" hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<!-- <view class="sec-header">
					<text class="yticon icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list">
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105186633&di=c121a29beece4e14269948d990f9e720&imgtype=0&src=http%3A%2F%2Fimg004.hc360.cn%2Fm8%2FM04%2FDE%2FDE%2FwKhQplZ-QteEBvsbAAAAADUkobU751.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105231218&di=09534b9833b5243296630e6d5b728eff&imgtype=0&src=http%3A%2F%2Fimg002.hc360.cn%2Fm1%2FM05%2FD1%2FAC%2FwKhQcFQ3iN2EQTo8AAAAAHQU6_8355.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105320890&di=c743386be51f2c4c0fd4b75754d14f3c&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fhb%2FMTQ1OTg4ODY0MDA3Ny05OTQ4ODY1NDQ%3D.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2691146630,2165926318&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553105443324&di=8141bf13f3f208c61524d67f9bb83942&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ac9a5548d29b0000019ae98e6d98.jpg"
					 mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=191678693,2701202375&fm=26&gp=0.jpg"
					 mode="aspectFill"></image>
				</scroll-view> -->
				<list-cell icon="icon-share" iconColor="#9789f7" title="联系客服" tips="商品咨询/系统注册" @eventClick="copyWx('sad535445345')"></list-cell>
				<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的账单" tips="您的资金流水明细" @eventClick="navTo('/pages/money/waterBill')"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理" tips="收货地址管理" @eventClick="navTo('/pages/address/address')"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="分享" tips="邀请好友更多优惠" v-if="hasLogin" @eventClick="shareFc()"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="去登录" v-if="hasLogin == false" @eventClick="navTo('/pages/public/login',1)"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="我的团员" tips="查看所有团员" v-if="hasLogin == true" @eventClick="navTo('/pages/user/members/members',1)"></list-cell>
				
			</view>
		</view>

		<!-- 图片展示由自己实现 -->
		<QSPopup ref="popup">
			<view class="flex_column">
				<view class="backgroundColor-white padding1vh border_radius_10px">
					<image :src="posterImage || ''" mode="widthFix" class="posterImage"></image>
				</view>
				<view class="flex_row marginTop2vh">
					<button type="primary"  @tap.prevent.stop="saveImage()">保存图片</button>
					<button type="primary"  @tap.prevent.stop="share()">分享图片</button>
				</view>
			</view>
		</QSPopup>
		<!-- 画布 -->
		<view class="hideCanvasView">
			<canvas class="hideCanvas" id="default_PosterCanvasId" canvas-id="default_PosterCanvasId" :style="{width: (poster.width||10) + 'px', height: (poster.height||10) + 'px'}"></canvas>
		</view>

	</view>



</template>
<script>
	import listCell from '@/components/mix-list-cell';
	import commonJs from '@/common/common.js';
	import wechat from '@/common/wechat/wechat';
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js';
	import {
		mapMutations
	} from 'vuex';
	import {
		getSharePoster
	} from '@/js_sdk/QuShe-SharerPoster/QS-SharePoster/QS-SharePoster.js'; //路径自己调整
	import _app from '@/js_sdk/QuShe-SharerPoster/QS-SharePoster/app.js';

	import {
		mapState
	} from 'vuex';
	let startY = 0,
		moveY = 0,
		pageAtTop = true;
	export default {
		components: {
			listCell
		},
		data() {
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				accountName: '请登录',
				accountRemain: 0,
				isWxBind: 'N',
				isPhoneBind: 'N',
				headImg: '',
				refferUrl:'https://www.ricebuy.cn/v1/pages/public/login?referrerId=',

				//---- 以下是分享内容 
				poster: {},
				posterImage: '',
				canvasId: 'default_PosterCanvasId',
				count: 0
				// --- 以上是分享内容
			}
		},
		onLoad(options) {
			this.val = options.devicenumber;
		},
		onShow() {
			if (this.hasLogin) {
				this.loanUserInfo();
			} else {
				this.accountName = '',
					this.accountRemain = 0
			}
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set', 1);
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		computed: {
			...mapState(['hasLogin', 'userinfo'])
		},
		methods: {
			...mapMutations(['login']),
			loanUserInfo() {
				var that = this;
				this.$http.get(this.$httpApi.my.account, {}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.accountName = response.name;
					that.accountRemain = response.remain;
					that.headImg = response.headImg;
					that.isWxBind = response.isWxBind;
					that.isPhoneBind = response.isPhoneBind;
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
				that.refferUrl = that.refferUrl + that.userinfo.userId;
			},
			navToLogin(url, type){
				if(this.hasLogin){
					return;
				}
				this.navTo(url,type);
			},
			
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url, type) {
				if (!this.hasLogin && type !== 1) {
					commonJs.showUnloginModal()
					return
				}
				uni.navigateTo({
					url
				})
			},

			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e) {
				if (pageAtTop === false) {
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e) {
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if (moveDistance < 0) {
					this.moving = false;
					return;
				}
				this.moving = true;
				if (moveDistance >= 80 && moveDistance < 100) {
					moveDistance = 80;
				}

				if (moveDistance > 0 && moveDistance <= 80) {
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend() {
				if (this.moving === false) {
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			bindWx() {
				if (!this.hasLogin) {
					commonJs.showUnloginModal()
					return
				}
				let oUrl = window.location.href;
				let token = wechat.login(oUrl);
			},
			//点击客服微信号码
			copyWx(wxNo) {
				let content = wxNo // 复制内容，必须字符串，数字需要转换为字符串
				const result = h5Copy(content)
				if (result === false) {
					uni.showToast({
						title: '不支持复制',
					})
				} else {
					uni.showToast({
						title: '客服微信号已复制,去微信搜索,添加客服好友吧!',
						icon: 'none',
						duration: 4000
					})
				}
			},
			bindPhone() {
				if (!this.hasLogin) {
					commonJs.showUnloginModal()
					return
				}
				uni.navigateTo({
					url: `/pages/user/phoneBind`
				})
			},

			// 以下为分享内容
			async shareFc() {
				let _this = this;
				try {
					this.count++;
					const d = await getSharePoster({
						_this: _this, //若在组件中使用 必传
						canvasType: '2d',
						type: 'testShareType',
						formData: {
							//访问接口获取背景图携带自定义数据

						},
						posterCanvasId: _this.canvasId, //canvasId
						delayTimeScale: 20, //延时系数
						background: {
							height: 10,
							width: 10
						},
						setCanvasWH({
							bgObj
						}) {
							_this.poster = bgObj
						},
						drawArray({
							bgObj,
							type,
							bgScale,
							setBgObj,
							getBgObj
						}) {
							return [{
									type: 'image',
									id: 'productImage',
									url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-a678ceb86ea5b80fd57cc7fd3ec80b73_1200x500.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621837008&t=160e686dee4be52752f2a64f555c4556',
									dx: 0,
									dy: 0,
									serialNum: 0,
									infoCallBack(imageInfo) {
										let width;
										let height;
										if (imageInfo.width > imageInfo.height) {
											width = imageInfo.width > 700 ? 700 : imageInfo.width;
											height = width / imageInfo.width * imageInfo.height;
										} else {
											height = imageInfo.height > 700 ? 700 : imageInfo.height;
											width = height / imageInfo.height * imageInfo.width;
										}
										if (width < 500) {
											width = 500;
											height = width / imageInfo.width * imageInfo.height;
										}
										let addHeight = height * .3;
										if (addHeight < 150) addHeight = 150;
										if (addHeight > 250) addHeight = 250;
										setBgObj({
											width,
											height: height + addHeight
										});
										return {
											dWidth: width,
											dHeight: height
										}
									}
								},
								{
									type: 'text',
									id: 'productName',
									text: '我是'+_this.accountName,
									color: '#f1505c',
									serialNum: 1,
									allInfoCallback({
										drawArray
									}) {
										const productImage = drawArray.find(item => item.id === 'productImage')
										const addHeight = getBgObj().height - productImage.dHeight;
										return {
											size: getBgObj().width * 0.05,
											lineFeed: {
												maxWidth: getBgObj().width * 0.5,
												lineNum: 1
											},
											dx: getBgObj().width * .05,
											dy: productImage.dHeight + addHeight * .25,
										}
									}
								},
								{
									type: 'text',
									text: '我在熊猫集市淘好物',
									color: '#f1505c',
									serialNum: 2,
									allInfoCallback({
										drawArray
									}) {
										const productImage = drawArray.find(item => item.id === 'productImage')
										const addHeight = getBgObj().height - productImage.dHeight;
										return {
											size: getBgObj().width * 0.05,
											lineFeed: {
												maxWidth: getBgObj().width * 0.5,
												lineNum: 1
											},
											dx: getBgObj().width * .05,
											dy: productImage.dHeight + addHeight * .5,
										}
									}
								},
								{
									type: 'text',
									text: '快来一起省钱吧',
									serialNum: 3,
									color: '#f1505c',
									id: 'text1',
									allInfoCallback({
										drawArray
									}) {
										const productImage = drawArray.find(item => item.id === 'productImage')
										const addHeight = getBgObj().height - productImage.dHeight;
										return {
											size: getBgObj().width * 0.05,
											lineFeed: {
												maxWidth: getBgObj().width * 0.5,
												lineNum: 1
											},
											dx: getBgObj().width * .05,
											dy: productImage.dHeight + addHeight * .75,
										}
									}
								},
								
								{
									type: 'qrcode',
									text: _this.refferUrl,
									serialNum: 5,
									allInfoCallback({
										drawArray
									}) {
										const productImage = drawArray.find(item => item.id === 'productImage')
										const addHeight = getBgObj().height - productImage.dHeight;
										const widthSize = getBgObj().width * .4;
										const heightSize = addHeight;
										const countSize = widthSize > heightSize ? heightSize : widthSize;
										const size = countSize * .9;
										return {
											size: size,
											dx: getBgObj().width - countSize * .95,
											dy: getBgObj().height - countSize * .95
										}
									}
								}
							]
						}
					})
					this.posterImage = d.poster.tempFilePath;
					this.$refs.popup.show();
				} catch (e) {
					_app.hideLoading();
					_app.showToast(JSON.stringify(e));
					console.log(JSON.stringify(e));
				}
			},
			saveImage() {
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.posterImage,
					success(res) {
						_app.showToast('保存成功，快去分享吧');
					},
					fail (res){
						_app.showToast(res);
					}
				})
				
			},
			share() {
				// #ifndef H5
				uni.saveImageToPhotosAlbum({
					filePath: this.poster.finalPath,
					success(res) {
						_app.showToast('海报保存成功，快去分享吧');
					}
				})
			},
			hideQr() {
				this.$refs.popup.hide()
			}
		}
	}
</script>
<style lang='scss'>
	%flex-center {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	%section {
		display: flex;
		justify-content: space-around;
		align-content: center;
		background: #fff;
		border-radius: 10upx;
	}

	.user-section {
		height: 520upx;
		padding: 100upx 30upx 0;
		position: relative;

		.bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			filter: blur(1px);
			opacity: .7;
		}
	}

	.user-info-box {
		height: 180upx;
		display: flex;
		align-items: center;
		position: relative;
		/* z-index: 100; */

		.portrait {
			width: 130upx;
			height: 130upx;
			border: 5upx solid #fff;
			border-radius: 50%;
		}

		.username {
			font-size: $font-lg + 6upx;
			color: $font-color-dark;
			margin-left: 20upx;
		}
	}

	.vip-card-box {
		display: flex;
		flex-direction: column;
		color: #f7d680;
		height: 240upx;
		background: linear-gradient(left, rgba(0, 0, 0, .7), rgba(0, 0, 0, .8));
		border-radius: 16upx 16upx 0 0;
		overflow: hidden;
		position: relative;
		padding: 20upx 24upx;

		.card-bg {
			position: absolute;
			top: 20upx;
			right: 0;
			width: 380upx;
			height: 260upx;
		}

		.b-btn {
			position: absolute;
			right: 20upx;
			top: 16upx;
			width: 132upx;
			height: 40upx;
			text-align: center;
			line-height: 40upx;
			font-size: 22upx;
			color: #36343c;
			border-radius: 20px;
			background: linear-gradient(left, #f9e6af, #ffd465);
			z-index: 1;
		}

		.tit {
			font-size: $font-base+2upx;
			color: #f7d680;
			margin-bottom: 28upx;

			.yticon {
				color: #f6e5a3;
				margin-right: 16upx;
			}
		}

		.e-b {
			font-size: $font-sm;
			color: #d8cba9;
			margin-top: 10upx;
		}
	}

	.cover-container {
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 30upx;
		position: relative;
		background: #f5f5f5;
		padding-bottom: 20upx;

		.arc {
			position: absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
	}

	.tj-sction {
		@extend %section;

		.tj-item {
			@extend %flex-center;
			flex-direction: column;
			height: 140upx;
			font-size: $font-sm;
			color: #75787d;
		}

		.num {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 8upx;
		}
	}

	.order-section {
		@extend %section;
		padding: 28upx 0;
		margin-top: 20upx;

		.order-item {
			@extend %flex-center;
			width: 120upx;
			height: 120upx;
			border-radius: 10upx;
			font-size: $font-sm;
			color: $font-color-dark;
		}

		.yticon {
			font-size: 48upx;
			margin-bottom: 18upx;
			color: #fa436a;
		}

		.icon-shouhoutuikuan {
			font-size: 44upx;
		}
	}

	.history-section {
		padding: 30upx 0 0;
		margin-top: 20upx;
		background: #fff;
		border-radius: 10upx;

		.sec-header {
			display: flex;
			align-items: center;
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
			margin-left: 30upx;

			.yticon {
				font-size: 44upx;
				color: #5eba8f;
				margin-right: 16upx;
				line-height: 40upx;
			}
		}

		.h-list {
			white-space: nowrap;
			padding: 30upx 30upx 0;

			image {
				display: inline-block;
				width: 160upx;
				height: 160upx;
				margin-right: 20upx;
				border-radius: 10upx;
			}
		}
	}

	// 绑定微信公众号
	.notice-box {
		background: rgba(253, 239, 216, 1);
		padding: 5px 35rpx;

		.notice-detail {
			font-size: 24rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(204, 149, 59, 1);
		}

		.bindPhone {
			width: 135rpx;
			height: 52rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			border-radius: 26rpx;
			padding: 0;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}

	/* 以下内容为分享 */
	.hideCanvasView {
		position: relative;
	}

	.hideCanvas {
		position: fixed;
		top: -99999upx;
		left: -99999upx;
		z-index: -99999;
	}

	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.modalView {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: 0;
		outline: 0;
		transform: scale(1.2);
		perspective: 2500upx;
		background: rgba(0, 0, 0, 0.6);
		transition: all .3s ease-in-out;
		pointer-events: none;
		backface-visibility: hidden;
		z-index: 999;
	}

	.modalView.show {
		opacity: 2;
		transform: scale(1);
		pointer-events: auto;
		z-index: 9999;
	}

	.flex_column {
		display: flex;
		flex-direction: column;
	}

	.backgroundColor-white {
		background-color: white;
	}

	.border_radius_10px {
		border-radius: 10px;
	}

	.padding1vh {
		padding: 1vh;
	}

	.posterImage {
		width: 580rpx;
	}

	.flex_row {
		display: flex;
		flex-direction: row;
	}

	.marginTop2vh {
		margin-top: 2vh;
	}
</style>
