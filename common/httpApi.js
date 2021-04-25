/**
 * API接口配置文件
 */
module.exports = {
	home: {
		banner: "front/index/indexBaseInfo", // 首页banner 
		navlist: "front/index/navlist", // 首页导航
	},
	common: {
		couponlist: "front/index/couponlist", // 公共加载商品
		config: "front/config/getinfo", // 获取服务端配置
		update: "front/config/update", // 检测更新 
	},
	goods: {
		iteminfo: "front/goods/goodDetail", // 商品详情 加载 
		category: "front/goods/category", // 商品目录 加载
		goodList: "front/goods/goodList",
		classify: "front/goods/goodClassify", // 商品目录 加载
	},
	user: {
		login: "front/login/signIn", //用户登录
		account: "front/my/myInfo", //用户信息
		logout: "front/login/signOut", //用户退出
		wxBind: "front/login/wxBind", //微信绑定
		sendSms:"front/sms/sendSmsCode",//发送验证码
		register:"front/login/register",//注册
		wxLogin:"front/login/wxLogin",//微信登陆

	},
	shopcar: {
		add2shopCar: "front/shopCar/addShopCar", //添加到购物车
		getShopCarNum: "front/shopCar/getShopCarNum", //获取购物车商品数量
		showShopCar: "front/shopCar/showShopCar", //查看购物车
		delShopCar: "front/shopCar/delShopCar", //删除购物车商品
	},
	address: {
		defaultAddr: "front/address/showDefaultAddress", //查看默认地址
		showAddr: "front/address/showAddresses", //返回地址列表
		delAddr: "front/address/deleteAddress", //删除地址
		addAddr: "front/address/addAddress", //添加地址
	},
	order: {
		makeOrder: "front/order/order", //下单
		showOrder: "front/order/showOrder", //查看订单列表
		showOrderDetail: "front/order/showOrderByOid", //查看订单详情
		orderOperate: "front/order/orderOperate" ,//订单催单、申请退单动作
		cancelOrder: "front/order/cancelOrder" //订单取消
	},
	my: {
		account: "front/my/myInfo", //我的
		waterBill: "front/my/showWaterBill",//我的流水
		resetPwd: "front/my/resetPwd",//重置密码
		phoneBind: "front/my/phoneBind",//绑定手机号码
		myMembers: "front/my/myMembers",//用户列表
	},
	share: {
		share: "front/share/sign" //分享
	},
	pay:{
		pay: "front/pay/order" ,//微信预付
	}
}
