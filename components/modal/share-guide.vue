<template>
	<view class="cu-modal" :class="[{ show: showModal }]" cathctouchmove @tap="hideModal">
		<view class="cu-dialog cu-dialog1" @tap.stop style="background: none;overflow: visible;"><image class="guide-img" src="http://shopro.7wpp.com/imgs/modal/share_guide.png" mode=""></image></view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	props: {
		value: {},
		modalType: {
			type: String,
			default: ''
		}
	},
	computed: {
		showModal: {
			get() {
				return this.value;
			},
			set(val) {
				this.$emit('input', val);
			}
		}
	},
	methods: {
		hideModal() {
			this.showModal = false;
		}
	}
};
</script>

<style lang="scss">
.guide-img {
	width: 580rpx;
	height: 430rpx;
}
.cu-dialog1{
	vertical-align: top;
}

/* ==================
         模态窗口
 ==================== */

.cu-modal {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1110;
	opacity: 0;
	outline: 0;
	text-align: center;
	-ms-transform: scale(1.185);
	transform: scale(1.185);
	backface-visibility: hidden;
	perspective: 2000upx;
	background: rgba(0, 0, 0, 0.6);
	transition: all 0.3s ease-in-out 0s;
	pointer-events: none;
}

.cu-modal::before {
	content: "\200B";
	display: inline-block;
	height: 100%;
}

.cu-modal.show {
	opacity: 1;
	transition-duration: 0.3s;
	-ms-transform: scale(1);
	transform: scale(1);
	overflow-x: hidden;
	overflow-y: auto;
	pointer-events: auto;
}

.cu-dialog {
	position: relative;
	display: inline-block;
	vertical-align: middle;
	margin-left: auto;
	margin-right: auto;
	width: 680upx;
	max-width: 100%;
	background-color: #f8f8f8;
	border-radius: 10upx;
	overflow: hidden;
}

.cu-modal.bottom-modal::before {
	vertical-align: bottom;
}

.cu-modal.bottom-modal .cu-dialog {
	width: 100%;
	border-radius: 0;
}

.cu-modal.bottom-modal {
	margin-bottom: -1000upx;
}

.cu-modal.bottom-modal.show {
	margin-bottom: 0;
}

.cu-modal.drawer-modal {
	transform: scale(1);
	display: flex;
}

.cu-modal.drawer-modal .cu-dialog {
	height: 100%;
	min-width: 200upx;
	border-radius: 0;
	margin: initial;
	transition-duration: 0.3s;
}

.cu-modal.drawer-modal.justify-start .cu-dialog {
	transform: translateX(-100%);
}

.cu-modal.drawer-modal.justify-end .cu-dialog {
	transform: translateX(100%);
}

.cu-modal.drawer-modal.show .cu-dialog {
	transform: translateX(0%);
}
.cu-modal .cu-dialog>.cu-bar:first-child .action{
  min-width: 100rpx;
  margin-right: 0;
  min-height: 100rpx;
}
</style>
