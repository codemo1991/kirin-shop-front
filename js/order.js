/*上拉*/
(function($) {
	$.ready(function() {
		mui.get(global_good_url,{
			},function(data){
				if(data.code == global_code_success){
					var tabItemHtml = '';
					var tabContentHtml = '';
					var anchorName = 'content';
					var goodList = data.data;
					
					for (var i = 0; i < goodList.length; i++) {
						 var item = goodList[i];
						 var anchor = anchorName + i;
						 tabItemHtml += getTabItemHtml(item,anchor);
						 
						 var content = item.goods;
						 tabContentHtml += getTabContentHtml(content, anchor);
					}
					
					var tabItem = document.getElementById("tab-item");	
					tabItem.innerHTML = tabItemHtml;
					tabItem.querySelector('.mui-control-item').classList.add('mui-active');
					
					var tabContent = document.getElementById("tab-content");
					tabContent.innerHTML = tabContentHtml;
					tabContent.querySelector('.mui-control-content').classList.add('mui-active');
					mui('.mui-numbox').numbox()
				}
				else {
					// 异常提示
					 mui.toast(global_request_error,{ duration:'long', type:'div' }) 
				}
			},'json'
		);
		
		document.getElementById("payBtn").addEventListener('tap', function() {
			var goodList = Object.create(local_goodList);
			goodList.id = '123';
			goodList.name = '测试测试';
			goodList.num = 'x1';
			
			var shopCarInfo = Object.create(local_shopCarInfo);
			shopCarInfo.totalPrice = '123';
			shopCarInfo.goodList[0] = goodList;
			shopCarInfo.goodList[1] = goodList;
			shopCarInfo.goodList[2] = goodList;
			shopCarInfo.goodList[3] = goodList;
			shopCarInfo.goodList[4] = goodList;
			// if (parseInt($('#total_price').text()) == 0) {
			// 	mui.toast('请选择购买商品!!!')
			// 	return;
			// }
			
			var btnArray = ['没想清楚', '确定下单'];
			let html = getShopCarHtml(shopCarInfo);
			mui.confirm(html, '商品清单', btnArray, function(e) {
				if(e.index == 1){
					mui.toast("你点击了确定");
				} 
				
			})
		});
	});
	
	
	
	var shopCarHtml = '<div style="background-color: #f9f9f9;height:200px ;overflow :auto;">'+
		   '<ul class="mui-table-view" style="background-color: #f9f9f9;">'+
			 '{0}'+
		   '</ul>'+
		'</div>'+
		'<div class="xq-bar-tab2">'+
		   '<div class="xq-bar-tab-item xq-bat-tab-item-margin">'+
			  '<span class="xq-bar-span">合计：</span>'+
			  '<span class="xq-submit-bar-price">¥<span class="xq-submit-bar-price xq-submit-bar-integer">{1}</span></span>'+
		   '</div>'+
		'</div>';
		
		var shopCarLi = '<li style="display:list-item;">'+
			'<div class="xq-div-table"> {0}</div>'+
			'<div class="xq-div-table2">'+
				'<span class="xq-tip-li">{1}</span>'+
			'</div>'+
		 '</li>';
	// 获取购物车内容
	var getShopCarHtml = function(data){
		var goodList = data.goodList;
		var lis = '';
		for (let g in goodList) {
			var shopCarLiTmp = shopCarLi;
			lis += shopCarLiTmp.format(goodList[g].name, goodList[g].num);
		}
		return shopCarHtml.format(lis, data.totalPrice);
	}
	
	//初始化左侧导航标签
	var getTabItemHtml = function(data, anchor){
		var tabItemTemp = '<a class="mui-control-item" href="#{0}">{1}</a>';
		var goodName = data.category;
		return tabItemTemp.format(anchor,goodName);
	}
	
	//初始化右侧内容
	var getTabContentHtml = function(data, anchor){
		var tabConentTemplateUl = '<ul class="mui-scroll mui-table-view">{0}</ul>';
		var tabConentTemplateDiv = '<div id="{0}" class="mui-control-content mui-scroll-wrapper">{1}</div>';
		var tabContentGoodList = '<div class="mui-collapse-content">'+
			'<div class="mui-row">'+
				'<div class="mui-col-sm-8">'+
				    '{0}'+
				    '<p class="mui-ellipsis">价格：{1}元</p>'+
					'<p class="mui-ellipsis">库存：{2}</p>'+
				'</div>'+
				'<div class="mui-numbox mui-pull-right" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100" style="width: 120px;height: 30px;">'+
					'<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>'+
					'<input class="mui-numbox-input" type="number" value="0" name ="{4}" />'+
				 '<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>'+
				'</div>'+
			'</div>'+
		  '</div>';
		var tabConentTemplateLi = '<li class="mui-table-view-cell mui-collapse"><a class="mui-navigate-right" href="#">{0}</a>{1}</li>';
		
		var tabContentLiHtml = '';
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			var goodName = item.name;
			var models = item.model;
			var modelHtml = '';
			if(typeof(models) != 'undefined' ){
				for (var j = 0; j < models.length; j++) {
					var modelItem = models[j];
					var tabContentGoodListTemp = tabContentGoodList;
					modelHtml += tabContentGoodListTemp.format(modelItem.name, modelItem.price, modelItem.store);
				}
			}
			var tabConentTemplateLiTmp = tabConentTemplateLi;
			tabContentLiHtml += tabConentTemplateLiTmp.format(goodName, modelHtml);
		}
		tabConentTemplateUl = tabConentTemplateUl.format(tabContentLiHtml);
		return tabConentTemplateDiv.format(anchor, tabConentTemplateUl);
	}
		
})(mui);