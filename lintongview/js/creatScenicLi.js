
	function createLi( XHR,i ){
		var oLi = createDom('li'),
			oA = createDom('a'),
			oImg = createDom('img'),
			oP = createDom('p'),
			oSpan = createDom('span');

		oA.setAttribute('href','./scenic.html?id='+XHR.scenic_id);
		oA.setAttribute('class','imgBorder');
		oImg.setAttribute('src','./img/'+XHR.scenic_name + '/' + XHR.scenic_name +i+'.jpg');
		oImg.setAttribute('alt',XHR.scenic_name);
		oA.appendChild(oImg);

		oSpan.innerHTML = '名称:';
		oP.appendChild(oSpan);
		oSpan = oSpan.cloneNode(true);
		oSpan.innerHTML = XHR.scenic_name;
		oP.appendChild(oSpan);
		oA.appendChild(oP);
		oP = oP.cloneNode(true);
		oP.getElementsByTagName('span')[0].innerHTML = '介绍:';
		oP.getElementsByTagName('span')[1].innerHTML = XHR.scenic_intro;
		oA.appendChild(oP);
		oLi.appendChild(oA);

		return oLi;
	}

	function createDom( domName ){
		return document.createElement( domName );
	}
