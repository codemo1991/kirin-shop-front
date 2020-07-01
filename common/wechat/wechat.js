var jweixin = require('@/components/jweixin-module/index');  

export default  {  
	
	//判断是否在微信中
	isWechat:function(){  
	    var ua = window.navigator.userAgent.toLowerCase();  
	    if(ua.match(/micromessenger/i) == 'micromessenger'){  
	        return true;  
	    }else{  
	        return false;  
	    }  
	},
	
	 login(redirect_uri) {
		if (!this.isWechat()) {
			console.log('不是微信客户端')
			return;
		}
		let oUrl = window.location.href;
		window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdc7a140fc01efe8e'+
			`&redirect_uri=`+oUrl+`&response_type=code&scope=snsapi_userinfo&state=1`;
		throw 'stop';
	}
}

