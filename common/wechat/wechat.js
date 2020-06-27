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
	
	async login() {
		let oUrl = window.location.href;
		window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdc7a140fc01efe8e'+
			`&redirect_uri=http://www.ricebuy.cn/#/pages/public/login&response_type=code&scope=snsapi_userinfo&state=` +
			oUrl;
		throw 'stop';
	}
}

