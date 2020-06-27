<template>
	<view>
		<view class="goods-section">
			<view class="g-header b-b">
				<text class="yticon icon-comment"></text>
				<text class="name">商品清单</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item" v-for="(item, index) in goodData" :key="item.goodDetailId">
				<image :src="'http://yuns.ricebuy.cn/'+item.imageUrl"></image>
				<view class="right">
					<text class="title clamp">{{item.goodName}}</text>
					<text class="spec">{{item.goodNorm}}</text>
					<view class="price-box">
						<text class="price">￥{{item.price}}</text>
						<text class="number">x {{item.num}}</text>
						<text v-if="item.deliveryFee > 0" style="padding-left: 20px;font-size: small;color: #CF2D28;">运费{{item.deliveryFee}}元</text>
					</view>
				</view>
				<uni-tag :text='statusMap[item.orderGoodStatus]' :type="statusBackgroupMap[item.orderGoodStatus]" :circle="false"
				 size="small"></uni-tag>
			</view>
		</view>
		<!-- 金额明细 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">商品金额(含运费)</text>
				<text class="cell-tip">￥{{totalPrice}}</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">运费</text>
				<text v-if="totalDeliveryFee === 0" class="cell-tip">免运费</text>
				<text v-else class="cell-tip" style="color: #CF2D28;">￥{{totalDeliveryFee}}</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">收货地址</text>
				<text class="cell-tip" style="width: 270px; line-height: normal;">{{receiver}} {{phone}} \n {{province}} {{city}} {{zone}} \n {{address}}</text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">备注</text>
				<text class="cell-tip"></text>
			</view>
			<view class="yt-list-cell b-b">
				<text class="cell-tit clamp">快递单号</text>
				<text class="cell-tip" style="width: 200px; line-height: normal;">
					<text v-for="(item, index) in goodData" :key="item.goodDetailId">
						<text v-if="item.deliveryNo">{{item.deliveryNo}} \n</text>
					</text>
				</text>
				<uni-tag v-if="deliveryNos" text='复制单号' type='error' :circle="true" inverted="true" size="small" style="width: 70px;float: right;" @click="copyOrderNo(deliveryNos)"></uni-tag>
			</view>
		</view>

		<!-- 底部 -->
		<view class="footer">
			<view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">{{totalPrice}}</text>
			</view>
			<text v-if="orderStatus == 0" class="submit" @click="cancelOrder(orderId)">撤单</text>
			<text v-if="orderStatus == 1" class="submit" @click="submitOp(orderId,2)">申请撤单</text>
			<text v-if="orderStatus == 1" class="submit-quick" @click="submitOp(orderId,1)">催单</text>
			<text v-if="orderStatus == 3 || orderStatus == 5" class="submit-unable">已关闭</text>
			<text v-if="orderStatus == 4" class="submit-unable">已完成</text>
		</view>
	</view>
</template>

<script>
	import uniTag from "@/components/uni-tag/uni-tag.vue"
	import h5Copy from '@/js_sdk/junyi-h5-copy/junyi-h5-copy/junyi-h5-copy.js'

	export default {
		components: {
			uniTag
		},
		data() {
			return {
				goodData: [],
				totalPrice: 0,
				totalDeliveryFee: 0,
				orderId: 0,
				province: '',
				city: '',
				zone: '',
				address: '',
				receiver: '',
				phone: '',
				orderStatus: null,
				statusMap: {
					1: '待发货',
					2: '待补发',
					3: '申请退款',
					4: '已退款',
					5: '已发货'
				},
				statusBackgroupMap: {
					1: 'default',
					2: 'warning',
					3: 'error',
					4: 'error',
					5: 'success'
				},
				deliveryNos:''
			}
		},
		onLoad(option) {
			this.orderId = parseInt(option.orderId)
			this.loadOrder()
		},
		methods: {
			//取消订单
			cancelOrder(item) {
				var that = this
				uni.showModal({
					title: '温馨提示',
					content: '确定需要申请撤单么？',
					confirmText: "确定",
					cancelText: "取消",
					success: res2 => {
						if (res2.confirm) {
							const reqData = {
								orderId: item
							}
							this.$http.post(this.$httpApi.order.cancelOrder, reqData).
							then(function(response) {
								that.$api.msg("取消订单成功")
								setTimeout(() => {
									that.loadOrder()
								}, 600)
							})
						}
					}
				});
			},
			stopPrevent() {},
			loadOrder() {
				var that = this;
				this.$http.get(this.$httpApi.order.showOrderDetail, {
					"orderId": this.orderId
				}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.goodData = response.orderGoodInfos;
					that.totalPrice = response.amount;
					that.totalDeliveryFee = response.totalDeliveryFee;
					that.province = response.province;
					that.city = response.city;
					that.zone = response.area;
					that.address = response.detailarea;
					that.receiver = response.receiver;
					that.phone = response.phone;
					that.orderStatus = response.orderStatus;
					for (let k in that.goodData) {
						let deliveryNo = that.goodData[k].deliveryNo; 
						if(deliveryNo){
							deliveryNo += '\n'
							that.deliveryNos += deliveryNo
						}
						console.log(that.deliveryNos)
					}
					
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					that.mescroll.endErr();
				});
			},
			submitOp(orderId, type) {
				let opType = type == 2 ? '申请撤单' : '催单';
				var that = this;
				uni.showModal({
					title: '温馨提示',
					content: '确定需要' + opType + '么？',
					confirmText: "确定",
					cancelText: "取消",
					success: res2 => {
						if (res2.confirm) {
							let reqData = {
								orderId: orderId,
								opType: type
							}
							this.$http.get(this.$httpApi.order.orderOperate, reqData).
							then(function(response) {
								that.$api.msg("申请成功");
							}).catch(function(error) {
								//这里只会在接口是失败状态返回，不需要去处理错误提示
							});
						}
					}
				});
			},
			copyOrderNo(deliveryNos){
				let content = deliveryNos // 复制内容，必须字符串，数字需要转换为字符串
				const result = h5Copy(content)
				if (result === false) {
					uni.showToast({
						title: '不支持',
					})
				} else {
					uni.showToast({
						title: '快递号复制成功',
						icon: 'none'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}

	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: $font-color-light;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.goods-section {
		margin-top: 16upx;
		background: #fff;
		padding-bottom: 1px;

		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}

		.logo {
			display: block;
			width: 50upx;
			height: 50upx;
			border-radius: 100px;
		}

		.name {
			font-size: 30upx;
			color: $font-color-base;
			margin-left: 24upx;
		}

		.g-item {
			display: flex;
			margin: 20upx 30upx;

			image {
				flex-shrink: 0;
				display: block;
				width: 140upx;
				height: 140upx;
				border-radius: 4upx;
			}

			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}

			.title {
				font-size: 30upx;
				color: $font-color-dark;
			}

			.spec {
				font-size: 26upx;
				color: $font-color-light;
			}

			.price-box {
				display: flex;
				align-items: center;
				font-size: 32upx;
				color: $font-color-dark;
				padding-top: 10upx;

				.price {
					margin-bottom: 4upx;
				}

				.number {
					font-size: 26upx;
					color: $font-color-base;
					margin-left: 20upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}

	.yt-list {
		margin-top: 16upx;
		background: #fff;
	}

	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		.cell-icon {
			height: 32upx;
			width: 32upx;
			font-size: 22upx;
			color: #fff;
			text-align: center;
			line-height: 32upx;
			background: #f85e52;
			border-radius: 4upx;
			margin-right: 12upx;

			&.hb {
				background: #ffaa0e;
			}

			&.lpk {
				background: #3ab54a;
			}

		}

		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}

		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: $font-color-light;
			margin-right: 10upx;
		}

		.cell-tip {
			font-size: 26upx;
			color: $font-color-dark;

			&.disabled {
				color: $font-color-light;
			}

			&.active {
				color: $base-color;
			}

			&.red {
				color: $base-color;
			}
		}

		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}

	/* 支付列表 */
	.pay-list {
		padding-left: 40upx;
		margin-top: 16upx;
		background: #fff;

		.pay-item {
			display: flex;
			align-items: center;
			padding-right: 20upx;
			line-height: 1;
			height: 110upx;
			position: relative;
		}

		.icon-weixinzhifu {
			width: 80upx;
			font-size: 40upx;
			color: #6BCC03;
		}

		.icon-alipay {
			width: 80upx;
			font-size: 40upx;
			color: #06B4FD;
		}

		.icon-xuanzhong2 {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60upx;
			height: 60upx;
			font-size: 40upx;
			color: $base-color;
		}

		.tit {
			font-size: 32upx;
			color: $font-color-dark;
			flex: 1;
		}
	}

	.footer {
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 90upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, .1);

		.price-content {
			padding-left: 30upx;
		}

		.price-tip {
			color: $base-color;
			margin-left: 8upx;
		}

		.price {
			font-size: 36upx;
			color: $base-color;
		}

		.submit {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: $base-color;
		}

		.submit-quick {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: #4CD964;
		}

		.submit-unable {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 280upx;
			height: 100%;
			color: #fff;
			font-size: 32upx;
			background-color: #C0C4CC;
		}
	}

	/* 优惠券面板 */
	.mask {
		display: flex;
		align-items: flex-end;
		position: fixed;
		left: 0;
		top: var(--window-top);
		bottom: 0;
		width: 100%;
		background: rgba(0, 0, 0, 0);
		z-index: 9995;
		transition: .3s;

		.mask-content {
			width: 100%;
			min-height: 30vh;
			max-height: 70vh;
			background: #f3f3f3;
			transform: translateY(100%);
			transition: .3s;
			overflow-y: scroll;
		}

		&.none {
			display: none;
		}

		&.show {
			background: rgba(0, 0, 0, .4);

			.mask-content {
				transform: translateY(0);
			}
		}
	}

	/* 优惠券列表 */
	.coupon-item {
		display: flex;
		flex-direction: column;
		margin: 20upx 24upx;
		background: #fff;

		.con {
			display: flex;
			align-items: center;
			position: relative;
			height: 120upx;
			padding: 0 30upx;

			&:after {
				position: absolute;
				left: 0;
				bottom: 0;
				content: '';
				width: 100%;
				height: 0;
				border-bottom: 1px dashed #f3f3f3;
				transform: scaleY(50%);
			}
		}

		.left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			flex: 1;
			overflow: hidden;
			height: 100upx;
		}

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			margin-bottom: 10upx;
		}

		.time {
			font-size: 24upx;
			color: $font-color-light;
		}

		.right {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 26upx;
			color: $font-color-base;
			height: 100upx;
		}

		.price {
			font-size: 44upx;
			color: $base-color;

			&:before {
				content: '￥';
				font-size: 34upx;
			}
		}

		.tips {
			font-size: 24upx;
			color: $font-color-light;
			line-height: 60upx;
			padding-left: 30upx;
		}

		.circle {
			position: absolute;
			left: -6upx;
			bottom: -10upx;
			z-index: 10;
			width: 20upx;
			height: 20upx;
			background: #f3f3f3;
			border-radius: 100px;

			&.r {
				left: auto;
				right: -6upx;
			}
		}
	}
</style>
