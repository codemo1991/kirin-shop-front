<template>
	<view class="app">
		<view class="price-box">
			<text>支付金额</text>
			<text class="price">{{totalPrice}}</text>
		</view>

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(2)">
				<text class="icon yticon icon-weixinzhifu"></text>
				<view class="con">
					<text class="tit">微信支付</text>
					<text></text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<!--<view class="type-item b-b" @click="changePayType(3)">
				<text class="icon yticon icon-alipay"></text>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 3' />
					</radio>
				</label>
			</view> -->
			<view class="type-item" @click="changePayType(1)">
				<text class="icon yticon icon-erjiye-yucunkuan"></text>
				<view class="con">
					<text class="tit">预存款支付</text>
					<text>可用余额 ¥{{account}}</text>
				</view>
				<label class="radio">
					<radio value="" color="#fa436a" :checked='payType == 1' />
					</radio>
				</label>
			</view>
		</view>

		<text class="mix-btn" @click="confirm">确认支付</text>
	</view>
</template>

<script>
	import Wechat from '@/common/wechat/sdk';
	
	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {},
				goodData: [],
				totalPrice: 0,
				orderData: {},
				account: 0,
				addressData: {},
				toid: ''
			};
		},
		computed: {

		},
		onLoad(option) {
			this.loadAccountBalance();
			let data = JSON.parse(option.data).orderTemp;
			this.goodData = data.goodsData;
			this.totalPrice = data.totalPrice;
			this.addressData = data.addressData;
			this.orderData = data;
			this.orderType = data.orderType;
			this.toid = data.toid;
		},

		methods: {
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			//确认支付
			confirm: async function() {
				var that = this;
				var orderInfo = {};
				let goodDetails = [];
				let nums = [];
				let orderType = this.orderType;
				that.goodData.forEach(item => {
					goodDetails.push(item.goodDetailId),
						nums.push(item.num)
				});

				orderInfo["orderType"] = orderType;
				orderInfo["goodDetailIds"] = goodDetails;
				orderInfo["nums"] = nums;
				orderInfo["addressId"] = this.addressData.id;
				orderInfo["toid"] = this.toid;

				if (this.payType == 1) {
					uni.showModal({
						title: '提示',
						content: '确认余额支付？',
						success: function(res) {
							that.$http.post(that.$httpApi.order.makeOrder, orderInfo).
							then(function(response) {
								uni.redirectTo({
									url: '/pages/money/paySuccess'
								})
							}).catch(function(error) {
								//这里只会在接口是失败状态返回，不需要去处理错误提示
							});
						}
					});
				} else if (this.payType == 2) {
					uni.showModal({
						title: '提示',
						content: '确认微信支付？',
						success: function(res) {
							that.$http.post(that.$httpApi.pay.pay, orderInfo).
							then(function(response) {
								Wechat.wxpay(response,function(rlt, res){
									if(rlt == 1){
										uni.redirectTo({
											url: '/pages/money/paySuccess'
										})
									} else{
										uni.redirectTo({
											url: '/pages/money/payFail'
										})
									}
								})
							}).catch(function(error) {
								//这里只会在接口是失败状态返回，不需要去处理错误提示
							});
						}
					});
				}

			},
			loadAccountBalance() {
				var that = this;
				this.$http.get(this.$httpApi.user.account, {}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.account = response.remain;
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			}
		}
	}
</script>

<style lang='scss'>
	.app {
		width: 100%;
	}

	.price-box {
		background-color: #fff;
		height: 265upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price {
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;

			&:before {
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20upx;
		background-color: #fff;
		padding-left: 60upx;

		.type-item {
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position: relative;
		}

		.icon {
			width: 100upx;
			font-size: 52upx;
		}

		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}

		.icon-weixinzhifu {
			color: #36cb59;
		}

		.icon-alipay {
			color: #01aaef;
		}

		.tit {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}

		.con {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}

	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 630upx;
		height: 80upx;
		margin: 80upx auto 30upx;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
