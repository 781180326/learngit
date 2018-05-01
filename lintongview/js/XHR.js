
	var XHR = (function(){
		var XMLHttp = function(){ return new XMLHttpRequest(); },
			ActiveHttp = function(){ return new ActiveXObject("Microsoft.XMLHTTP")};
		try{
			XMLHttp();
			XHR = XMLHttp;
		}catch(err){
			XHR = ActiveHttp;
		}

		return XHR;
	})();

	var getAjax = function( method,url,data,callback){
		var XML = XHR();
		if(  method.toLowerCase() === 'get' ){
			url += '?';
			for( var name in data ){
				url += name + '=' + data[name] + '&';
			}
			url = url.replace(/\&*$/g,'');
			XML.open( 'get', url );
			XML.send();
		}else if( method.toLowerCase() === 'post' ){
			XML.open( 'post', url );
			XML.send( data );
		}

		XML.onreadystatechange = function(){
			if( XML.readyState == 4 ){
				if ( XML.status == 200 ){
					callback && callback(XML.responseText);
				}else{
					console.log( 'XML.status != 200');	
				}
				
			}
		}
	}
