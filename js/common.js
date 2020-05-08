// 服务器状态
var global_code_success = '0';
var global_code_fail = '1';
var global_need_login = '3';

//消息类
var global_request_error = '请求服务异常，请稍后重试';

//服务器地址
var global_base_url = "http://localhost:8081";
var global_index_url = global_base_url + "/main/indexBaseInfo";
var global_login_url = global_base_url + "/login/userLogin";
var global_good_url = global_base_url + "/good/list";
var global_address_url = global_base_url +'/address';
var global_order_list_url = global_base_url + '/order/list';
var global_order_detail_url = global_base_url + '/order/detail';
var global_order_reorder_url = global_base_url + '/order/reorder';
var global_good_detail_url = global_base_url +'/good/goodDetail';

//订单类型
//待发货
var global_order_waitting = 1;
//配货中
var global_order_assembly = 2;
//已发货
var global_order_deliver = 3;
//已完成
var global_order_complete = 4;

//通用方法
String.prototype.format=function()
{
  if(arguments.length==0) return this;
  for(var s=this, i=0; i<arguments.length; i++)
    s=s.replace(new RegExp("\\{"+i+"\\}","g"), arguments[i]);
  return s;
};
