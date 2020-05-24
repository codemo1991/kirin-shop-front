<template>
	<view class="content b-t">
		<mescroll-body ref="mescrollRef" @init="mescrollInit" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback"
		 @emptyclick="emptyClick">
			<view class="list b-b" v-for="(item, index) in tabItem" :key="index">
				<view class="wrapper">
					<view class="u-box">
						<text class="name">{{item.time}}</text>
						<text class="mobile">余额：<font class="price">{{item.afterAmount}}</font>元</text>
					</view>
					<view class="address-box">
						<text v-if="item.billType == 3 || item.billType == 2" class="tagGreen">{{item.billTypeName}}</text>
						<text v-else class="tagRed">{{item.billTypeName}}</text>
						<text class="address" v-if="item.billType == 3 || item.billType == 2">-{{item.balance}} 元</text>
						<text class="address" v-else>+{{item.balance}} 元</text>
						
					</view>
					
				</view>
			</view>
		</mescroll-body>
	</view>
</template>

<script>
	import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
	export default {
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件，内部已注册onPullDownRefresh)
		data() {
			return {
				downOption: {
					native: true // 必须配置此项，且需在pages.json配置"enablePullDownRefresh" : true
				},
				upOption: {
					noMoreSize: 4,
					empty: {
						tip: '~ 暂时没有流水 ~',
						btnText: '去购物'
					},
					page: {
						num: 0,
						size: 20,
						time: null
					},
					textNoMore: "~别再拉了，我是有底线的~"
				},
				tabItem:[],
			}
		},
		onLoad(option) {
			
		},
		methods: {
			upCallback(page) {
				//联网加载数据
				var that = this;
				let orderReq = {
					"pageIndex": page.num,
					"pageSize": page.size
				}
				this.$http.get(this.$httpApi.my.waterBill, orderReq).
				then(function(response) {
					//这里只会在接口是成功状态返回
					that.mescroll.endByPage(response.pageSize, response.totalPage);
					if (page.num == 1) that.tabItem = []; //如果是第一页需手动制空列表
					that.tabItem = that.tabItem.concat(response.list); //追加新数据
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					this.mescroll.endErr();
				});
			},
			//点击空布局按钮的回调
			emptyClick() {
				uni.showToast({
					title: '点击了按钮,具体逻辑自行实现'
				})
			},
			
		}
	}
</script>

<style lang='scss'>
	page {
		padding-bottom: 120upx;
	}

	.content {
		position: relative;
	}

	.list {
		display: flex;
		align-items: center;
		padding: 20upx 30upx;
		;
		background: #fff;
		position: relative;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.address-box {
		display: flex;
		align-items: center;

		.tagRed {
			font-size: 24upx;
			color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}
		
		.tagGreen {
			font-size: 24upx;
			color: #4CD964;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #4CD964;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}

		.address {
			font-size: 30upx;
			color: #E04B28;
		}
	}

	.u-box {
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;

		.name {
			margin-right: 30upx;
		}
		
		.mobile{
			float: right;
			.price{
				font-size: 33upx;
				color: #E04B28;
			}
		}
		 
		 
	}

	.icon-bianji {
		display: flex;
		align-items: center;
		height: 80upx;
		font-size: 40upx;
		color: $font-color-light;
		padding-left: 30upx;
	}

	.add-btn {
		position: fixed;
		left: 30upx;
		right: 30upx;
		bottom: 16upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		font-size: 32upx;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
