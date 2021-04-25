<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎加入云商乐购！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="mobile" value="" placeholder="6-12位不含特殊字符的数字或字母组合" placeholder-class="input-empty" maxlength="20"
					 password data-key="password" @input="inputChange" @confirm="toLogin" />
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<!-- <view class="forget-section">
				忘记密码?
			</view> -->
			<view class="forget-section">
				还没有账号?
				<text @click="toRegist">去注册</text>
			</view>
		</view>

		<view class="login-footer">
			<view class="footer-tip flex">其他登录方式</view>
			<view class="footer-other flex">
				<view class="other-list">
					<image src="../../static/index/weixin.png" mode="aspectFill" @tap="wxLogin()"></image>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	import Wechat from '@/common/wechat/wechat';
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'
	import {
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				mobile: '',
				password: '',
				logining: false,
				referrerId: ''
			}
		},
		onLoad(options) {
			if (this.hasLogin) {
				uni.switchTab({
					url: `/pages/user/user`
				})
				return;
			}
			let code = options.code;
			this.referrerId = options.referrerId;

			if (code) {
				var that = this;
				this.$http.post(this.$httpApi.user.wxLogin, {
					"code": code,
					"referrerId": that.referrerId
				}).then(function(response) {
					//这里只会在接口是成功状态返回
					that.$api.msg("登录成功!");
					that.login(response);
					uni.switchTab({
						url: `/pages/user/user`
					})
				}).catch(function(error) {
					that.$api.msg("登录失败!");
				});
			}
		},
		computed: {
			...mapState(['hasLogin', 'userinfo'])
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e) {
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack() {
				uni.navigateBack();
			},
			toRegist() {
				uni.navigateTo({
					url: `/pages/public/register`
				})
			},
			async toLogin() {
				this.logining = true;

				var that = this;
				this.$http.post(this.$httpApi.user.login, {
					"phone": that.mobile,
					"password": that.password
				}, {
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				}).then(function(response) {
					//这里只会在接口是成功状态返回
					that.login(response)
					uni.switchTab({
						url: `/pages/index/index`
					})
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					console.log(error);
				});
				this.logining = false;
			},
			async wxLogin() {
				// this.$api.msg("微信登陆暂时只对公测用户开开放，请联系客服");
				// return;
				await Wechat.login(this.referrerId);

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
			}
		},

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 45px;
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #fff;
	}

	.wrapper {
		position: relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}

	.back-btn {
		position: absolute;
		left: 40upx;
		z-index: 9999;
		padding-top: var(--status-bar-height);
		top: 40upx;
		font-size: 40upx;
		color: $font-color-dark;
	}

	.left-top-sign {
		font-size: 120upx;
		color: $page-color-base;
		position: relative;
		left: -16upx;
	}

	.right-top-sign {
		position: absolute;
		top: 80upx;
		right: -30upx;
		z-index: 95;

		&:before,
		&:after {
			display: block;
			content: "";
			width: 400upx;
			height: 80upx;
			background: #b4f3e2;
		}

		&:before {
			transform: rotate(50deg);
			border-radius: 0 50px 0 0;
		}

		&:after {
			position: absolute;
			right: -198upx;
			top: 0;
			transform: rotate(-50deg);
			border-radius: 50px 0 0 0;
			/* background: pink; */
		}
	}

	.left-bottom-sign {
		position: absolute;
		left: -270upx;
		bottom: -320upx;
		border: 100upx solid #d0d1fd;
		border-radius: 50%;
		padding: 180upx;
	}

	.welcome {
		position: relative;
		left: 50upx;
		top: -90upx;
		font-size: 46upx;
		color: #555;
		text-shadow: 1px 0px 1px rgba(0, 0, 0, .3);
	}

	.input-content {
		padding: 0 60upx;
	}

	.input-item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		padding: 0 30upx;
		background: $page-color-light;
		height: 120upx;
		border-radius: 4px;
		margin-bottom: 50upx;

		&:last-child {
			margin-bottom: 0;
		}

		.tit {
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}

		input {
			height: 60upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
	}

	.confirm-btn {
		width: 630upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: $uni-color-primary;
		color: #fff;
		font-size: $font-lg;

		&:after {
			border-radius: 100px;
		}
	}

	.forget-section {
		font-size: $font-sm+2upx;
		color: $font-color-spec;
		text-align: center;
		margin-top: 40upx;
	}

	.register-section {
		position: absolute;
		left: 0;
		bottom: 50upx;
		width: 100%;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		text-align: center;

		text {
			color: $font-color-spec;
			margin-left: 10upx;
		}
	}

	.login-footer {
		padding: 0 70upx;

		.footer-tip {
			align-items: center;
			font-size: 24upx;
			color: #999999;
			text-align: center;

			&:before {
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
				margin-right: 30upx;
			}

			&:after {
				margin-left: 30upx;
				flex: 1;
				content: '';
				height: 2upx;
				background: #D0D0D0;
			}

		}

		.footer-other {
			padding: 40upx 0 100upx 0;
			justify-content: center;

			.other-list {
				width: 80upx;
				height: 80upx;
				margin: 0 auto;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
