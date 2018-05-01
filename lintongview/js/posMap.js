$(function(){
	var posMap = function(){
		var BMapDiv = $("<div id='BMap'></div>");
		var map = $("<div id='map'></div>");
		BMapDiv.css({
			width: '400px',
			height: '0',
			position: 'fixed',
			display: 'none',
			top: '10px',
			left: '50%'
		});
		map.css({ 
			width: '100%', 
			height: '100%' 
		});
		BMapDiv.append(map);
		$('body').append(BMapDiv);

		//地图
	   	var map = new BMap.Map("map");
	   	map.enableScrollWheelZoom(true); 

	   	console.log($('.pos').length);
		//获取data-pos数据
		$('.pos').click(function(event){
			if($(this).data('pos')){
				console.log( $(this).data('pos'));
				map.clearOverlays();
				var pos = $(this).data('pos').replace(/ */g,'');
				var pos_x = parseFloat(pos.split(',')[0]);
				var pos_y = parseFloat(pos.split(',')[1]);
				var point = new BMap.Point(pos_x,pos_y);
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				BMapDiv.css('display', 'block');
				BMapDiv.animate({ 'height': '400px' }, 600, function(){ 
					marker.setAnimation(BMAP_ANIMATION_BOUNCE);
					map.centerAndZoom(point, 15);
				});
			}else{
				console.log("无pos数据");
			}
			event.stopPropagation();
			return false;
		});

		
		$(BMapDiv).click(function(event){
			event.stopPropagation();
			return false;
		});
		$(document).click(function(){ BMapDiv.animate({ 'height': 0 }, 600, function(){
			BMapDiv.css('display', 'none');
		});});
	};


	function tim(){
		var i = $('.pos').length;
		if( i == 0 ){
			timer = setTimeout( tim, 1000 );
		}else{
			clearTimeout(timer);
			posMap();
		}
	}
	var timer = setTimeout(tim,1000);
	
});