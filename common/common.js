function showUnloginModal() {
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
}

module.exports = {
    showUnloginModal: showUnloginModal
}