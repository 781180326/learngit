$(function(){
	//nav
	var navAnimate = function(){
		var navLiA =  $('#nav>li>a'),
			navUlList = null,
			lenUlList = 0;
		
		navLiA.mouseover(function(event){
			navUlList = $(this).nextAll('.subnav').children('ul').children('li');
			lenUlList = navUlList.length;
			for(var i = 0; i < lenUlList; i++){
				navUlList.eq(i).css({marginLeft: i*20 + 'px'}).animate({marginLeft:0}, i*80);
			}
		});
	
	}
	navAnimate();

	//景区舒适度轮播
	var jqssdNav = function(){
		var nav = $('.jq-ssd ul'),
			top = nav.position().top,
			navList = nav.children('li'),
			len = navList.length,
			height = navList.height(),
			i = 0,
			speed = 0,
			interval = null,
			NavUp = null;

		NavUp = function(){
			++i;
			if( i >= len  ) i = 0; 
			speed = top - i * height + 'px';
			nav.animate( { top: speed },200 );
		}
		interval = setInterval(NavUp, 3000);
	}
	jqssdNav();
});