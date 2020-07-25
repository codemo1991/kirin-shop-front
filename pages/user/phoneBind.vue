<template>
	<view class="container">
		<view class="left-bottom-sign"></view>
		<view class="back-btn yticon icon-zuojiantou-up" @click="navBack"></view>
		<view class="right-top-sign"></view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="left-top-sign">LOGIN</view>
			<view class="welcome">
				绑定手机号码！
			</view>
			<view class="input-content">
				<view class="input-item">
					<text class="tit">手机号码</text>
					<input type="number" :value="mobile" placeholder="请输入手机号码" maxlength="11" data-key="mobile" @input="inputChange" />
				</view>
				<view class="input-item">
					<text class="tit">手机验证码</text>
					<view style="display: flex;">
						<input type="digit" :value="smsCode" placeholder="请输入手机验证码" placeholder-class="input-empty" maxlength="6" data-key="smsCode" @input="inputChange" />
						 <button style="width: 100px;height: 30px; font-size: 10px; line-height: 30px;position:absolute;right: 40px;" :class="{active : !disableCodeBtn}" :disabled="disableCodeBtn" @tap="sendCode">{{codeBtn.text}}</button>
					 </view>
				</view>
				
				<view class="input-item">
					<text class="tit">密码</text>
					<input type="password" :value="password" placeholder="6-12位不含特殊字符的数字或字母组合" placeholder-class="input-empty" maxlength="20"
					 password data-key="password" @input="inputChange" @confirm="toLogin" />
				</view>
			</view>
			<button class="confirm-btn" @click="toRegist" :disabled="logining">绑定手机号码</button>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex';
	import Wechat from '@/common/wechat/wechat';
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'

	export default {
		data() {
			return {
				mobile: '',
				password: '',
				smsCode: '',
				logining: false,
				seconds: 60,
				codeBtn: {
					text: '获取验证码',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		onLoad(options) {
			
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
				if(!this.mobile){
					this.$api.msg("手机号码不能为空");
					return;
				}
				
				if(!this.password){
					this.$api.msg("密码不能为空");
					return;
				}
				console.log(this.smsCode)
				if(!this.smsCode){
					this.$api.msg("验证码不能为空");
					return;
				}

				this.logining = true;
				var that = this;
				this.$http.post(this.$httpApi.my.phoneBind, {
					"phone": that.mobile,
					"password": that.password,
					"code":that.smsCode
				}, {
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					}
				}).then(function(response) {
					//这里只会在接口是成功状态返回
					that.$api.msg("恭喜你！绑定成功!");
					//这里只会在接口是成功状态返回
					uni.switchTab({
						url: `/pages/user/user`
					})
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					console.log(error);
				});
				this.logining = false;
			},
			sendCode: function () {
				this.codeBtn.waitingCode = true;
				
				if(!this.mobile){
					this.codeBtn.waitingCode = false;
					this.$api.msg("电话号码不能为空");
					return;
				}
				
				if(this.codeBtn.waitingCode){
					var that = this;
					this.$http.post(this.$httpApi.user.sendSms, {
						"phone": that.mobile,
					}).then(function(response) {
						//这里只会在接口是成功状态返回
						that.$api.msg("获取验证码成功，请留意短信")
						that.codeBtn.count = that.seconds;
						that.codeBtn.text = that.codeBtn.count + 's';
						let countdown = setInterval( () => {
							that.codeBtn.count--;
							that.codeBtn.text = that.codeBtn.count + 's';
							if( that.codeBtn.count < 0 ){
								clearInterval(countdown);
								that.codeBtn.text = '重新发送';
								that.codeBtn.waitingCode = false;
							}
						},1000);
					}).catch(function(error) {
						//这里只会在接口是失败状态返回，不需要去处理错误提示
					});
					this.codeBtn.waitingCode = false;
				}
			},
		},
		computed: {
			disableCodeBtn: function (){
				return this.codeBtn.waitingCode;
			} 
		}

	}
</script>

<style lang='scss'>
	page {
		background: #fff;
	}

	.container {
		padding-top: 55px;
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
