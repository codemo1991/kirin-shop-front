(function($) {
	$.ready(function() {
		document.getElementById("submit").addEventListener('tap', function() {
			var loginName = mui("#loginName")[0].value;
			var password = mui("#password")[0].value;
			if (loginName.trim() == '' || password.trim() == '') {
				mui.toast("登录名或者密码不能为空");
				return;
			}
			login(loginName, password);
		});
	});

	/**
	 * @param {Object} loginName
	 * @param {Object} password
	 * 登录操作
	 */
	function login(loginName, password) {
		mui.post(global_login_url, {
			"phone": loginName,
			"password": password
		}, function(data) {
			if (data.code == global_code_success) {
				localStorage.setItem("loginToken", data.data);
				mui.toast("登录成功");
				 mui.openWindow({
				    url:'../index.html'
				  });
			} else {
				// 异常提示
				mui.toast(data.msg, {
					duration: 'long',
					type: 'div'
				})
			}
		}, 'json');
	}

})(mui);
