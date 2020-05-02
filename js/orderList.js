/*上拉*/
(function($) {
	
	mui("#orderlist0").pullRefresh({
			down: {
				auto: true, //可选,默认false.首次加载自动下拉刷新一次
				contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: loadWaitingOrderListPushDown //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			},
			up: {
				auto: false,
				contentrefresh: '正在加载...',
				contentnomore: '没有更多数据了',
				callback: loadWaitingOrderListPushUp,
			}
		});
		
	mui("#orderlist1").pullRefresh({
			down: {
				auto: true, //可选,默认false.首次加载自动下拉刷新一次
				contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: loadAssemblyOrderListPushDown //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			},
			up: {
				auto: false,
				contentrefresh: '正在加载...',
				contentnomore: '没有更多数据了',
				callback: loadAssemblyOrderListPushUp,
			}
		});
		
		mui("#orderlist2").pullRefresh({
			down: {
				auto: true, //可选,默认false.首次加载自动下拉刷新一次
				contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
				contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
				contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
				callback: loadRecieverOrderListPushDown //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
			},
			up: {
				auto: false,
				contentrefresh: '正在加载...',
				contentnomore: '没有更多数据了',
				callback: loadRecieverOrderListPushUp,
			}
		});
		
		
		mui("#orderlist3").pullRefresh({
				down: {
					auto: true, //可选,默认false.首次加载自动下拉刷新一次
					contentdown: "下拉可以刷新", //可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
					contentover: "释放立即刷新", //可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
					contentrefresh: "正在刷新...", //可选，正在刷新状态时，下拉刷新控件上显示的标题内容
					callback: loadCompleteOrderListPushDown //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
				},
				up: {
					auto: false,
					contentrefresh: '正在加载...',
					contentnomore: '没有更多数据了',
					callback: loadCompleteOrderListPushUp,
				}
			});
			
		
	
	$.ready(function() {
		
	});
	
})(mui);

//撤单
$("#recall_order").on('tap',function(){
	var orderId = $("#reOrderId").val();
	mui.get(global_order_reorder_url,{orderId: orderId
		},function(data){
			if(data.code == global_code_success){
				mui.toast(data.msg,{ duration:'long', type:'div' })
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			$("#modal").removeClass('mui-active');
		},'json'
	);
})
	
function loadWaitingOrderListPushDown(){     
	var context = this;
	mui.get(global_order_list_url,{type:"1"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp0");
				tabItem.innerHTML = getOrderListHtml(data.data);
				$(".orderList").on('tap',function(event){
					var orderId = $(this).attr("value");
					fetchOrderDetail(orderId);
				})
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist0').pullRefresh().endPulldownToRefresh(); 
		},'json'
	);
}


function loadWaitingOrderListPushUp(){
	var context = this;
	mui.get(global_order_list_url,{type:"1"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp0");
				tabItem.innerHTML = getOrderListHtml(data.data);
				$(".orderList").on('tap',function(event){
					fetchOrderDetail(1);
				})
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist0').pullRefresh().endPullupToRefresh(); 
		},'json'
	);
}


function loadAssemblyOrderListPushDown(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp1");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist1').pullRefresh().endPulldownToRefresh(); 
		},'json'
	);
}


function loadAssemblyOrderListPushUp(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp1");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist1').pullRefresh().endPullupToRefresh(); 
		},'json'
	);
}

function loadRecieverOrderListPushDown(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp2");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist2').pullRefresh().endPulldownToRefresh(); 
		},'json'
	);
}


function loadRecieverOrderListPushUp(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp2");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist2').pullRefresh().endPullupToRefresh(); 
		},'json'
	);
}

function loadCompleteOrderListPushDown(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp3");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist3').pullRefresh().endPulldownToRefresh(); 
		},'json'
	);
}


function  loadCompleteOrderListPushUp(){
	var context = this;
	mui.get(global_order_list_url,{type:"2"
		},function(data){
			if(data.code == global_code_success){
				var tabItem = document.getElementById("contwarp3");
				tabItem.innerHTML = getOrderListHtml(data.data);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist3').pullRefresh().endPullupToRefresh(); 
		},'json'
	);
}

var orderlistHtmlTmp = 
	'<li class="mui-table-view-cell">'+
		'<a class="mui-navigate-right orderList" value="{8}"  href="#">'+
			'<p>{0} <label style="padding-left: 10px;">{1}</label> <label class="mui-pull-right" style="padding-right: 20px;">{2}</label></p>'+
			'<p style="overflow:hidden;text-overflow:ellipsis;">{3} {4} {5} {6}</p>'+
			'<p style="overflow:hidden;text-overflow:ellipsis;">{7}</p>'+
		'</a>'+
	'</li>';
	
var getOrderListHtml = function(data){
	var orderlist = data;
	var orderlistHtml = '';
	for (var i = 0; i < orderlist.length; i++) {
		var order = orderlist[i];
		orderlistHtml += orderlistHtmlTmp.format(order.name, order.phone, order.orderTime,
		order.province, order.city, order.zone, order.address, order.goodList, order.orderId);
	}
	return orderlistHtml;
}

var customerInfoTmp = "{0} {1} {2}{3}{4}{5}";
	
//加载订单
function fetchOrderDetail(orderId){
	mui.get(global_order_detail_url,{orderId:orderId
		},function(data){
			if(data.code == global_code_success){
				var orderDtail = data.data;
				var name = orderDtail.name;
				var phone = orderDtail.phone;
				var province = orderDtail.province;
				var city = orderDtail.city;
				var zone = orderDtail.zone;
				var address = orderDtail.address;
				var customerInfo = customerInfoTmp.format(name, phone, province, city, zone, address);
				$("#goods_info_detail_customer").html(customerInfo);
				
				var orderNoHtml = '';
				var orderNos = orderDtail.orderNo;
				for (var i = 0; i < orderNos.length; i++) {
					orderNoHtml += orderNos[i];
					orderNoHtml += " ";
				}
				$("#orderNo").html(orderNoHtml);
				$("#modal").addClass('mui-active');
				$("#reOrderId").val(orderId);
			}
			else {
				// 异常提示
				 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
			}
			mui('#orderlist0').pullRefresh().endPulldownToRefresh(); 
		},'json'
	);
}