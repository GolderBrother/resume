window.onload = function(){
	var oBottom = document.getElementById('bottom');
	var oBgdio = document.getElementById('bgdio');
	var oBgbutdio = document.getElementById('butdio');
	var oBottomaaDiv = oBottom.getElementsByTagName('div');
	var aSpan = oBottomaaDiv[0].getElementsByTagName('span');
		oBottomaaDiv[0].onclick =function(){
			if( oBgdio.muted==false){
				aSpan[0].style.left= '0px';
				aSpan[1].style.left= '0px';
				aSpan[1].style.background= 'url(./img/index/jingyin.png)';
				oBgdio.muted = 1;
				oBgbutdio.muted =1;
			}else{
				aSpan[0].style.left= '32px';
				aSpan[1].style.left= '32px';
				aSpan[1].style.background= 'url(./img/index/bofang.png)';
				oBgdio.muted = 0;
				oBgbutdio.muted =0;
			}
		
		}
		oBottomaaDiv[1].onmouseover =function(){
			this.style.background = 'url(img/index/xuanku2.png) no-repeat left center';
			oBottomaaDiv[2].style.background = 'url(img/index/six2.png) no-repeat'
		}
		oBottomaaDiv[1].onmouseout =function(){
			this.style.background = 'url(img/index/xuanku.png) no-repeat left center';
			oBottomaaDiv[2].style.background = 'url(img/index/six.png) no-repeat'
		}
		oBottomaaDiv[3].onmouseover =function(){
			this.style.background = 'url(img/index/wenzi2.png) no-repeat right center';
			oBottomaaDiv[2].style.background = 'url(img/index/six2.png) no-repeat'
		}
		oBottomaaDiv[3].onmouseout =function(){
			this.style.background = 'url(img/index/wenzi.png) no-repeat right center';
			oBottomaaDiv[2].style.background = 'url(img/index/six.png) no-repeat'
		}

		oBottomaaDiv[1].onclick = function(){
			oBgbutdio.src="dio/sousou.mp3";
			oBgbutdio.autoplay="autoplay";
			setTimeout(function(){
				window.location.href="/cool/";
			},500)
		}
		oBottomaaDiv[3].onclick = function(){
			oBgbutdio.src="dio/sousou.mp3";
			oBgbutdio.autoplay="autoplay";
			setTimeout(function(){
				window.location.href="/sim/";
			},500)
		}

}