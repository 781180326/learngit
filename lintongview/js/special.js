$(function(){
	var dataNum = {
		history: 1,
		leisure: 2,
		geology: 3,
		humanity: 4,
		redCulture: 5,
		natural: 6
	};

	var selectUl = $('.selectUl'),
		selectLi = selectUl.children('li'),
		selectBox = $('.selectBox'),
		selectCard = selectBox.children('.selectCard');
		
	changeHash();

	selectLi.click(function( event ){
		var hash = $(this).children('a').eq(0).data('type');

		window.location.hash = hash;
		changeHash();
		event.preventDefault();
		return false;
	});


	function changeHash(){
		var hash = window.location.hash.slice(1),
			str = '[data-type ="'+ hash +'"]',
			selectHash = selectLi.children('li a'+str),
			activeLi = selectHash.parent(),
			activeCard = selectCard.eq(selectLi.index(activeLi)),
			card = activeCard.children('ul').eq(0),
		 	method, data, xmlUrl, XHR, dataType;


		card.html('');
		selectLi.removeClass('active');
		selectCard.removeClass('active');
		activeLi.addClass('active');
		activeCard.addClass('active');
		

		dataType = selectHash.data('type');
		method = 'get';
		data = { special: dataNum[dataType] };
		xmlUrl = 'php/selectBySpecial.php';
		XHR = getAjax(method, xmlUrl, data, getSpecialIdArray);

		function getSpecialIdArray(xml){
			var str = $.trim(String(xml));
		 	if(str==='none'){ return;}
		 	var XHRArr = str.split(',');
		 	var element;
		 	for( var i = 0, len = XHRArr.length; i < len; i++ ){
		 	 	method = 'get';
		 		data = { id: XHRArr[i] };
		 		xmlUrl = 'php/selectById.php';
		 		XHR = getAjax(method, xmlUrl, data, createAppendLi);
		 	 }
		 }

		 function createAppendLi(xml){
 			var json = $.trim(xml);
 			if(str==='none'){ return; }
 			if( json ){
 				var x = JSON.parse(json);
	 		 	element =  createLi(x,1);
				card.append(element);
 			}else{
 				console.log('none')
 			}
 		 }

	}

});