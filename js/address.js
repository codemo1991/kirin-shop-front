/*上拉*/
(function($) {
	$.ready(function() {
		mui.get(global_address_url,{
			},function(data){
				if(data.code == global_code_success){
					var tabItem = document.getElementById("addressList");
					tabItem.innerHTML = getAddressListHtml(data.data);
				}
				else {
					// 异常提示
					 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
				}
			},'json'
		);
	});
	
	// 获取收件人地址列表
	var addressLiTmp = 
	'<li class="mui-table-view-cell">'+
	    '<a class="mui-navigate-right" href="list1.html">'+
	       '<p>{0} <label class="mui-pull-right" style="padding-right: 20px;">{1}</label></p>'+
	       '<p>{2} {3} {4}</p>'+
	       '<p>{5}</p>'+
	    '</a>'+
	'</li>'
	var getAddressListHtml = function(data){
		var liHtml = '';
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			liHtml += addressLiTmp.format(item.name, item.phone, item.province, item.city,
			item.zone, item.address);
		}
		console.log(liHtml);
		return liHtml;
	}
		
})(mui);