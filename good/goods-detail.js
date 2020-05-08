/*上拉*/
(function($) {
	$.ready(function() {
		
	});
	
	mui.get(global_good_detail_url,{"goodId":"1"
		},function(data){
			if(data.code == global_code_success){
				
			}
			else {
				// 异常提示
				 mui.toast(data.msg,{ duration:'long', type:'div' }) 
			}
		},'json'
	);
	
	
	
	
})(mui);