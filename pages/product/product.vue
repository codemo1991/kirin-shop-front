<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular=true duration="400">
				<swiper-item class="swiper-item" v-for="(item,index) in imgList" :key="index">
					<view class="image-wrapper">
						<image :src="item" class="loaded" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="introduce-section">
			<text class="title">{{goodName}}</text>
			<view class="price-box">
				<text class="price-tip">¥</text>
				<text class="price">{{price}}</text>
				<text class="m-price">¥{{recPrice}}</text>
				<!-- <text class="coupon-tip">7折</text> -->
			</view>
			<view class="bot-row">
				<text>销量: {{soldTemp}}</text>
				<text>库存: {{store}}</text>
				<text>热度: 100 </text>
			</view>
		</view>

		<!--  分享 -->
		<!-- <view class="share-section" @click="share">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				 返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<text class="yticon icon-you"></text>
			</view>
		</view> -->

		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
						{{sItem.name}}
					</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<!-- <view class="c-row b-b">
				<text class="tit">优惠券</text>
				<text class="con t-r red">领取优惠券</text>
				<text class="yticon icon-you"></text>
			</view> -->
			<view class="c-row b-b" v-if="pinkAge">
				<text class="tit">运费规则</text>
				<view class="con-list">
					<text>包邮数量：{{pinkAge}}件</text>
					<text>运费：{{deliveryFee}}元</text>
					<text>偏远地区请补拍运费</text>
				</view>
			</view>
			<view class="c-row b-b">
				<text class="tit">时效</text>
				<view class="bz-list con">
					<text style="margin-right: 5px;">{{deliveryFrom}}发货 ·</text>
					<text>{{deliveryTime}}小时内</text>
				</view>
			</view>
		</view>

		<!-- 评价 -->
		<!-- <view class="eva-section">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<text class="yticon icon-you"></text>
			</view> 
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view> -->

		<view class="detail-desc">
			<view class="d-header">
				<text>图文详情</text>
			</view>
			<rich-text :nodes="desc" class="content"></rich-text>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn">
				<text class="yticon icon-xiatubiao--copy"></text>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<uni-badge style="position: fixed;margin-top: -10px;margin-left: 10px;" type="error" :text="shopcarNum" size="small"
				 :inverted="false"></uni-badge>
				<text class="yticon icon-gouwuche"></text>
				<text>购物车</text>
			</navigator>

			<view class="p-b-btn" :class="{active: favorite}" @click="share()">
				<text class="yticon icon-share"></text>
				<text>分享</text>
			</view>

			<view class="action-btn-group">
				<button type="primary" class=" action-btn no-border add-cart-btn" @click="add2CarToggleSpec">加入购物车</button>
				<button type="primary" class=" action-btn no-border buy-now-btn" @click="buyToggleSpec">立即购买</button>
			</view>
		</view>


		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image :src="goodDetailImg"></image>
					<view class="right">
						<text class="price">¥{{goodDetailPrice}}</text>
						<text class="stock">库存：{{goodDetailStore}}件</text>
						<view class="selected">
							已选：
							<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">
								{{sItem.name}}
							</text>
						</view>
					</view>
				</view>
				<view v-for="(item,index) in specList" :key="index" class="attr-list">
					<text>{{item.name}}</text>
					<view class="item-list">
						<text v-for="(childItem, childIndex) in specChildList" :key="childIndex" class="tit" :class="{selected: childItem.selected}"
						 @click="selectSpec(childIndex, childItem.pid)">
							{{childItem.name}}
						</text>
					</view>
				</view>
				<view class="attr-list">
					<text>数量</text>
					<view class="item-list">
						<uni-number-box class="step" :min="1" :max="maxGoodNum" :value="num" @change="numberChange"></uni-number-box>
					</view>
				</view>
				<button class="btn" @click="dialogType == 'buy'? buy() : add2ShopCar()">完成</button>
			</view>
		</view>
		<!-- 分享弹窗 -->
		<uni-popup ref="sharepopup" type="bottom">
			<share-btn :sharedataTemp="sharedata"></share-btn>
		</uni-popup>

		<!-- 分享组件 -->
		<shareGuide v-model="showShare"></shareGuide>
	</view>
</template>

<script>
	import sdk from '@/common/wechat/sdk';
	import shareGuide from '@/components/modal/share-guide.vue';
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
	import uniBadge from "@/components/uni-badge/uni-badge.vue";
	import {
		mapState
	} from 'vuex';
	import commonJs from '@/common/common.js'
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import shareBtn from '@/components/share-btn/share-btn.vue';
	export default {
		components: {
			uniNumberBox,
			uniBadge,
			uniPopup,
			shareBtn,
			shareGuide
		},
		computed: {
			...mapState(['hasLogin', 'userInfo'])
		},
		data() {
			return {
				showShare: false,
				maxGoodNum: 1,
				dialogType: null,
				shopcarNum: 0,
				goodDetailId: '',
				goodDetailPrice: '',
				goodDetailStore: '',
				num: 1,
				price: '',
				recPrice: '',
				sold: '',
				store: '',
				specClass: 'none',
				specSelected: [],
				goodName: '',
				favorite: true,
				imgList: [],
				desc: ``,
				specList: [{
					id: 1,
					name: '商品品类',
				}],
				specChildList: [],
				deliveryFrom: '',
				deliveryTime: '',
				deliveryFee: 0,
				pinkAge: 1,
				goodDetailImg: '',
				sharedata: {
					type: 1,
					strShareUrl: "",
					strShareTitle: "",
					strShareSummary: "",
					strShareImageUrl: ""
				},
				soldTemp:0
			};
		},
		async onLoad(options) {
			//接收传值,id里面放的是标题，因为测试数据并没写id 
			let id = options.id;
			this.loadGoodBaseInfo(id);
			if (this.hasLogin)
				this.getShopCarNum();

			//规格 默认选中第一条
			this.specList.forEach(item => {
				for (let cItem of this.specChildList) {
					if (cItem.pid === item.id) {
						this.$set(cItem, 'selected', true);
						this.specSelected.push(cItem);
						break; //forEach不能使用break
					}
				}
			})
			
			this.soldTemp = '23' + Math.floor(Math.random() * 10 );
		},
		methods: {
			add2CarToggleSpec() {
				if (this.specChildList != null && this.specChildList.length > 0) {
					this.selectSpec(0, this.specChildList[0].pid);
				}
				this.dialogType = 'add2Car'
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			buyToggleSpec() {
				if (this.specChildList != null && this.specChildList.length > 0) {
					this.selectSpec(0, this.specChildList[0].pid);
				}
				this.dialogType = 'buy'
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			numberChange(data) {
				if (data <= this.goodDetailStore) {
					this.num = data;
				}
			},
			async getShopCarNum() {
				var that = this;
				this.$http.get(this.$httpApi.shopcar.getShopCarNum, {}).
				then(function(response) {
					that.shopcarNum = response;
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			},
			async loadGoodBaseInfo(id) {
				var that = this;
				this.$http.get(this.$httpApi.goods.iteminfo, {
					"goodId": id
				}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					let imgs = response.imgs;
					that.imgList = imgs || [];

					let goodName = response.name;
					that.goodName = goodName;

					let goodPrice = response.price;
					that.price = goodPrice;

					let goodRecPrice = response.recPrice;
					that.recPrice = goodRecPrice;

					let soldNum = response.soldNum;
					that.sold = soldNum;

					let store = response.store;
					that.store = store;

					let desc = response.desc;
					that.desc = desc;

					let goodDetail = response.goodDetails;
					that.specChildList = goodDetail;

					let deliveryFrom = response.deliveryFrom;
					that.deliveryFrom = deliveryFrom;

					let deliveryTime = response.deliveryTime
					that.deliveryTime = deliveryTime;

					let imgUrl = response.img

					that.deliveryFee = response.deliveryFee
					that.pinkAge = response.pinkAge


					//分享
					that.sharedata = {
						type: 1,
						strShareUrl: "https://www.ricebuy.cn/v1/pages/product/product?id=" + id,
						strShareTitle: goodName,
						strShareSummary: "我在【灵犀】发现了超值的【" + goodName + "】,推荐给你，一起省钱吧~",
						strShareImageUrl: "http://yuns.ricebuy.cn/" + imgUrl
					}

				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			},
			//规格弹窗开关
			toggleSpec() {
				if (this.specChildList != null && this.specChildList.length > 0) {
					this.selectSpec(0, this.specChildList[0].pid);
				}
				if (this.specClass === 'show') {
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				} else if (this.specClass === 'none') {
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid) {
				let list = this.specChildList;
				list.forEach(item => {
					if (item.pid === pid) {
						this.$set(item, 'selected', false);
						this.maxGoodNum = item.store
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = [];
				list.forEach(item => {
					if (item.selected === true) {
						this.specSelected.push(item);
						this.goodDetailPrice = item.price;
						this.goodDetailStore = parseInt(item.store);
						this.goodDetailId = item.goodDetailId;
						this.goodDetailImg = item.imageUrl;
					}
				})
			},
			//分享
			share() {
				// this.$refs.share.toggleMask();
				var that = this
				sdk.share(this.sharedata, function(e) {
					that.showShare = true;
				})
			},
			//收藏
			toFavorite() {
				this.favorite = !this.favorite;
			},
			buy() {
				if (!this.hasLogin) {
					commonJs.showUnloginModal()
					return
				}
				var that = this;
				let goodDetailId = this.goodDetailId
				if (!goodDetailId || !this.num || this.num == 0) {
					this.$api.msg("请选择购买类型");
					this.toggleSpec();
					return;
				};

				if (this.num > this.goodDetailStore) {
					this.$api.msg("抱歉！商品数量不足!");
					return;
				}

				let goodDetail = this.specChildList;
				let goodsData = [];
				let orderTemp = {};

				goodDetail.forEach(item => {
					if (item.goodDetailId == goodDetailId) {
						goodsData.push({
							goodDetailId: item.goodDetailId,
							num: that.num,
							price: item.price,
							name: this.goodName,
							imgUrl: item.imageUrl,
							property: item.name
						})
					}
				})

				orderTemp["goodsData"] = goodsData;
				orderTemp["orderType"] = 1;
				orderTemp["totalPrice"] = parseInt(this.num) * parseFloat(goodsData[0].price);

				uni.navigateTo({
					url: `/pages/order/createOrder?data=${JSON.stringify({
						orderTemp: orderTemp
					})}`
				})
				this.toggleSpec();
			},
			add2ShopCar() {
				if (!this.hasLogin) {
					commonJs.showUnloginModal()
					return
				}
				let goodDetailId = this.goodDetailId
				if (!goodDetailId || !this.num || this.num == 0) {
					this.$api.msg("请选择购买类型");
					return;
				}

				if (this.num > this.goodDetailStore) {
					this.$api.msg("抱歉！商品数量不足!");
					return;
				}

				var that = this;
				this.$http.post(this.$httpApi.shopcar.add2shopCar, {
					goodDetailId: goodDetailId,
					num: that.num
				}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.$api.msg("加入购物车成功");
					that.shopcarNum = parseInt(that.shopcarNum) + 1;
					that.toggleSpec();
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			},
			stopPrevent() {},
			shareOn() {
				this.$refs.sharepopup.open();
			}
		},

	}
</script>

<style lang='scss'>
	page {
		background: $page-color-base;
		padding-bottom: 160upx;
	}

	.icon-you {
		font-size: $font-base + 2upx;
		color: #888;
	}

	.carousel {
		height: 722upx;
		position: relative;

		swiper {
			height: 100%;
		}

		.image-wrapper {
			width: 100%;
			height: 100%;
		}

		.swiper-item {
			display: flex;
			justify-content: center;
			align-content: center;
			height: 750upx;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
			}
		}

	}

	/* 标题简介 */
	.introduce-section {
		background: #fff;
		padding: 20upx 30upx;

		.title {
			font-size: 32upx;
			color: $font-color-dark;
			height: 50upx;
			line-height: 50upx;
		}

		.price-box {
			display: flex;
			align-items: baseline;
			height: 64upx;
			padding: 10upx 0;
			font-size: 26upx;
			color: $uni-color-primary;
		}

		.price {
			font-size: $font-lg + 2upx;
		}

		.m-price {
			margin: 0 12upx;
			color: $font-color-light;
			text-decoration: line-through;
		}

		.coupon-tip {
			align-items: center;
			padding: 4upx 10upx;
			background: $uni-color-primary;
			font-size: $font-sm;
			color: #fff;
			border-radius: 6upx;
			line-height: 1;
			transform: translateY(-4upx);
		}

		.bot-row {
			display: flex;
			align-items: center;
			height: 50upx;
			font-size: $font-sm;
			color: $font-color-light;

			text {
				flex: 1;
			}
		}
	}

	/* 分享 */
	.share-section {
		display: flex;
		align-items: center;
		color: $font-color-base;
		background: linear-gradient(left, #fdf5f6, #fbebf6);
		padding: 12upx 30upx;

		.share-icon {
			display: flex;
			align-items: center;
			width: 70upx;
			height: 30upx;
			line-height: 1;
			border: 1px solid $uni-color-primary;
			border-radius: 4upx;
			position: relative;
			overflow: hidden;
			font-size: 22upx;
			color: $uni-color-primary;

			&:after {
				content: '';
				width: 50upx;
				height: 50upx;
				border-radius: 50%;
				left: -20upx;
				top: -12upx;
				position: absolute;
				background: $uni-color-primary;
			}
		}

		.icon-xingxing {
			position: relative;
			z-index: 1;
			font-size: 24upx;
			margin-left: 2upx;
			margin-right: 10upx;
			color: #fff;
			line-height: 1;
		}

		.tit {
			font-size: $font-base;
			margin-left: 10upx;
		}

		.icon-bangzhu1 {
			padding: 10upx;
			font-size: 30upx;
			line-height: 1;
		}

		.share-btn {
			flex: 1;
			text-align: right;
			font-size: $font-sm;
			color: $uni-color-primary;
		}

		.icon-you {
			font-size: $font-sm;
			margin-left: 4upx;
			color: $uni-color-primary;
		}
	}

	.c-list {
		font-size: $font-sm + 2upx;
		color: $font-color-base;
		background: #fff;

		.c-row {
			display: flex;
			align-items: center;
			padding: 20upx 30upx;
			position: relative;
		}

		.tit {
			width: 140upx;
		}

		.con {
			flex: 1;
			color: $font-color-dark;

			.selected-text {
				margin-right: 10upx;
			}
		}

		.bz-list {
			height: 40upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;

			text {
				display: inline-block;
				margin-right: 30upx;
			}
		}

		.con-list {
			flex: 1;
			display: flex;
			flex-direction: column;
			color: $font-color-dark;
			line-height: 40upx;
		}

		.red {
			color: $uni-color-primary;
		}
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		padding: 20upx 30upx;
		background: #fff;
		margin-top: 16upx;

		.e-header {
			display: flex;
			align-items: center;
			height: 70upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;

			.tit {
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				margin-right: 4upx;
			}

			.tip {
				flex: 1;
				text-align: right;
			}

			.icon-you {
				margin-left: 10upx;
			}
		}
	}

	.eva-box {
		display: flex;
		padding: 20upx 0;

		.portrait {
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			border-radius: 100px;
		}

		.right {
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-base;
			color: $font-color-base;
			padding-left: 26upx;

			.con {
				font-size: $font-base;
				color: $font-color-dark;
				padding: 20upx 0;
			}

			.bot {
				display: flex;
				justify-content: space-between;
				font-size: $font-sm;
				color: $font-color-light;
			}
		}
	}

	/*  详情 */
	.detail-desc {
		background: #fff;
		margin-top: 16upx;

		.d-header {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 80upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			position: relative;

			text {
				padding: 0 20upx;
				background: #fff;
				position: relative;
				z-index: 1;
			}

			&:after {
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translateX(-50%);
				width: 300upx;
				height: 0;
				content: '';
				border-bottom: 1px solid #ccc;
			}
		}
	}

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
			min-height: 40vh;
			border-radius: 10upx 10upx 0 0;
			background-color: #fff;

			.btn {
				height: 66upx;
				line-height: 66upx;
				border-radius: 100upx;
				background: $uni-color-primary;
				font-size: $font-base + 2upx;
				color: #fff;
				margin: 30upx auto 20upx;
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

	/* 底部操作菜单 */
	.page-bottom {
		position: fixed;
		left: 30upx;
		bottom: 30upx;
		z-index: 95;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 690upx;
		height: 100upx;
		background: rgba(255, 255, 255, .9);
		box-shadow: 0 0 20upx 0 rgba(0, 0, 0, .5);
		border-radius: 16upx;

		.p-b-btn {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: $font-sm;
			color: $font-color-base;
			width: 96upx;
			height: 80upx;

			.yticon {
				font-size: 40upx;
				line-height: 48upx;
				color: $font-color-light;
			}

			&.active,
			&.active .yticon {
				color: $uni-color-primary;
			}

			.icon-fenxiang2 {
				font-size: 42upx;
				transform: translateY(-2upx);
			}

			.icon-shoucang {
				font-size: 46upx;
			}
		}

		.action-btn-group {
			display: flex;
			height: 76upx;
			border-radius: 100px;
			overflow: hidden;
			box-shadow: 0 20upx 40upx -16upx #fa436a;
			box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
			background: linear-gradient(to right, #ffac30, #fa436a, #F56C6C);
			margin-left: 20upx;
			position: relative;

			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 50%;
				transform: translateY(-50%);
				height: 28upx;
				width: 0;
				border-right: 1px solid rgba(255, 255, 255, .5);
			}

			.action-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 180upx;
				height: 100%;
				font-size: $font-base;
				padding: 0;
				border-radius: 0;
				background: transparent;
			}
		}
	}
</style>
