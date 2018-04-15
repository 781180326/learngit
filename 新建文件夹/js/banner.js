$(function(){
	//轮播图
	var bannerInterval = function(){
		var banner = $('.banner'),
			bannerPort = $('.banner .banner-port'),
			bannerPoint = $('.banner .banner-point li'),
			prev = $('.banner .prev'),
			next = $('.banner .next'),
			len = bannerPoint.length,
			i = 0,
			bannerWidth = 0,
			left = bannerPort.position().left,
			interval = null,
			bannerFun = null;

		bannerFun = function(){
			bannerWidth = banner.width();
			++i;
			if( i >= len  ) i = 0; 
			if( i <= -1 ) i = len - 1; 
			speed = left - i * bannerWidth + 'px';
			bannerPort.animate( { left: speed },1000 );
			bannerPoint.removeClass('active');
			bannerPoint.eq(i).addClass('active');
		}
		interval = setInterval(bannerFun, 3000);

		banner.mouseover(function(event) {
			clearInterval(interval);
			interval = null;
		});
		banner.mouseout(function(event) {
			interval = setInterval(bannerFun, 3000)
		});
		bannerPoint.click(function(event) {
			 i = bannerPoint.index(this) - 1;
			 bannerFun();
		});
		prev.click(function(event){
			i-=2;
			bannerFun();
		});
		next.click(function(event){
			bannerFun();
		});
		
	};
	bannerInterval();
});