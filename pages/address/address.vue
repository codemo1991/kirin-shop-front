<template>
	<view class="content b-t">
		<view class="list b-b" v-for="(item, index) in addressList" :key="index" @click="checkAddress(item)">
			<view class="wrapper">
				<view class="u-box">
					<text class="name">{{item.name}}</text>
					<text class="mobile">{{item.phone}}</text>
				</view>
				<view class="address-box">
					<text v-if="item.defaultFlag == 1" class="tag">默认</text>
					<text class="address">{{item.province}} {{item.city}} {{item.zone}} {{item.address}}</text>
				</view>
			</view>
			<text class="yticon icon-bianji" @click.stop="addAddress('edit', item)" style="padding-right: 10px;"></text>
			<text class="yticon icon-iconfontshanchu1" @click.stop="delAddr(item,index)"></text>
		</view>
		<button class="add-btn" @click="addAddress('add')">新增地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: [

				]
			}
		},
		onLoad(option) {
			console.log(option.source);
			this.source = option.source;
			this.loadDefaultData();
		},
		methods: {
			//选择地址
			checkAddress(item) {
				if (this.source == 1) {
					//this.$api.prePage()获取上一页实例，在App.vue定义
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			addAddress(type, item) {
				uni.navigateTo({
					url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				})
			},
			//删除地址
			delAddr(item, index) {
				var that = this;
				uni.showModal({
					title: '提示',
					content: '确认删除该地址？',
					success: function(res) {
						that.$http.post(that.$httpApi.address.delAddr, {
							id: item.id
						}, {
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							}
						}).
						then(function(response) {
							that.$api.msg("删除地址成功");
							that.addressList.splice(index,1);
						}).catch(function(error) {
							//这里只会在接口是失败状态返回，不需要去处理错误提示
						});
					}
				});
			},
			//添加或修改成功之后回调
			refreshList(data, type) {
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				this.addressList.unshift(data);

				console.log(data, type);
			},
			loadDefaultData() {
				var that = this;
				this.addressList = [];
				this.$http.get(this.$httpApi.address.showAddr, {}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					for (var i = 0; i < response.length; i++) {
						var addr = response[i];
						that.addressList.push({
							address: addr.address,
							city: addr.city,
							id: addr.id,
							name: addr.name,
							phone: addr.phone,
							province: addr.province,
							zone: addr.zone,
							id: addr.id,
							defaultFlag:addr.defaultFlag
						})
					}

				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
			}
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

		.tag {
			font-size: 24upx;
			color: $base-color;
			margin-right: 10upx;
			background: #fffafb;
			border: 1px solid #ffb4c7;
			border-radius: 4upx;
			padding: 4upx 10upx;
			line-height: 1;
		}

		.address {
			font-size: 30upx;
			color: $font-color-dark;
		}
	}

	.u-box {
		font-size: 28upx;
		color: $font-color-light;
		margin-top: 16upx;

		.name {
			margin-right: 30upx;
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
