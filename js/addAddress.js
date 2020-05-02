/*上拉*/
(function($) {

	$.ready(function() {
		var cityPicker2 = new $.PopPicker({
			layer: 3
		});
		
				
		cityPicker2.setData(cityData3);
		
		var proviceButton = document.getElementById('province');
		var cityPickerButton = document.getElementById('city');
		var areaPickerButton = document.getElementById('area');
		
		proviceButton.addEventListener('tap', function(event) {
			cityPicker2.show(function(items) {
				proviceButton.value = _getParam(items[0], 'text');
				cityPickerButton.value = _getParam(items[1], 'text');
				areaPickerButton.value = _getParam(items[2], 'text');
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		
		cityPickerButton.addEventListener('tap', function(event) {
			cityPicker2.show(function(items) {
				proviceButton.value = _getParam(items[0], 'text');
				cityPickerButton.value = _getParam(items[1], 'text');
				areaPickerButton.value = _getParam(items[2], 'text');
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		
		areaPickerButton.addEventListener('tap', function(event) {
			cityPicker2.show(function(items) {
				proviceButton.value = _getParam(items[0], 'text');
				cityPickerButton.value = _getParam(items[1], 'text');
				areaPickerButton.value = _getParam(items[2], 'text');
				//返回 false 可以阻止选择框的关闭
				//return false;
			});
		}, false);
		
		smartMatchAddress.addEventListener('tap', function(event) {
			let value = mui('#addressDetail')[0].value;
			let parse_list = parse(value);
			let html = '';
			for (let key in parse_list) {
				if (parse_list[key]) {
					html += `<p>` + key + `:` + parse_list[key] + `</p>`
				}
			}
			mui('#receiver')[0].value = parse_list['name'];
			mui('#phone')[0].value = parse_list['mobile'];
			mui('#detail_area')[0].value = parse_list['addr'];
			mui('#province')[0].value = parse_list['province'];
			mui('#city')[0].value = parse_list['city'];
			mui('#area')[0].value = parse_list['area'];
		},false);
		
	});
	
	var _getParam = function(obj, param) {return obj[param] || '';};
	parseArea(areaList);
	
})(mui);