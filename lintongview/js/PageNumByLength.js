function pageNumByLength( num ){	
	if(num > 1){
		var page = document.createElement('div');
		var pageWarp = page.cloneNode();
		var pagePrev = document.createElement('a');
		var pageNext = pagePrev.cloneNode();
		page.setAttribute('id', 'page');
		pagePrev.setAttribute('class', 'pagePrev');
		pagePrev.setAttribute('href', '');
		pagePrev.innerHTML = '上一页';
		pageNext.setAttribute('class', 'pageNext');
		pageNext.setAttribute('href', '');
		pageNext.innerHTML = '下一页';
		pageWarp.appendChild(pagePrev);
		for(var i = 1; i <= num; i++){
			var pageNum = pagePrev.cloneNode();
			pageNum.setAttribute('class', 'pageNum');
			pageNum.setAttribute('href','');
			pageNum.setAttribute('data-page',i);
			pageNum.innerHTML = i;
			pageWarp.appendChild( pageNum );
		}
		pageWarp.appendChild( pageNext );
		page.appendChild(pageWarp);
		return page;
	}
}
