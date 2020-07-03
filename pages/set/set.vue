<template>
	<view class="container">
		<view class="list-cell b-b m-t"  hover-class="cell-hover" :hover-stay-time="50" @click="resetPwd()">
			<text class="cell-tit">修改密码</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b m-t"  hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">个人资料</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b"  hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">收货地址</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell"  hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">实名认证</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		
		<view class="list-cell m-t b-b"  hover-class="cell-hover" :hover-stay-time="50" @click="clear()">
			<text class="cell-tit">清除缓存</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view class="list-cell b-b"  hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">关于灵犀严选</text>
			<text class="cell-more yticon icon-you"></text>
		</view>
		<view v-if="hasLogin == true" class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
		</view>
		<view v-else class="list-cell log-out-btn" @click="navTo('/pages/public/login')">
			<text class="cell-tit">登录</text>
		</view>
	</view>
</template>

<script>
	import HttpCache from '../../common/cache.js'
	import commonJs from '@/common/common.js'
	
	import {  
	    mapMutations,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			...mapState(['hasLogin'])
		},
		methods:{
			...mapMutations(['logout']),
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
				    success: (e)=>{
				    	if(e.confirm){
				    		this.toLogOut();
				    	}
				    }
				});
			},
			toLogOut() {
				var that = this;
				this.$http.post(this.$httpApi.user.logout, {
				}).then(function(response) {
					that.logout()
					uni.switchTab({
						url: `/pages/index/index`
					})
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					console.log(error);
					that.$api.msg("退出失败");
				});
			},
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			resetPwd(){
				if(!this.hasLogin){
					commonJs.showUnloginModal()
				}
				uni.navigateTo({
					url: "/pages/set/resetPwd"
				})
				
			},
			clear(){
				HttpCache.remove("user_account");
				this.$api.msg("清除成功");
				if(this.hasLogin){
					this.toLogOut();
				}
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			.cell-tit{
				color: $uni-color-primary;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>
