/*上拉*/
(function($) {
	$.ready(function() {
		
	});
	
	mui.get(global_index_url,{
		},function(data){
			if(data.code == global_code_success){
				var gallery = data.data.gallerys;
				var noticeDto = data.data.noticeDto;
				var recGoodDto = data.data.recGoods;
				var html = getSliderImg(gallery);
				var sliderImg = document.getElementById("slider_img");
				sliderImg.innerHTML = html;
				
				var sliderIndicator = document.getElementById("slider_indicator");
				var indicatorHtml = getIndicatorHtml(gallery);
				sliderIndicator.innerHTML = indicatorHtml;
				
				var noticeHtml = getNoticeContentHtml(noticeDto);
				var notice = document.getElementById("notice-content");
				notice.innerHTML = noticeHtml;
				
				var recGoods = document.getElementById("rec_goods");
				var recGoodsHtml = getRecGoodHtml(recGoodDto);
				recGoods.innerHTML = recGoodsHtml;
				
				
			}
			else {
				// 异常提示
				 mui.toast(data.msg,{ duration:'long', type:'div' }) 
			}
		},'json'
	);
	
	/**
	 * 公告
	 */
	var noticeContentHtml = '<span><span style="color: #e60012">{0}</span>{1}</span>';
	var getNoticeContentHtml = function(data){
		var noticeShort = data.noticeShort;
		var noticeDetail = data.noticeDetail;
		return noticeContentHtml.format(noticeShort, noticeDetail);
	}
	
	/**
	 * @param {Object} 
	 * 轮播图圆点
	 */
	var firstIndicator = '<div class="mui-indicator mui-active"></div>';
	var otherIndicator = '<div class="mui-indicator"></div>';
	var getIndicatorHtml = function(gallerys){
		var firstHtml = '';
		var otherHtml = '';
		for (var i = 0; i < gallerys.length; i++) {
			var gallery = gallerys[i];
			if(i == 0 ){
				firstHtml = firstIndicator;
			} else {
				otherHtml += otherIndicator;
			}
		}
		return firstHtml+otherHtml;
	}
	
	
	/**
	 * 轮播图
	 */
	var sliderImgTempDuplicate = '<div class="mui-slider-item mui-slider-item-duplicate">'+
									'<a href="{0}">'+
										'<img style="width: 100%;" src="{1}">'+
									'</a>'+
								'</div>';
	var sliderImgTemp = '<div class="mui-slider-item">'+
							'<a href="{0}">'+
								'<img style="width: 100%;" src="{1}">'+
							'</a>'+
						'</div>';
	
	/**
	 * @param {Object} gallerys
	 * 获取首页轮播图
	 */
	var getSliderImg = function(gallerys){
		var rlt = '';
		var firstRlt = '';
		var lastRlt = '';
		for (var i = 0; i < gallerys.length; i++) {
			var gallery = gallerys[i];
			if(i == 0 ){
				lastRlt = sliderImgTempDuplicate.format(gallery.url,gallery.imgUrl);
			} 
			rlt += sliderImgTemp.format(gallery.url,gallery.imgUrl);
			if(i == gallerys.length - 1){
				firstRlt = sliderImgTempDuplicate.format(gallery.url,gallery.imgUrl);
			}
		}
		var finalRlt = firstRlt + rlt + lastRlt;
		return finalRlt;
	}
	
	/**
	 * 获取推荐商品
	 */
	var recGoodHtmlTemp = '<div class="goods-row col-3">{0}</div>';
	var recGoodItemTemp = '<a class="goods-item__link">'+
						'<div class="goods-item__img" style="background-color: #FFFFFF;">'+
							'<img style="height: 100%;" src="{0}">'+
						'</div>'+
						'<div class="goods-item__descr">'+
							'{1}'+
						'</div>'+
						'<div class="goods-item__attr">'+
							'<span class="model">型号：{2}</span>'+
						'</div>'+
						'<div class="goods-item__price">'+
							'<span class="price-now">￥{3}</span>'+
						'</div>'+
					'</a>';
				
	var getRecGoodHtml = function(recGoods){
		var recGoodHtml = '';
		var recGoodHtmlShadow = '';
		for (var i = 1; i < recGoods.length + 1; i++) {
			var recGood = recGoods[i-1];
			recGoodHtmlShadow += recGoodItemTemp.format(recGood.imgUrl, recGood.goodName,'',recGood.price);
			
			if(i % 3 == 0){
				recGoodHtml = recGoodHtmlTemp.format(recGoodHtmlShadow);
				recGoodHtmlShadow = '';
			} else{
				if(i == recGoods.length){
					recGoodHtml += recGoodHtmlTemp.format(recGoodHtmlShadow);
				}
			}
			
		}
		return recGoodHtml;
	}
	
})(mui);