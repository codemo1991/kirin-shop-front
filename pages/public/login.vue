<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				欢迎加入灵犀严选！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
				</view>
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="mobile" value="" placeholder="8-18位不含特殊字符的数字、字母组合" placeholder-class="input-empty" maxlength="20"
					 password data-key="password" @input="inputChange" @confirm="toLogin" />
				</view>
			</view>
			<button class="confirm-btn" @click="toLogin" :disabled="logining">登录</button>
			<view class="forget-section">
				忘记密码?
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
		
		<view class="register-section">
			还没有账号?
			<text @click="toRegist">去注册</text>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex';
	import Wechat from '@/common/wechat/wechat';

	export default {
		data() {
			return {
				mobile: '',
				password: '',
				logining: false
			}
		},
		onLoad(options) {
			let code = options.code;
			if(code){
				this.$api.msg(code)
				var that = this;
				this.$http.post(this.$httpApi.user.login, {
					"code": code
				}).then(function(response) {
					//这里只会在接口是成功状态返回
					
					uni.switchTab({
						url: `/pages/index/index`
					})
				}).catch(function(error) {
					console.log(error);
				});
			}
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
				this.$api.msg('公测阶段，请联系管理员开通账号');
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
				this.$api.msg("微信登陆暂时只对公测用户开发，请联系客服");
				return;
				let wechat = new Wechat();
				let token = await wechat.login();
				
			}
		},

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 115px;
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
