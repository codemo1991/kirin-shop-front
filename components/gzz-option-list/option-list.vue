<template>
	<view class="list-box">
		<view 
			v-for="(item,index) in dataList"
			:key="index"
			class="item"
			:style="{height: (itemHeight - 1)+'px'}"
			@tap="tap"
			@touchstart="touchstart(item,$event)"
			@touchmove="touchmove"
			@touchend="touchend()">
				<view class="option-box">
					<view 
						v-for="oItem in options"
						:key="oItem.text"
						class="option-item"
						@tap="oItem.func(list[index],index) || ''"
						:style="{ color: oItem.color || '#ffffff',
								  backgroundColor: oItem.bgColor || '#409EFF'}">{{ oItem.text }}</view>
				</view>
				<view class="item-container" :style="{ 
					transform: item.transformVal,transition: item.transitionVal }">
					<slot :data="item"></slot>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
		  list: {
		    type: Array,
		    default: () => ([])
		  },
		  itemHeight: {
		    type: [Number],
		    default: 70
		  },
		  options: {
			  type: Array,
			  default: () => ([])
		  },
		  threshold: {
			  type: [Number],
			  default: 50
		  }
		},
		data() {
			return {
				dataList: [],
				dragTargetX: 0,
				offsetWidth: 0,
				activeItem: null,
				translateX: 0,
			}
		},
		watch: {
		  list: {
		    immediate: true,
		    deep: true,
		    handler (list) {
		      this.setList(list)
		    }
		  }
		},
		methods: {
			touchstart(item,e){
				if(this.translateX != 0 && this.activeItem.item_id != item.item_id){
					this.tap();
				}
				this.dragTargetX = e.touches[0].pageX;
				this.activeItem = item;
				if(!this.offsetWidth){
					var _this = this;
					uni.createSelectorQuery().select('.item .option-box').boundingClientRect().exec(function(resp){
						_this.offsetWidth = resp[0].width;
					});
				}
			},
			touchmove(e){
				let newX = e.touches[0].pageX;
				let d = newX - this.dragTargetX;
				
				if((this.translateX < -this.offsetWidth && d < 0) || (this.translateX > 0 && d > 0)){
					if(this.translateX > 0){
						d = d * 1/this.translateX;
					}else{
						d = d * 1/(Math.abs(this.translateX) - this.offsetWidth);
					}					
				}
				
				this.translateX += d;
				this.setBounceTransition(true);
				
				this.dragTargetX = newX;
			},
			touchend(){
				if(this.translateX >= 0 || Math.abs(this.translateX) < this.threshold){
					this.translateX = 0;
					this.setBounceTransition();
				}else{
					this.translateX = -this.offsetWidth;
					this.setBounceTransition();
				}
			},
			tap(){
				this.translateX = 0;
				this.setBounceTransition();
			},
			setBounceTransition(flag){
				if(flag){
					this.activeItem.transitionVal = 'none';
				}else{
					this.activeItem.transitionVal = 'all 0.4s cubic-bezier(.62,1.69,.7,1)';
				}
				this.activeItem.transformVal = 'translateX('+ this.translateX +'px)';
			},
			setList(list){
				this.dataList = [];
				this.dataList = list.map((item, index) => {
				  return {
				    ...item,
					transformVal: '',
					transitionVal: '',
					item_id: index
				  }
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.list-box{
		width: 100%;
		.item{
			width: 100%;
			background-color: #ffffff;
			border-bottom: 1px solid #F5F5F5;
			position: relative;
			
			.item-container{
				width: 100%;
				height: 100%;
				position: relative;
				background-color: #ffffff;
				// transition: all 0.3s cubic-bezier(.34,1.06,.78,1.1);
			}
			.option-box{
				height: 100%;
				position: absolute;
				top: 0;
				right: 0;
				display: flex;
				.option-item{
					// width: 50px;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 34rpx;
					padding: 0 16px
				}
			}
		}
	}
</style>
