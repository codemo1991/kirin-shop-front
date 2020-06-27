/**
 * API接口配置文件
 */
module.exports = {
	home : {
		banner:"main/indexBaseInfo", // 首页banner 
		navlist:"index/navlist", // 首页导航
		juhusuan:"index/juhuasuanlist", // 首页聚划算推荐
	},
	common:{
		couponlist:"index/couponlist", // 公共加载商品
		config:"config/getinfo", // 获取服务端配置
		update:"config/update", // 检测更新 
	},
	goods:{
		iteminfo:"goods/goodDetail", // 商品详情 加载 
		category:"goods/category", // 商品目录 加载
		goodList:"goods/goodList"
	},
	user:{
		login:"login/userLogin",//用户登录
		account:"my/myInfo",//用户信息
		logout:"login/userLogout",//用户退出
		
	},
	shopcar:{
		add2shopCar:"shopCar/addShopCar",//添加到购物车
		getShopCarNum:"shopCar/getShopCarNum",//获取购物车商品数量
		showShopCar:"shopCar/showShopCar",//查看购物车
		delShopCar:"shopCar/delShopCar",//删除购物车商品
	},
	address:{
		defaultAddr:"address/showDefaultAddress",//查看默认地址
		showAddr:"address/showAddresses",//返回地址列表
		delAddr:"address/deleteAddress",//删除地址
		addAddr:"address/addAddress",//添加地址
	},
	order:{
		makeOrder:"order/order",//下单
		showOrder:"order/showOrder",//查看订单列表
		showOrderDetail:"order/showOrderByOid",//查看订单详情
		cancelOrder:"order/cancelOrder",//取消订单
		orderOperate:"order/orderOperate"//订单催单、申请退单动作
	},
	my:{
		account:"my/myInfo",//我的
		waterBill:"my/showWaterBill"//我的流水
	},
	share:{
		share:"share/sign"//分享
	}
}