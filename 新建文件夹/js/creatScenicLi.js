$(function(){
	function createLi( XHR,i ){
		var oLi = createDom('li'),
			oA = createDom('a'),
			oImg = createDom('img'),
			oP = createDom('p'),
			oSpan = createDom('span');

		oA.setAttribute('href','./scenic.html?id='+XHR.id);
		oA.setAttribute('class','imgBorder');
		oImg.setAttribute('src','./image/'+XHR.name+i+'.jpg');
		oImg.setAttribute('alt',XHR.name);
		oA.appendChild(oImg);

		oSpan.innerHTML = '名称:';
		oP.appendChild(oSpan);
		oSpan = oSpan.cloneNode(true);
		oSpan.innerHTML = XHR.name;
		oP.appendChild(oSpan);
		oA.appendChild(oP);

		oP = oP.cloneNode(true);
		oP.getElementsByTagName('span')[0].innerHTML = '介绍:';
		oP.getElementsByTagName('span')[1].innerHTML = XHR.introduce;
		oA.appendChild(oP);
		oLi.appendChild(oA);

		return oLi;
	}

	function createDom( domName ){
		return document.createElement( domName );
	}
});