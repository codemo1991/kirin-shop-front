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

export function getUrlParam(name) {
  var url = window.location.href;
  let params = url.substr(url.lastIndexOf("?") + 1).split("&");
  for (let i = 0; i < params.length; i++) {
    let param = params[i];
    let key = param.split("=")[0];
    let value = param.split("=")[1];
    if (key === name) {
      return value;
    }
  }
}

module.exports = {
    showUnloginModal: showUnloginModal,
	getUrlParam : getUrlParam
}