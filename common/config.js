// 服务器状态
var global_code_success = '0';
var global_code_fail = '1';
var global_need_login = '3';


//常量定义
var global_login_token = 'login_token';
//消息类
const ROOTPATH = "http://localhosts:8081/";
var global_request_error = '请求服务异常，请稍后重试';

//订单类型
//待发货
var global_order_waitting = 1;
//配货中
var global_order_assembly = 2;
//已发货
var global_order_deliver = 3;
//已完成
var global_order_complete = 4;

module.exports = {
	ROOTPATH:ROOTPATH
}


