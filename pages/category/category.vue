<template>
	<view class="container">

		<!-- 地址 -->
		<view class="top--panel">
			<view @click="navTo('/pages/address/address?source=1')" class="address-section">
				<view v-if="!addressData.name" class="order-content">
					<text class="yticon icon-shouhuodizhi"></text>
					<view class="cen">
						<view><text class="address">请选择收货地址</text></view>
					</view>
					<text class="yticon icon-you"></text>
				</view>
				<view v-else class="order-content">
					<text class="yticon icon-shouhuodizhi"></text>
					<view class="cen">
						<view class="top">
							<text class="name">{{addressData.name}}</text>
							<text class="mobile">{{addressData.phone}}</text>
							<input v-show="false" :value="addressData.id" />
						</view>
						<text class="address">{{addressData.province}} {{addressData.city}} {{addressData.zone}} {{addressData.address}}</text>
					</view>
					<text class="yticon icon-you"></text>
				</view>
				<image class="a-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAFCAYAAAAaAWmiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Rjk3RjkzMjM2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Rjk3RjkzMjQ2NzMxMTFFOUI4RkU4OEZGMDcxQzgzOEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOTdGOTMyMTY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOTdGOTMyMjY3MzExMUU5QjhGRTg4RkYwNzFDODM4RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrEOZlQAAAiuSURBVHjazJp7bFvV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"></image>
			</view>
		</view>

		<!-- 滚动区域 -->
		<view class="scroll-panel" id="scroll-panel">
			<view class="list-box">
				<view class="left">
					<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" :scroll-into-view="leftIntoView"
					 :scroll-with-animation="true">
						<view class="item" v-for="(item,index) in leftArray" :key="index" :class="{ 'active':index==leftIndex }" :id="'left-'+index"
						 :data-index="index" @tap="leftTap">{{item}}</view>
					</scroll-view>
				</view>
				<view class="main">
					<swiper class="swiper" :style="{ 'height':scrollHeight }" :current="leftIndex" @change="swiperChange" vertical="true"
					 duration="300">
						<swiper-item v-for="(item,index) in mainArray" :key="index">
							<scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
								<view class="item" v-for="(item1,index1) in item.list" :key="index1">
									<!-- <view class="title">
										<view>{{item.title}}</view>
									</view> -->
									<uni-collapse accordion="true">
										<uni-collapse-item :title="item1.name">
											<view class="goods" v-for="(item2,index2) in item1.goodDetails" :key="index2">
												<view style="width: 200px;overflow: hidden;	word-wrap: break-word; word-break: normal;">
													<view>{{item2.name}}</view>
													<view class="describe">单价：{{item2.price}}</view>
													<view class="money">库存：{{item2.store}}</view>
												</view>
												<view>
													<uni-number-box class="step" :min="0" :max="item2.store" :value="item2.num" :index="index2" @change="numberChange($event,item2.goodDetailId)"></uni-number-box>
												</view>
											</view>
										</uni-collapse-item>
									</uni-collapse>

								</view>
							</scroll-view>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<!-- 底部菜单栏 -->
		<view class="bottom-panel">
			<view class="action-section">
				<view class="total-box">
					<text class="price">合计：¥{{total}}</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="showOrder">去结算</button>
			</view>
		</view>


		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view>
					<text class="yticon icon-gouwuche" style="padding: 0px 5px;"></text>商品清单
					<text class="yticon" style="float: right;">合计：¥{{total}}元 </text>
				</view>
				<scroll-view scroll-y="true" class="scroll-Y" style="height: 40vh;">
					<uni-list v-for="(value, key) in orderTemp" :key="key">
						<uni-list-item :show-badge="true" :badge-text="value.totalPirce" :title="value.name" :note="value.desc"
						 :show-arrow="false"></uni-list-item>
					</uni-list>
				</scroll-view>

				<button class="btn" @click="makeOrder">确认下单</button>
			</view>
		</view>

	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue';
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue';
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
	import uniList from "@/components/uni-list/uni-list.vue";
	import uniListItem from "@/components/uni-list-item/uni-list-item.vue";
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			uniCollapse,
			uniCollapseItem,
			uniNumberBox,
			uniList,
			uniListItem
		},
		data() {
			return {
				specClass: 'none',
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				slist: [],
				tlist: [],
				scrollHeight: '400px',
				leftArray: [],
				mainArray: [],
				leftIndex: 0,
				addressData: {
					address: '',
					city: '',
					id: '',
					name: '',
					phone: '',
					province: '',
					zone: '',
					id: '',
					defaultFlag: 0,
				},
				total: 0,
				goodTemp: {},
				orderTemp: {},
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		computed: {
			/* 计算左侧滚动位置定位 */
			leftIntoView() {
				return `left-${this.leftIndex > 5 ? (this.leftIndex-5):0}`;
			},
			...mapState(['hasLogin', 'userInfo'])
		},
		mounted() {
			/* 等待DOM挂载完成 */
			this.$nextTick(() => {
				/* 在非H5平台，nextTick回调后有概率获取到错误的元素高度，则添加200ms的延迟来减少BUG的产生 */
				setTimeout(() => {
					/* 等待滚动区域初始化完成 */
					this.initScrollView().then(() => {
						/* 获取列表数据，你的代码从此处开始 */
					})
				}, 200);
			})
		},
		onShow() {
			if(!this.hasLogin){
				this.addressData= {
					address: '',
					city: '',
					id: '',
					name: '',
					phone: '',
					province: '',
					zone: '',
					id: '',
					defaultFlag: 0,
				};
			}
			this.getListData();
		},
		onLoad() {
			if (this.hasLogin) {
				this.loadAddressInfo();
			} else {
				this.addressData = {
					address: '',
					city: '',
					id: '',
					name: '',
					phone: '',
					province: '',
					zone: '',
					id: '',
					defaultFlag: 0,
				}
			}
		},
		methods: {
			navTo(url) {
				if (!this.hasLogin) {
					uni.showModal({
						title: '温馨提示',
						content: '此时此刻需要您登录喔~',
						confirmText: "去登录",
						cancelText: "再逛会",
						success: res2 => {
							if (res2.confirm) {
								uni.navigateTo({
									url: "/pages/public/login"
								});
							}
						}
					});
				} else {
					uni.navigateTo({
						url
					})
				}

			},
			stopPrevent() {},
			toggleSpec() {
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			calcTotal() {
				let order = this.orderTemp;
				let totalPrice = 0;
				for (var key in order) {
					totalPrice += (parseFloat(order[key].price) * order[key].num);
				}
				this.total = totalPrice;
			},
			//数量
			numberChange(changeNumber, index) {
				let goodDetail = this.goodTemp[index];
				if (changeNumber == 0) {
					delete this.orderTemp[goodDetail.goodDetailId];
				} else {
					goodDetail["num"] = parseInt(changeNumber);
					goodDetail["totalPirce"] = "￥" + parseFloat(goodDetail.price) * changeNumber;
					goodDetail["desc"] = "单价：" + goodDetail.price + "元 购买数量：" + changeNumber;
					this.orderTemp[goodDetail.goodDetailId] = goodDetail;
				}
				this.calcTotal();
			},
			//一级分类点击
			tabtap(item) {
				if (!this.sizeCalcState) {
					this.calcSize();
				}

				this.currentId = item.id;
				let index = this.slist.findIndex(sitem => sitem.pid === item.id);
				this.tabScrollTop = this.slist[index].top;
			},
			//右侧栏滚动
			asideScroll(e) {
				if (!this.sizeCalcState) {
					this.calcSize();
				}
				let scrollTop = e.detail.scrollTop;
				let tabs = this.slist.filter(item => item.top <= scrollTop).reverse();
				if (tabs.length > 0) {
					this.currentId = tabs[0].pid;
				}
			},
			//计算右侧栏每个tab的高度等信息
			calcSize() {
				let h = 0;
				this.slist.forEach(item => {
					let view = uni.createSelectorQuery().select("#main-" + item.id);
					view.fields({
						size: true
					}, data => {
						item.top = h;
						h += data.height;
						item.bottom = h;
					}).exec();
				})
				this.sizeCalcState = true;
			},
			/* 初始化滚动区域 */
			initScrollView() {
				return new Promise((resolve, reject) => {
					let view = uni.createSelectorQuery().select('#scroll-panel');
					view.boundingClientRect(res => {
						this.scrollHeight = `${res.height}px`;
						this.$nextTick(() => {
							resolve();
						})
					}).exec();
				});
			},
			/* 获取列表数据 */
			getListData() {
				// Promise 为 ES6 新增的API ，有疑问的请自行学习该方法的使用。
				new Promise((resolve, reject) => {
					/* 因无真实数据，当前方法模拟数据。正式项目中将此处替换为 数据请求即可 */
					uni.showLoading();
					var that = this;
					this.$http.get(this.$httpApi.goods.category, {}).
					then(function(response) {
						let [left, main] = [
							[],
							[]
						];

						for (let i = 0; i < response.length; i++) {
							left.push(response[i].name);
							let goodDtos = response[i].goodDtos;
							let list = [];
							for (let j = 0; j < goodDtos.length; j++) {
								let goodDto = goodDtos[j];
								list.push(goodDto);

								let goodDetails = goodDto.goodDetails;
								for (var e = 0; e < goodDetails.length; e++) {
									let goodDetailDto = goodDetails[e];
									goodDetailDto["num"] = 0;
									that.goodTemp[goodDetailDto.goodDetailId] = goodDetailDto;
								}

							}
							main.push({
								title: response[i].name,
								list
							})
						}

						// 将请求接口返回的数据传递给 Promise 对象的 then 函数。
						resolve({
							left,
							main
						});

					}).catch(function(error) {
						//这里只会在接口是失败状态返回，不需要去处理错误提示
					});

				}).then((res) => {
					console.log('-----------请求接口返回数据示例-------------');
					console.log(res);

					uni.hideLoading();
					this.leftArray = res.left;
					this.mainArray = res.main;
				});
			},
			/* 左侧导航点击 */
			leftTap(e) {
				let index = e.currentTarget.dataset.index;
				this.leftIndex = Number(index);
			},
			/* 轮播图切换 */
			swiperChange(e) {
				let index = e.detail.current;
				this.leftIndex = Number(index);
			},
			loadAddressInfo() {
				var that = this;
				this.$http.get(this.$httpApi.address.defaultAddr, {}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.addressData.address = response.address;
					that.addressData.city = response.city;
					that.addressData.id = response.id;
					that.addressData.name = response.name;
					that.addressData.phone = response.phone;
					that.addressData.province = response.province;
					that.addressData.zone = response.zone;
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			},
			showOrder() {
				if (!this.hasLogin) {
					uni.showModal({
						title: '温馨提示',
						content: '此时此刻需要您登录喔~',
						confirmText: "去登录",
						cancelText: "再逛会",
						success: res2 => {
							if (res2.confirm) {
								uni.navigateTo({
									url: "/pages/public/login"
								});
							}
						}
					});
					return
				}
				
				if (!this.total || this.total == 0) {
					this.$api.msg("请选择要购买的商品!!!");
					return;
				}
				this.toggleSpec();
			},
			makeOrder() {
				
				if (!this.total || this.total == 0) {
					this.$api.msg("请选择要购买的商品!!!");
					return;
				}
				if(this.addressData.id == null || this.addressData.id == ''){
					this.$api.msg("请选择收货地址")
					return
				}
				var that = this;
				uni.showModal({
					title: '提示',
					content: '确认提交订单？',
					success: function(res) {
						if(res.confirm){
							let orderInfo = {};
							let addressId = that.addressData.id;
							let goodDetails = [];
							let nums = [];
							let orderType = 1;
							for (var key in that.orderTemp) {
								goodDetails.push(key);
								nums.push(that.orderTemp[key].num);
							};
							
							orderInfo["orderType"] = orderType;
							orderInfo["goodDetailIds"] = goodDetails;
							orderInfo["nums"] = nums;
							orderInfo["addressId"] = addressId;
							
							that.$http.post(that.$httpApi.order.makeOrder, orderInfo).
							then(function(response) {
								that.orderTemp = {};
								that.total = 0;
								that.$api.msg("下单成功");
								that.toggleSpec();
								setTimeout(function() {
									that.getListData();
								}, 500)
							}).catch(function(error) {
								//这里只会在接口是失败状态返回，不需要去处理错误提示
							});
						}
					}
				});
			}
		}
	}
</script>

<style lang='scss'>
	/* 规格选择弹窗 */
	.attr-content {
		padding: 10upx 30upx;

		.a-t {
			display: flex;

			image {
				width: 170upx;
				height: 170upx;
				flex-shrink: 0;
				margin-top: -40upx;
				border-radius: 8upx;
				;
			}

			.right {
				display: flex;
				flex-direction: column;
				padding-left: 24upx;
				font-size: $font-sm + 2upx;
				color: $font-color-base;
				line-height: 42upx;

				.price {
					font-size: $font-lg;
					color: $uni-color-primary;
					margin-bottom: 10upx;
				}

				.selected-text {
					margin-right: 10upx;
				}
			}
		}

		.attr-list {
			display: flex;
			flex-direction: column;
			font-size: $font-base + 2upx;
			color: $font-color-base;
			padding-top: 30upx;
			padding-left: 10upx;
		}

		.item-list {
			padding: 20upx 0 0;
			display: flex;
			flex-wrap: wrap;

			text {
				display: flex;
				align-items: center;
				justify-content: center;
				background: #eee;
				margin-right: 20upx;
				margin-bottom: 20upx;
				border-radius: 100upx;
				min-width: 60upx;
				height: 60upx;
				padding: 0 20upx;
				font-size: $font-base;
				color: $font-color-dark;
			}

			.selected {
				background: #fbebee;
				color: $uni-color-primary;
			}
		}
	}

	/*  弹出层 */
	.popup {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;

		&.show {
			display: block;

			.mask {
				animation: showPopup 0.2s linear both;
			}

			.layer {
				animation: showLayer 0.2s linear both;
			}
		}

		&.hide {
			.mask {
				animation: hidePopup 0.2s linear both;
			}

			.layer {
				animation: hideLayer 0.2s linear both;
			}
		}

		&.none {
			display: none;
		}

		.mask {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.4);
		}

		.layer {
			position: fixed;
			z-index: 99;
			bottom: 0;
			width: 100%;
			min-height: 60vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				/* margin: 30upx auto 20upx; */
			}
		}

		@keyframes showPopup {
			0% {
				opacity: 0;
			}

			100% {
				opacity: 1;
			}
		}

		@keyframes hidePopup {
			0% {
				opacity: 1;
			}

			100% {
				opacity: 0;
			}
		}

		@keyframes showLayer {
			0% {
				transform: translateY(120%);
			}

			100% {
				transform: translateY(0%);
			}
		}

		@keyframes hideLayer {
			0% {
				transform: translateY(0);
			}

			100% {
				transform: translateY(120%);
			}
		}
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

	page,
	.container {
		height: 100%;
	}

	/* 容器 */
	.container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;

		&>view {
			width: 100%;
		}

		.scroll-panel {
			flex-grow: 1;
			height: 0;
			overflow: hidden;
		}

		.bottom-panel {
			padding-bottom: 0;
			padding-bottom: constant(safe-area-inset-bottom);
			padding-bottom: env(safe-area-inset-bottom);
		}
	}

	.list-box {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: flex-start;
		font-size: 28rpx;

		.left {
			width: 200rpx;
			background-color: #f6f6f6;
			line-height: 80rpx;
			box-sizing: border-box;
			font-size: 32rpx;

			.item {
				padding-left: 20rpx;
				position: relative;

				&:not(:first-child) {
					margin-top: 1px;

					&::after {
						content: '';
						display: block;
						height: 0;
						border-top: #d6d6d6 solid 1px;
						width: 620upx;
						position: absolute;
						top: -1px;
						right: 0;
						transform: scaleY(0.5);
						/* 1px像素 */
					}
				}

				&.active,
				&:active {
					color: #DD524D;
					background-color: #fff;
				}
			}
		}

		.main {
			background-color: #fff;
			padding-left: 20rpx;
			width: 0;
			flex-grow: 1;
			box-sizing: border-box;

			.swiper {
				height: 500px;
			}

			.title {
				line-height: 64rpx;
				font-size: 24rpx;
				font-weight: bold;
				color: #666;
				background-color: #fff;
				position: sticky;
				top: 0;
				z-index: 999;
			}

			.item {
				padding-bottom: 10rpx;
			}

			.goods {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				justify-content: flex-start;
				align-items: center;
				align-content: center;
				margin-bottom: 10rpx;

				&>image {
					width: 120rpx;
					height: 120rpx;
					margin-right: 16rpx;
					margin-left: 2px;
				}

				.describe {
					font-size: 24rpx;
					color: #DD524D;
				}

				.money {
					font-size: 24rpx;
					color: #DD524D;
				}
			}
		}
	}


	/* 底部栏 */
	.action-section {
		/* #ifdef H5 */
		margin-bottom: 100upx;
		/* #endif */
		position: fixed;
		left: 300upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		/* width: 690upx; */
		height: 100upx;
		padding: 0 30upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.checkbox {
			height: 52upx;
			position: relative;

			image {
				width: 52upx;
				height: 100%;
				position: relative;
				z-index: 5;
			}
		}

		.clear-btn {
			position: absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: $font-base;
			color: #fff;
			background: $font-color-disabled;
			border-radius: 0 50px 50px 0;
			opacity: 0;
			transition: .2s;

			&.show {
				opacity: 1;
				width: 120upx;
			}
		}

		.total-box {
			flex: 1;
			display: flex;
			flex-direction: column;
			text-align: right;
			padding-right: 40upx;

			.price {
				font-size: $font-lg;
				color: $font-color-dark;
			}

			.coupon {
				font-size: $font-sm;
				color: $font-color-light;

				text {
					color: $font-color-dark;
				}
			}
		}

		.confirm-btn {
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 76upx;
			line-height: 76upx;
			font-size: $font-base + 2upx;
			background: $uni-color-primary;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
	}

	.uni-collapse-cell {
		background-color: #FFFFFF;
	}

	.step {}
</style>
