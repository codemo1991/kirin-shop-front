<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">联系人</text>
			<input class="input" type="text" v-model="addressData.name" placeholder="收货人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号</text>
			<input class="input" type="number" v-model="addressData.phone" placeholder="收货人手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">省市区</text>
			<pick-regions :defaultRegion="defaultRegionCode" @getRegion="handleGetRegion">
				<span class="input" v-if="showAddrTips">点击选择地址</span>
				<span class="input" v-else>{{addressData.province}} {{addressData.city}} {{addressData.zone}}</span>
			</pick-regions>
			<input class="input" />
			<text class="yticon icon-shouhuodizhi"></text>
		</view>
		<view class="row b-b">
			<text class="tit">地址</text>
			<input class="input" type="text" v-model="addressData.address" placeholder="详细地址" placeholder-class="placeholder" />
		</view>

		<view class="row default-row">
			<text class="tit">设为默认</text>
			<switch :checked="addressData.defaultFlag == 1? true:false" color="#fa436a" @change="switchChange" />
		</view>
		<button class="add-btn" @click="confirm">提交</button>

		<view class="row b-b" style="height: 90px;">
			<textarea v-model="aiAddress" style="height: 70px;" placeholder="粘贴整段地址、自动识别姓名、电话和地址(*^▽^*)偶尔还会有点小错误" />
			</view>
		<button class="add-btn" @click="makeAIAddress">智能识别</button>
	</view>
</template>

<script>
	import pickRegions from '@/components/pick-regions/pick-regions.vue';
	import AddressParse from '@/js_sdk/zh-address-parse.min.js'

	export default {
		components: {
			pickRegions,
		},
		data() {
			return {
				addressData: {
					address: '',
					city: '',
					id: '',
					name: '',
					phone: '',
					province: '',
					zone: '',
					id: '',
					defaultFlag:0,
					expressAddressId:''
				},
				region: [],
				showAddrTips: true,
				defaultRegion:['广东省','广州市','番禺区'],
				defaultRegionCode:'440113',
				options: {
					type: 0, // 哪种方式解析，0：正则，1：树查找
					textFilter: [], // 预清洗的字段
					nameMaxLength: 4, // 查找最大的中文名字长度
				},
				aiAddress:'',
				addAddr:true,
			}
		},
		computed: {},
		onLoad(option) {
			let title = '新增收货地址';
			if (option.type === 'edit') {
				title = '编辑收货地址';
				this.addressData = JSON.parse(option.data);
				this.addAddr = false;
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})

			if (this.addressData.province) {
				this.showAddrTips = false;
			}
		},
		methods: {
			makeAIAddress(){
				if(!this.aiAddress){
					this.$api.msg("请输入地址!!!");
					return;
				}
				let parseResult = AddressParse(this.aiAddress, this.options);
				if(parseResult.province && parseResult.city && parseResult.area){
					this.addressData.province = parseResult.province;
					this.addressData.city = parseResult.city;
					this.addressData.zone = parseResult.area;
					this.showAddrTips = false;
				}
				this.addressData.address = parseResult.detail;
				this.addressData.name = parseResult.name;
				this.addressData.phone = parseResult.phone;
			},
			onConfirm(value) {
				console.log(value);
			},
			onUpdate(event) {
				this.isShowCompile = event;
			},
			// 获取选择的地区
			handleGetRegion(region) {
				this.region = region;
				this.addressData.province = region[0].name;
				this.addressData.city = region[1].name;
				this.addressData.zone = region[2].name;
				this.addressData.expressAddressId = region[2].code;
				this.showAddrTips = false;
			},
			switchChange(e) {
				let flat = 0;
				if(e.detail.value){
					flat = 1;
				}
				this.addressData.defaultFlag = flat;
			},

			//提交
			confirm() {
				let data = this.addressData;
				var that =this;
				if (!data.name) {
					this.$api.msg('请填写收货人姓名');
					return;
				}
				if (!/(^1[3|4|5|7|8|9][0-9]{9}$)/.test(data.phone)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if (!data.province) {
					this.$api.msg('请选择正确的省市区');
					return;
				}
				if (!data.address) {
					this.$api.msg('请填写正确地址');
					return;
				}
			
				this.$http.post(this.$httpApi.address.addAddr, data).
				then(function(response) {
					console.log(response);
					that.$api.prePage().loadDefaultData();
					that.$api.msg(`地址${that.manageType=='edit' ? '修改': '添加'}成功`);
					setTimeout(() => {
						uni.navigateBack()
					}, 800)
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
				});
				
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-top: 16upx;
	}

	.row {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 30upx;
		height: 110upx;
		background: #fff;

		.tit {
			flex-shrink: 0;
			width: 120upx;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.input {
			flex: 1;
			font-size: 30upx;
			color: $font-color-dark;
		}

		.icon-shouhuodizhi {
			font-size: 36upx;
			color: $font-color-light;
		}
	}

	.default-row {
		margin-top: 16upx;

		.tit {
			flex: 1;
		}

		switch {
			transform: translateX(16upx) scale(.9);
		}
	}

	.add-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 690upx;
		height: 80upx;
		margin: 60upx auto;
		font-size: $font-lg;
		color: #fff;
		background-color: $base-color;
		border-radius: 10upx;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
	}
</style>
