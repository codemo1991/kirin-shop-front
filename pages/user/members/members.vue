<template>
	<option-list :itemHeight="itemHeight" :list="list" :threshold="threshold" :options="options">
		<template slot-scope="scope">
			<view class="item">
				<image :src="scope.data.img" mode="aspectFill" class="item-img"></image>
				<text style="margin-left: 20px;">{{scope.data.text}}</text>
			</view>
		</template>
	</option-list>
</template>

<script>
	import optionList from '@/components/gzz-option-list/option-list.vue';
	import {
		mapMutations
	} from 'vuex';
	import {
		mapState
	} from 'vuex';
	export default {
		components: {
			optionList
		},
		data() {
			return {
				list: [],
				itemHeight: 70,
				options: [ //左滑的操作列表
				],
				threshold: 50,
			}
		},
		onLoad(options) {
			this.loanMemberInfo();
		},
		methods: {
			loanMemberInfo() {
				var that = this;
				this.$http.get(this.$httpApi.my.myMembers, {
					"userId":that.userinfo.userId
				}).
				then(function(response) {
					//这里只会在接口是成功状态返回
					let data = response;
					data.forEach(item =>{
						that.list.push({
							img: item.img,
							text: item.name
						});
					})
						
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					uni.showToast({
						title: '请求失败',
					})
				});
			},
		},
		// #endif
		computed: {
			...mapState(['hasLogin', 'userinfo'])
		},
	}
</script>

<style lang="scss" scoped>
	//scoped 在当前页生效 不影响子组件
	.item {
		// width: 100%;
		padding: 0 20px;
		height: 100%;
		display: flex;
		align-items: center;

		.item-img {
			width: 40px;
			height: 40px;
		}
	}
</style>
