<template>
	<view class="content">
		<!-- 系统自带的下拉刷新，只能配合mescroll-body使用， 在mescroll-uni中无效 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback"
		 @emptyclick="emptyClick">
			<!-- 菜单 -->
			<app-tabs v-model="tabIndex" :tabs="tabs" @change="tabChange" ref="appTab"></app-tabs>
			<!-- 数据列表 -->

			<view v-for="(item,index) in tabItem" :key="index" class="order-item">
				<view class="i-top b-b">
					<text class="time">订单号：{{item.orderNo}}</text>
					<text class="state" style="color: red">{{status[item.orderStatus]}}</text>
					<text v-if="item.state===9" class="del-btn yticon icon-iconfontshanchu1" @click="deleteOrder(index)"></text>
				</view>

				<scroll-view class="goods-box" scroll-x @click="navTo('/pages/order/orderDetail?orderId='+item.oid)">
					<view v-for="(goodsItem, goodsIndex) in item.orderGoodInfos" :key="goodsIndex" class="goods-item">
						<image class="goods-img" :src="'http://yuns.ricebuy.cn/'+goodsItem.imageUrl" mode="aspectFill"></image>
					</view>
				</scroll-view>

				<view class="b-b price-box">
					<text class="order-time">{{item.orderTime}}</text>
					共
					<text class="num">{{item.totalNum}}</text>
					件商品 实付款
					<text class="price">{{item.amount}}</text>
				</view>

				<view class="action-box b-t" v-if="item.orderStatus == 0">
					<button class="action-btn" @click="cancelOrder(item,index)">申请撤单</button>
				</view>
			</view>
		</mescroll-body>

	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	import AppTabs from "@/components/app-tabs.vue";
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件，内部已注册onPullDownRefresh)
		components: {
			AppTabs
		},
		data() {
			return {
				downOption: {
					native: true // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
				},
				upOption: {
					noMoreSize: 4,
					empty: {
						tip: '~ 暂时没有订单 ~',
						btnText: '去购物'
					},
					page: {
						num: 0,
						size: 20,
						time: null
					},
					textNoMore: "~别再拉了，我是有底线的~"
				},
				goods: [], //列表数据
				tabs: ['全部', '待发货','配货中', '已发货', '已完成', "已撤单"],
				status: {
					0: "待发货",
					1: "配货中",
					2: "申请退款",
					3: "已关闭",
					4: "已完成"
				},
				tabCodes: ['11', '0', '1', '3', '4', "2"],
				tabIndex: 0, // tab下标,
				tabItem: [],
				tabIndexSel: 0,
			};
		},
		mounted: function() {
			let i = parseInt(this.tabIndexSel);
			this.$refs.appTab.tabClick(i);
		},
		onLoad(options) {
			let state = options.state;
			if (state) {
				this.tabIndexSel = state;
			}
		},

		methods: {
			navTo(url) {
				// if (!this.hasLogin) {
				// 	url = '/pages/public/login';
				// }
				uni.navigateTo({
					url
				})
			},
			//删除订单
			deleteOrder(index) {
				uni.showLoading({
					title: '请稍后'
				})
				setTimeout(() => {
					this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
					uni.hideLoading();
				}, 600)
			},
			//取消订单
			cancelOrder(item,index) {
				var that = this
				uni.showModal({
					title: '温馨提示',
					content: '确定需要申请撤单么？',
					confirmText: "确定",
					cancelText: "取消",
					success: res2 => {
						if (res2.confirm) {
							const reqData = {
								orderId:item.oid
							}
							this.$http.post(this.$httpApi.order.cancelOrder, reqData).
							then(function(response) {
								that.$api.msg("取消订单成功")
								that.tabItem[index].orderStatus = 3
								
							})
						}
					}
				});
			},
			upCallback(page) {
				let type = this.tabCodes[this.tabIndex];
				var that = this;
				let orderReq = {
					"type": type,
					"pageNum": page.num,
					"pageSize": page.size
				}
				this.$http.get(this.$httpApi.order.showOrder, orderReq).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.mescroll.endByPage(response.pageSize, response.totalPage);
					if (page.num == 1) that.tabItem = []; //如果是第一页需手动制空列表
					that.tabItem = that.tabItem.concat(response.list); //追加新数据
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					this.mescroll.endErr();
				});
				// apiSearch(page.num, page.size, keyword).then(curPageData=>{
				// 	//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				// 	this.mescroll.endSuccess(curPageData.length);
				// 	//设置列表数据
				// 	if(page.num == 1) this.goods = []; //如果是第一页需手动制空列表
				// 	this.goods=this.goods.concat(curPageData); //追加新数据
				// }).catch(()=>{
				// 	//联网失败, 结束加载
				// 	this.mescroll.endErr();
				// })
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			},

			// 切换菜单
			tabChange() {
				this.goods = [] // 先置空列表,显示加载进度
				this.mescroll.resetUpScroll() // 再刷新列表数据
			}
		},
	}
</script>

<style lang="scss">
	page,
	.content {
		background: $page-color-base;
		height: 100%;
	}

	.swiper-box {
		height: calc(100% - 40px);
	}

	.list-scroll-content {
		height: 100%;
	}

	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;
		z-index: 10;

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			color: $font-color-dark;
			position: relative;

			&.current {
				color: $base-color;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid $base-color;
				}
			}
		}
	}

	.uni-swiper-item {
		height: auto;
	}

	.order-item {
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;

		.i-top {
			display: flex;
			align-items: center;
			height: 80upx;
			padding-right: 30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;

			.time {
				flex: 1;
			}

			.state {
				color: $base-color;
			}

			.del-btn {
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;

				&:after {
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}

		/* 多条商品 */
		.goods-box {
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;

			.goods-item {
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}

			.goods-img {
				display: block;
				width: 100%;
				height: 100%;
			}
		}

		/* 单条商品 */
		.goods-box-single {
			display: flex;
			padding: 20upx 0;

			.goods-img {
				display: block;
				width: 120upx;
				height: 120upx;
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;

				.title {
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}

				.attr-box {
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}

				.price {
					font-size: $font-base + 2upx;
					color: red($color: #000000);

					&:before {
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 8upx;
					}
				}
			}
		}

		.price-box {
			// display: flex;
			// justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 0upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.order-time {
				padding-right: 100upx;
				;
			}

			.num {
				margin: 0 8upx;
				color: $font-color-dark;
			}

			.price {
				font-size: $font-lg;
				color: #E04B28;

				&:before {
					content: '￥';
					font-size: $font-sm;
					margin: 0 2upx 0 8upx;
				}
			}
		}

		.action-box {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}

		.action-btn {
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;

			&:after {
				border-radius: 100px;
			}

			&.recom {
				background: #fff9f9;
				color: $base-color;

				&:after {
					border-color: #f7bcc8;
				}
			}
		}
	}


	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}

	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}

	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}

	.uni-load-more__img>view {
		position: absolute
	}

	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}

	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}

	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}

	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}

	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}

	.load2 {
		transform: rotate(30deg)
	}

	.load3 {
		transform: rotate(60deg)
	}

	.load1 view:nth-child(1) {
		animation-delay: 0s
	}

	.load2 view:nth-child(1) {
		animation-delay: .13s
	}

	.load3 view:nth-child(1) {
		animation-delay: .26s
	}

	.load1 view:nth-child(2) {
		animation-delay: .39s
	}

	.load2 view:nth-child(2) {
		animation-delay: .52s
	}

	.load3 view:nth-child(2) {
		animation-delay: .65s
	}

	.load1 view:nth-child(3) {
		animation-delay: .78s
	}

	.load2 view:nth-child(3) {
		animation-delay: .91s
	}

	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}

	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}

	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}

	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}

	@-webkit-keyframes load {
		0% {
			opacity: 1
		}

		100% {
			opacity: .2
		}
	}
</style>
