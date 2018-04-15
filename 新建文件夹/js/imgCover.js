$(function(){
	//imgcover
	var imgCover = function(){
		var cover = $('#imgCover');
		var coverImg = $('#imgCover img');
		var imgs = $('#scenic .scenicContent img');
		imgs.click(function(event) {
			coverImg.src = this.src;
			cover.css({display: 'block'});
		});

		cover.click(function(event) {
			$(this).css({display: 'none'});
		});
	}
	imgCover();
});