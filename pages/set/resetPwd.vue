<template>
	<view class="content">
		<view class="row b-b">
			<text class="tit">旧密码</text>
			<input class="input" type="text" v-model="oldPwd" placeholder="请输入旧密码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">新密码</text>
			<input class="input" type="text" v-model="newPwd" placeholder="请输入新密码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">新密码</text>
			<input class="input" type="text" v-model="reNewPwd" placeholder="请再次输入新密码" placeholder-class="placeholder" />
		</view>

		<button class="add-btn" @click="confirm">提交</button>
		
	</view>
</template>

<script>
import {  
	    mapMutations,
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				oldPwd:'',
				newPwd:'',
				reNewPwd:''
			}
		},
		computed:{
			...mapState(['hasLogin'])
		},
		onLoad(option) {
			
		},
		methods: {
			...mapMutations(['logout']),
			confirm(){
				if(!this.hasLogin){
					commonJs.showUnloginModal()
				}
				if(!this.oldPwd){
					this.$api.msg("请输入旧密码");
					return;
				}
				if(!this.newPwd){
					this.$api.msg("请输入新密码");
					return;
				}
				if(!this.reNewPwd){
					this.$api.msg("请再次输入新密码");
					return;
				}
				if(this.newPwd != this.reNewPwd){
					this.$api.msg("两次输入密码不正确");
					return;
				}
				let reqData = {"oldPwd":this.oldPwd, "newPwd":this.newPwd}
				var that = this;
				this.$http.post(this.$httpApi.my.resetPwd, reqData).then(function(response) {
					that.$api.msg("修改密码成功,请重新登录");
					that.oldPwd = "";
					that.newPwd = "";
					that.reNewPwd = "";
					setTimeout(()=>{
						that.toLogOut();
					},500)
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					console.log(error);
				});
			},
			toLogOut() {
				var that = this;
				this.$http.post(this.$httpApi.user.logout, {
				}).then(function(response) {
					that.logout()
					uni.navigateTo({
						url: `/pages/public/login`
					})
				}).catch(function(error) {
					//这里只会在接口是失败状态返回，不需要去处理错误提示
					console.log(error);
					that.$api.msg("退出失败");
				});
			}
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
