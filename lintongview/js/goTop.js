function bufferGoTop(obj,endFn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){

		var iBtn = true;
		var cur = obj.scrollTop;
		var iTarget = 0;
		var speed = ( iTarget - cur ) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if( cur != iTarget){
			cur = cur + speed;				
			if(cur > iTarget && speed > 0 || cur < iTarget && speed < 0) {
				cur = iTarget;
			}else{
				iBtn = false;
			}
			obj.scrollTop = cur + 'px';
		}
		if(iBtn){
			clearInterval(obj.timer);
			endFn && endFn.call(obj);
		}
	}, 50);
}

$(function(){
	var goTop = document.getElementById('goTop');
	var body = document.documentElement || document.body;
	goTop.addEventListener('click',function(){ bufferGoTop( body ) },false);
})