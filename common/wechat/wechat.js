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
	
	 login(referrerId) {
		if (!this.isWechat()) {
			console.log('不是微信客户端')
			return;
		}
		let oUrl = "https://www.ricebuy.cn/v1/pages/public/login?referrerId="+referrerId;
		window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a6616e81e1c35e0'+
			`&redirect_uri=`+oUrl+`&response_type=code&scope=snsapi_userinfo&state=1`;
		throw 'stop';
	}
}

