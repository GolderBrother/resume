window.onload = function () {

	function opa(obj, num) {
		obj.style.WebkitOpacity = num;
		obj.style.MozOpacity = num;
		obj.style.OOpacity = num;
		obj.style.opacity = num;
	}
	/*右上角音乐图标开始*/
	var oDio = document.getElementById('dio');	//获取音乐最大的ID
	var aNavDio = oDio.getElementsByTagName('div');	//获取右上角的声音关闭和开启的div
	var aNavSpan = aNavDio[0].getElementsByTagName('span');//获取右上角的声音关闭和开启
	var aDioAudio = oDio.getElementsByTagName('audio');//获取各种声音的地方

	aNavDio[0].onclick = function () {			//当声音关闭和开启点击的时候
		if (aDioAudio[0].muted == false) {		//如果声音是开启的
			dioAuto('0px', 'jingyin', 1);
		} else {						//如果声音是关闭的
			dioAuto('32px', 'bofang', 0);
		}
	}
	/*音乐执行函数*/
	function dioAuto(a, b, c) {
		aNavSpan[0].style.left = a;	//那么右上角的声音的背景往左移到0px地方
		aNavSpan[1].style.left = a;	//那么右上角的声音的音乐图标往左移到0px地方
		aNavSpan[1].style.background = 'url(img/index/' + b + '.png)';//声音图标换成静音的样式
		for (var i = 0; i < aDioAudio.length; i++) {
			aDioAudio[i].muted = c;	//将所有声音开启，或者关闭
		}
	}
	/*右上角音乐图标结束*/

	/*开机动画开始*/
	var oAin = document.getElementById('ain');			//获取开机最大的div
	var aBar1 = getElementsByClassName(oAin, 'div', 'bar1')[0];	//进度条左边的圆
	var aBar2 = getElementsByClassName(oAin, 'div', 'bar2')[0];	//进度条右边的圆
	var aAinJd = getElementsByClassName(oAin, 'span', 'jd')[0];	//百分之几

	var oHeader = document.getElementById('header');	//获取导航位置
	var aHeDiv = oHeader.getElementsByTagName('div')[0];//获取导航的第一个div（用于进度条执行完毕后的动作）

	/*进度条执行*/
	aBar1.num = 180;	//进度条左边的圆的平面旋转是180
	aBar2.num = 181;	//进度条右边的圆的平面旋转是181
	aAinJd.num = 0;		//开始是百分之0

	aBar1.timer = setInterval(function () {//开启左边的定时器
		aBar3Auto(aBar1, 50, function () {	//执行函数
			clearInterval(aBar1.timer);	//停止掉定时器，不然会出现bug
			setInterval(aBar2Auto, 1);	//然后开始执行第二个定时器
		})
	}, 1);

	function aBar2Auto() {
		aBar1.num = 0;		//左边的圆旋转度数就等于0
		aBar3Auto(aBar2, 100, function () {
			clearInterval(aBar2Auto);	//就停止掉定时器
			oAin.style.display = 'none';//开机画面隐藏
			aHeDiv.style.top = '0px';	//头顶导航往下移动
		});
	}

	/*需要的秒数*/
	var aAinCon = getElementsByClassName(oAin, 'span', 'con1')[0];//了解一个人部分需要的秒数
	aAinCon.num = 0;	//最先为0秒
	aAinCon.timer = setInterval(function () {
		aAinCon.num++;	//不断的加秒数
		aAinCon.innerHTML = aAinCon.num;//然后赋值回去
	}, 1000)//每一秒钟增加一个

	/*进度条执行函数*/
	function aBar3Auto(a, b, fn) {
		a.num -= 2;		//左右边的圆旋转不断的减
		aAinJd.num += 0.275;	//百分进度条不断的加0.275
		if (a.num < 0) {	//如果圆旋转度数小于或者等于0
			a.num = 0;	//那么旋转度数等于0
			aAinJd.num = b;	//那么进度条走到了百分之100
			clearInterval(aAinCon.timer);//就停止掉定时器
			fn && fn();
		}
		aAinJd.innerHTML = parseInt(aAinJd.num);//进度条不断的赋值给innerHTML，并且因为是小数，所以取值为整数
		a.style.WebkitTransform = 'rotate(' + a.num + 'deg)';//兼容webkit度数不断的赋值
		a.style.MozTransform = 'rotate(' + a.num + 'deg)';//兼容moz度数不断的赋值
		a.style.oTransform = 'rotate(' + a.num + 'deg)';	//兼容o度数不断的赋值
		a.style.Transform = 'rotate(' + a.num + 'deg)';	//兼容标准浏览器不断的赋值

	}
	/*开机动画结束*/

	/*导航点击开始*/
	var aHeaderLi = oHeader.getElementsByTagName('li');	//获取导航部分的li按钮
	var aHeaderLiOnoff;	//自定义一个开关（暂时没用）


	/*--工作经历页面开始--*/
	var oWork = document.getElementById('work');	//获取工作经历最大的div
	var oWork1 = document.getElementById('work1');	//获取工作经历第二大的div
	var aWork2 = oWork.getElementsByClassName('work2')[0];//获取工作经历第三大的div
	var aCutufo = oWork.getElementsByClassName('cutufo')[0];//获取工作经历的ufo的div
	var aShake = oWork.getElementsByClassName('shake')[0];//获取工作经历的光线爆炸效果div
	var aPort1 = oWork.getElementsByClassName('port1')[0];//获取工作经历不断转的圆圈
	var aPort2 = oWork.getElementsByClassName('port2')[0];
	var oColl = document.getElementById('coll');	//获取首页轮播第一个DIV
	var oColl1 = document.getElementById('coll1');	//获取首页轮播第二个DIV
	var oXxbg = document.getElementById('xxbg');	//获取自我描述轮播第一个DIV
	var oXxbg1 = document.getElementById('xxbg1');	//获取自我描述轮播第二个DIV
	var aBot1 = oXxbg1.getElementsByClassName('xxbot1');//获取自我描述页面最后的焦点样式
	var _this1 = 1;

	oWork1.num = 0;
	oColl1.num = 0;
	oXxbg1.num = 0;
	aHeaderLi[1].onoff = true;
	aHeaderLi[2].onoff = true;
	for (var i = 0; i < aHeaderLi.length; i++) {
		aHeaderLi[i].num = 1;
	}
	aHeaderLi[1].onclick = aHeaderLi1;
	aHeaderLi[2].onclick = aHeaderLi2;

	oWork.style.height = document.body.clientHeight + 'px';//工作经历页面的高度等于body的可视区高度
	function aHeaderLi0() {
		tionAuto(aHeaderLi[0], oColl, '');
		if (_this1 == 2) {
			aaaaAuto(2, 3, 1, oWork1, aHeaderLi[1], 3, 2, 1, oColl, null, aHeaderLi1, aHeaderLi2);
		} else if (_this1 == 3) {
			aaaaAuto(2, 1, 3, oXxbg1, aHeaderLi[2], 3, 1, 2, oColl, null, aHeaderLi1, aHeaderLi2);
		}
		_this1 = 1;
	}

	function aHeaderLi1() {
		tionAuto(aHeaderLi[1], oWork, '');
		if (_this1 == 1) {
			aaaaAuto(3, 2, 1, oColl1, aHeaderLi[0], 2, 3, 1, oWork, aHeaderLi0, null, aHeaderLi2);
		} else if (_this1 == 3) {
			aaaaAuto(1, 2, 3, oXxbg1, aHeaderLi[2], 1, 3, 2, oWork, aHeaderLi0, null, aHeaderLi2);
		}
		aWork2.className = 'work2 hover';
		if (aHeaderLi[1].onoff == true) {
			setTimeout(function () {
				aDioAudio[3].play();
			}, 100)
			setTimeout(function () {
				aDioAudio[2].play();
			}, 500)
			shakeAuto();
			aHeaderLi[1].onoff = false;
		}

		_this1 = 2;
	}

	function aHeaderLi2() {
		tionAuto(aHeaderLi[2], oXxbg, 'hover');

		if (_this1 == 1) {
			aaaaAuto(3, 1, 2, oColl1, aHeaderLi[0], 2, 1, 3, oXxbg, aHeaderLi0, aHeaderLi1, null);
		} else if (_this1 == 2) {
			aaaaAuto(1, 3, 2, oWork1, aHeaderLi[1], 1, 2, 3, oXxbg, aHeaderLi0, aHeaderLi1, null);
		}
		oXxbg.className = 'hover';
		if (aHeaderLi[2].onoff == true) {
			aDioAudio[6].play();
			setTimeout(function () {
				aDioAudio[5].play();
			}, 1000)
			setTimeout(function () {
				var aBot1List = [].slice.call(aBot1);
				for (let index = 0, len = aBot1List.length; index < len; index++) {
					const element = aBot1List[index];
					element.style.display = 'none';
				}
				aHeaderLi[2].onoff = false;
			}, 3500)


		}
		_this1 = 3;
	}

	function aaaaAuto(a, b, c, d, e, h, f, k, l, z, x, v) {
		oColl.style.zIndex = a;
		oWork.style.zIndex = b;
		oXxbg.style.zIndex = c;
		clearInterval(d.timer);	//停止掉定时器
		d.timer = setInterval(function () {
			e.num -= 0.04	//第二个div不断的隐藏
			d.num += 15;		//第二个div不断的扩大15px
			if (d.num >= 400) {	//如果第二个扩大到了400px
				e.num = 1;	//那么第二个div的显示（初始化）
				d.num = 0;			//第二个div放大为0px（初始化）
				oColl.style.zIndex = h;	//第一个的层级为1
				oWork.style.zIndex = f;	//第二个的层级为0
				oXxbg.style.zIndex = k;
				opa(l, 1)			//第一个div显示出来
				aHeaderLi[0].onclick = z;	//把当前的onclick事件清空
				aHeaderLi[1].onclick = x;	//给第一个LI增加点击事件
				aHeaderLi[2].onclick = v;	//给第二个LI增加点击事件
				clearInterval(d.timer);//停止掉定时器
			}
			opa(d, e.num);	//不断的隐藏第二个div
			//d.style.WebkitTransform = 'translateZ('+d.num+'px)';//不断的放大第二个div
			transformAuto(d, d.num);
		}, 10)

	}
	/*初始化*/
	function tionAuto(obj, obj1, a) {
		for (var i = 0; i < aHeaderLi.length; i++) {//循环下所有的li
			aHeaderLi[i].className = '';	//把hover清空
		}
		obj.className = 'hover';	//给当前的li增加hover;

		/*初始化 //oColl oWork oXxbg */
		aDioAudio[1].play();//按钮声音播放
		transformAuto(oColl1, 0);
		transformAuto(oWork1, 0);
		transformAuto(oXxbg, 0);
		opa(obj1, 1);	//第二个为显示
		oXxbg1.className = a;

	}

	function transformAuto(obj, a) {
		obj.style.WebkitTransform = 'translateZ(' + a + 'px)';
		obj.style.MozTransform = 'translateZ(' + a + 'px)';
		obj.style.OTransform = 'translateZ(' + a + 'px)';
		obj.style.transform = 'translateZ(' + a + 'px)';

	}
	function aBot1Auto() {

	}
	/*导航点击结束*/

	// 调整coll盒子宽高(适应屏幕)
	function resizeCollSize() {
		oColl.style.width = document.body.clientWidth + 'px';
		oColl.style.height = document.body.clientHeight + 'px';
		oColl1.style.width = document.body.clientWidth + 'px';
		oColl1.style.height = document.body.clientHeight + 'px';
	}

	//工作经历页面的高度等于body的可视区高度
	function resizeWorkSize() {
		oWork.style.width = document.body.clientWidth + 'px';
		oWork.style.height = document.body.clientHeight + 'px';
	}

	window.addEventListener('resize', function () {
		resizeCollSize();
		resizeWorkSize();
	});


	/*轮播效果开始*/
	var aDian = getElementsByClassName(oColl, 'div', 'dian');
	var aCollUl = oColl.getElementsByClassName('coll_ul')[0];
	var oCollLi = getElementsByClassName(oColl, 'li', 'coll_li');
	var oBg3Ul = getElementsByClassName(oColl, 'ul', 'bg3_ul');
	var oBg1 = getElementsByClassName(oColl, 'div', 'bg1');
	var oBg3Li = oBg3Ul[0].getElementsByTagName('li');
	var oXian = getElementsByClassName(oColl, 'ul', 'xian')[0];
	var aSvg = oColl.getElementsByClassName('svg1');
	var aCollTop = oColl.getElementsByClassName('top');
	var aQx222 = oColl.getElementsByClassName('qx222');
	/*遮罩层开始*/
	var oMask = document.getElementById('mask');
	var oCase = document.getElementById('case');
	var oCaseLi = oCase.getElementsByTagName('li');
	var aClose = oCase.getElementsByClassName('close');
	var aRiT = oColl.getElementsByClassName('ri_t');
	/*遮罩层结束*/

	resizeCollSize();

	for (var i = 0; i < oCollLi.length; i++) {
		aQx222[i].index = i;
		aClose[i].index1 = i;
		aDianAuto(aDian[i], 2, 180, 'span');

		oCollLi[i].onOff = true;
		oCollLi[i].index = i;
		aCollUl.num = 0;
		oCollLi[i].onclick = LiClick;
		// LiAuto(oCollLi[i]);
		au111(i);
		oCollLi[i].onmouseover = oCollLiOver;
		oCollLi[i].onmouseout = oCollLiOut;
		oCollLi[i].style.left = -100 + 520 * i + 'px';

		aRiT[i].onmouseover = function () {
			for (var i = 0; i < oCollLi.length; i++) {
				oCollLi[i].onclick = null;
			}
		}
		aRiT[i].onmouseout = function () {
			for (var i = 0; i < oCollLi.length; i++) {
				oCollLi[i].onclick = LiClick;
			}
		}

		aQx222[i].onclick = function () {
			oMask.style.display = 'block';
			oCase.style.display = 'block';
			for (var i = 0; i < oCaseLi.length; i++) {
				oCaseLi[i].className = ''
			}
			oCaseLi[this.index].className = 'hover';
		}
		aClose[i].onclick = function () {
			oMask.style.display = 'none';
			for (var i = 0; i < oCaseLi.length; i++) {
				oCaseLi[i].className = ''
			}
			oCaseLi[this.index1].className = '';
		}
		// oMask.onclick = function(){
		// 	oMask.style.display = 'none';
		// 	oCase.style.display = 'none';
		// 	for(var i=0;i<oCaseLi.length;i++){
		// 		oCaseLi[i].style.display = 'none';
		// 	}
		// }
		oMask.addEventListener('click', function (e) {
			e.preventDefault();
			oMask.style.display = 'none';
			oCase.style.display = 'none';
		}, false);
	}

	for (var i = 0; i < oCollLi.length - 1; i++) {
		oXian.innerHTML += '<li><div></div></li>';
	}
	var oXianLi = oXian.getElementsByTagName('li');
	for (var i = 0; i < oXianLi.length; i++) {
		oXianLi[i].style.left = 160 + i * 520 + "px";
	}
	oXianLi[0].style.left = '160px';
	function aDianAuto(obj, iDeg, len, o) {
		var sHtml = "";
		for (var i = 0; i < len; i++) {

			sHtml += "<" + o + " style='-webkit-transform:rotate(" + iDeg * i + "deg);-moz-transform:rotate(" + iDeg * i + "deg);-o-transform:rotate(" + iDeg * i + "deg);-ms-transform:rotate(" + iDeg * i + "deg);transform:rotate(" + iDeg * i + "deg)'></" + o + ">"
		}
		obj.innerHTML = sHtml;
	}

	function oCollLiOver() {
		this.style.WebkitOpacity = 1;
		this.style.MozOpacity = 1;
		this.style.OOpacity = 1;
		this.style.opacity = 1;
	}
	function oCollLiOut() {
		this.style.WebkitOpacity = 0.3;
		this.style.MozOpacity = 0.3;
		this.style.OOpacity = 0.3;
		this.style.opacity = 0.3;
	}

	function bg1Auto(obj, a, obj2, b) {
		setTimeout(function () {
			obj.style.WebkitOpacity = a;
			obj.style.MozOpacity = a;
			obj.style.OOpacity = a;
			obj.style.opacity = a;
			obj2.style.display = b;
		}, 400)
	}
	oXianNb();//让线闪烁
	function oXianNb() {
		setTimeout(function () {
			oXian.style.display = 'none';
			setTimeout(function () {
				oXian.style.display = 'block';
				setTimeout(function () {
					oXian.style.display = 'none';
					setTimeout(function () {
						oXian.style.display = 'block';
						setTimeout(function () {
							oXian.style.display = 'none';
							setTimeout(function () {
								oXian.style.display = 'block';
								setTimeout(function () {
									oXian.style.display = 'none';
									setTimeout(function () {
										oXian.style.display = 'block';
										setTimeout(function () {
											oXian.style.display = 'none';
											setTimeout(function () {
												oXian.style.display = 'block';
											}, 50)
										}, 50)
									}, 50)
								}, 50)
							}, 50)
						}, 50)
					}, 50)
				}, 50)
			}, 50)
		}, 50)
	}

	setTimeout(function () {
		for (var i = 0; i < oCollLi.length; i++) {
			oCollLi[i].style.WebkitTransition = '1s';
			oCollLi[i].style.MozTransition = '1s';
			oCollLi[i].style.OTransition = '1s';
			oCollLi[i].style.MsTransition = '1s';
			oCollLi[i].style.transition = '1s';
		}
	}, 100);

	function bg1Auto1(obj, d) {
		setTimeout(function () {
			obj.style.display = d;
		}, 400)
	}



	var aBut = document.getElementsByClassName('but')[0];
	var str = '';
	for (var i = 0; i < oCollLi.length; i++) {
		str += '<li></li>';
	}
	aBut.innerHTML = str;
	var aButLi = aBut.getElementsByTagName('li');
	var _this;
	var _othis;

	for (var i = 0; i < aButLi.length; i++) {
		aButLi[i].index = i;
		aButLi[i].onOff = true;
		aButLi[i].onclick = aButAuto;

		function aButAuto() {
			_othis = this;

			if (aButLi[_othis.index].onOff == true) {
				for (var i = 0; i < aButLi.length; i++) {
					oXian.style.display = 'none';
					oCollLi[i].className = 'coll_li';
					bg1Auto(oBg1[i], 1, oBg3Ul[i], 'block');
					bg1Auto1(aSvg[i], 'none');
					oCollLi[i].onOff = true;
					aButLi[i].onOff = true;
					oCollLi[i].style.WebkitOpacity = 0.3;
					oCollLi[i].style.MozOpacity = 0.3;
					oCollLi[i].style.OOpacity = 0.3;
					oCollLi[i].style.opacity = 0.3;
					oCollLi[i].onmouseover = oCollLiOver;
					oCollLi[i].onmouseout = oCollLiOut;
					aButLi[i].style.backgroundPosition = '0px 0px';
					if (_othis.index == i) {
						aCollUl.style.left = 520 + (-520 * i) + "px";
						oXian.style.left = 520 + (-520 * i) + "px";
					}
				}
				setTimeout(function () {
					_othis.style.backgroundPosition = '-14px 0px';
					oXian.style.display = 'none';
					oCollLi[_othis.index].className = 'coll_li hover';
					bg1Auto(oBg1[oCollLi[_othis.index].index], 0, oBg3Ul[oCollLi[_othis.index].index], 'none');
					bg1Auto1(aSvg[oCollLi[_othis.index].index], 'block');
					oCollLi[_othis.index].onmouseover = null;
					oCollLi[_othis.index].onmouseout = null;
					oCollLi[_othis.index].style.WebkitOpacity = 1;
					oCollLi[_othis.index].style.MozOpacity = 1;
					oCollLi[_othis.index].style.OOpacity = 1;
					oCollLi[_othis.index].style.opacity = 1;
					oCollLi[_othis.index].onOff = !true;
					aButLi[_othis.index].onOff = false;

				}, 400)
			}

		}
	}
	//function LiAuto(obj){
	//obj.onOff = true;
	//obj.index = i;
	//aCollUl.num = 0;
	//obj.onclick =LiClick;
	//oXianNb()
	function LiClick() {
		aonOff = this.onOff;
		_this = this;
		oXian.style.display = 'none';
		for (var i = 0; i < oBg1.length; i++) {
			if (this.index == i) {
				aCollUl.style.left = 520 + (-520 * i) + "px";
				oXian.style.left = 520 + (-520 * i) + "px";
			}
		}
		setTimeout(function () {

			for (var i = 0; i < oBg1.length; i++) {
				oXian.style.display = 'none';
				oCollLi[i].className = 'coll_li';
				bg1Auto(oBg1[i], 1, oBg3Ul[i], 'block');
				bg1Auto1(aSvg[i], 'none');
				oCollLi[i].onclick = null;
				oCollLi[i].onOff = true;
				oCollLi[i].style.WebkitOpacity = 0.3;
				oCollLi[i].style.MozOpacity = 0.3;
				oCollLi[i].style.OOpacity = 0.3;
				oCollLi[i].style.opacity = 0.3;
				oCollLi[i].onmouseover = oCollLiOver;
				oCollLi[i].onmouseout = oCollLiOut;
				aButLi[i].style.backgroundPosition = '0px 0px';
			}
			_this.onOff = aonOff;
			if (_this.onOff) {
				aDioAudio[7].src = "dio/transform-1.mp3"
				aDioAudio[7].play();
				setTimeout(function () {
					aDioAudio[8].play();
				}, 1000)
				_this.className = 'coll_li hover';
				bg1Auto(oBg1[_this.index], 0, oBg3Ul[_this.index], 'none');
				bg1Auto1(aSvg[_this.index], 'block');
				_this.onmouseover = null;
				_this.onmouseout = null;
				_this.style.WebkitOpacity = 1;
				_this.style.MozOpacity = 1;
				_this.style.OOpacity = 1;
				_this.style.opacity = 1;
				_this.onOff = !_this.onOff;
				aButLi[_this.index].style.backgroundPosition = '-14px 0px';
			} else {
				aDioAudio[7].src = "dio/transform-1.mp3"
				aDioAudio[7].play();
				setTimeout(function () {
					aDioAudio[9].play();
				}, 1000)
				_this.className = 'coll_li';
				bg1Auto(oBg1[_this.index], 1, oBg3Ul[_this.index], 'block');
				bg1Auto1(aSvg[_this.index], 'none');
				_this.onOff = !_this.onOff;
				_this.onmouseover = oCollLiOver;
				_this.onmouseout = oCollLiOut;
				aButLi[_this.index].style.backgroundPosition = '0px 0px';
				setTimeout(function () {
					oXianNb();
				}, 500);
			}
			setTimeout(function () {
				for (var i = 0; i < oBg1.length; i++) {
					oCollLi[i].onclick = LiClick;
				}
			}, 1500);
		}, 300);
	}


	//}

	/*圆环*/
	//au111();
	function au111(a) {
		var svgNS = 'http://www.w3.org/2000/svg';
		var oSvg = oColl.getElementsByClassName('svg1')[a];
		//var oXian = getElementsByClassName(oColl,'ul','xian')[0];

		function createTag(tag, objAttr) {
			var oTag = document.createElementNS(svgNS, tag);
			for (var attr in objAttr) {
				oTag.setAttribute(attr, objAttr[attr]);
			}
			return oTag;
		}
		var arrNum = [12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5, 12.5];	//每个圆环占的比例
		var angle = 360;			//总度数
		var sunNum = 0;				//角度累加，起始为0
		var outerR = 90;			//大圆的内径
		var innerR = 44;			//小圆的内径
		var centerX = 90;			//X轴的内径坐标
		var centerY = 90;			//Y轴的内径坐标
		var outerXY = [{ x: 180, y: 90 }];	//大圆的起始坐标
		var innerXY = [{ x: 134, y: 90 }];	//小圆的起始坐标
		var arrColor = ['rgba(0,190,190,0.15)', 'rgba(0,190,190,0.8)']; //4个圈的颜色

		for (var i = 0; i < arrNum.length; i++) {
			var agNum = arrNum[i] / 100 * angle;	//每个圆环占的角度 
			sunNum += agNum;				//每次循环都累加上一次的角度
			if (i == arrNum.length - 1) {
				sunNum = 360;
			}

			var outerX = Math.cos(sunNum * Math.PI / 180) * outerR + centerX;	//外层的第二个X坐标
			var outerY = Math.sin(sunNum * Math.PI / 180) * outerR + centerY;	//外层的第二个Y坐标
			outerXY.push({ x: outerX, y: outerY });

			var innerX = Math.cos(sunNum * Math.PI / 180) * innerR + centerX;	//内层的第二个X坐标
			var innerY = Math.sin(sunNum * Math.PI / 180) * innerR + centerY; //内层的第二个Y坐标
			innerXY.push({ x: innerX, y: innerY });
		}
		for (var i = 0; i < outerXY.length; i++) {
			if (i == outerXY.length - 1) {
				break;
			}
			var oPath = createTag('path', { fill: arrColor[i % 2], d: 'M' + outerXY[i].x + ' ' + outerXY[i].y + 'A' + outerR + ' ' + outerR + ' 0 0 1 ' + outerXY[i + 1].x + ' ' + outerXY[i + 1].y + 'L' + innerXY[i + 1].x + ' ' + innerXY[i + 1].y + 'A' + innerR + ' ' + innerR + ' 0 0 0 ' + innerXY[i].x + ' ' + innerXY[i].y });

			oSvg.appendChild(oPath);
		}
	}




	/*轮播效果结束*/

	/*--工作经历页面开始--*/
	/*var oWork = document.getElementById('work');
	var oWork1 = document.getElementById('work1');
	var aWork2 = oWork.getElementsByClassName('work2')[0];
	oWork.style.height = document.body.clientHeight+'px';
	var aCutufo = oWork.getElementsByClassName('cutufo')[0];
	var aShake = oWork.getElementsByClassName('shake')[0];
	var aPort1 = oWork.getElementsByClassName('port1')[0];
	var aPort2 = oWork.getElementsByClassName('port2')[0];*/


	/*function PortAuto(){
		aPort2.num = 270;
		aPort2.timer = setInterval(function(){
			aPort2.num-=2;
			if(aPort2.num<=0){
				aPort2.num = 0;
				clearInterval(aPort2.timer);
				aPort1.style.WebkitAnimation = '5s port1Hover linear infinite';
			}
			aPort1.style.WebkitTransform = 'rotateZ('+-aPort2.num+'deg)';
			aPort2.style.WebkitTransform = 'rotateZ('+aPort2.num+'deg)';
		
		},1);
	}*/

	var aTime = oWork.getElementsByClassName('time')[0]
	var aWork3d = oWork.getElementsByClassName('work-3D')[0];
	var a3dDiv = aWork3d.getElementsByTagName('div');
	var aJt = oWork.getElementsByClassName('jt')[0];
	var aJtA = aJt.getElementsByTagName('a');
	var aCutufo1 = oWork.getElementsByClassName('cutufo1')[0];
	var aWorkTxt = oWork.getElementsByClassName('txt')[0];
	var aTitle1 = oWork.getElementsByClassName('title1')[0];
	var aCon = oWork.getElementsByClassName('con')[0];
	var aQx = oWork.getElementsByClassName('qx')[0];
	var aShade = oWork.getElementsByClassName('shade')[0];
	var aShadeDiv = aShade.getElementsByTagName('div')[1];
	var aShadea = aShade.getElementsByTagName('a')[0];
	var aAlear = oWork.getElementsByClassName('alear')[0];

	resizeWorkSize();
	/*aShade.style.width = '100%';
	aShade.style.background = '#000';
	aShade.style.position = 'fixed';
	aShade.style.left = '0px';
	aShade.style.top = '0px';*/
	aQx.onclick = function () {
		aShade.style.display = 'block';
		aAlear.style.display = 'block';
	}
	aShadea.onclick = function () {
		aShade.style.display = 'none';
	}
	var aTimeArr = ['', '', '', '', '', '', '', ''] //记录时间
	var aTimeArr1 = ['工作职位：Web 前端开发工程师', '工作职位：Web 前端工程师', '工作职位：敬请期待', '工作职位：敬请期待', '工作职位：敬请期待', '工作职位：敬请期待', '工作职位：敬请期待', '工作职位：敬请期待']//工作时间
	var aTimeArr2 = [
		'负责公司项目的前端开发，包括 PC 官网，移动端页面，公司活动项目,  桌面程序和混合 APP。 负责基础库、框架，关键模块的开发，前端公共组件和技术的积累。',
		'负责To B业务，公司内部系统PC端的界面实现，用户交互和性能优化。 负责搭建前端框架，并配合后端实现整个系统功能；参与具体业务的需求分析以及项目推进。',
		'敬请期待',
		'敬请期待',
		'敬请期待',
		'敬请期待',
		'敬请期待',
		'敬请期待'
	]
	aTime.innerHTML = aTimeArr[0];
	aTitle1.innerHTML = aTimeArr1[0];
	aCon.innerHTML = aTimeArr2[0];
	aShadeDiv.innerHTML = aTimeArr2[0];

	aWork3d.num = 0;
	aWork3d.index = 0;
	aWork3d.index1 = 4;
	aJtA[0].onclick = function () {
		aWork3d.num += 45;
		aWork3d.index--;
		aWork3d.index1--;
		aDioAudio[4].play();
		if (aWork3d.index < 0) {
			aWork3d.index = 7;
		}
		if (aWork3d.index1 < 0) {
			aWork3d.index1 = 7;
		}
		aWork3d.style.WebkitTransition = '0.2s';
		aWork3d.style.OTransition = '0.2s';
		aWork3d.style.MsTransition = '0.2s';
		aWork3d.style.MozTransition = '0.2s';
		aWork3d.style.transition = '0.2s';

		aWork3d.style.WebkitTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.MozTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.OTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.MsTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.transform = 'rotateX(' + aWork3d.num + 'deg)';

		for (var i = 0; i < a3dDiv.length; i++) {
			a3dDiv[i].style.display = 'block';
			a3dDiv[i].className = '';
		}
		a3dDiv[aWork3d.index1].style.display = 'none';
		a3dDiv[aWork3d.index].className = 'hover';
		aWorkTxt.style.overflow = 'visible';

		Contxt();
		aCutufo1Auto();
		setTimeout(function () {
			aTime.innerHTML = aTimeArr[aWork3d.index];
			aTitle1.innerHTML = aTimeArr1[aWork3d.index];
			aCon.innerHTML = aTimeArr2[aWork3d.index];
			aShadeDiv.innerHTML = aTimeArr2[aWork3d.index];
		}, 400)
	}

	aJtA[1].onclick = function () {
		aWork3d.num -= 45;
		aWork3d.index++;
		aWork3d.index1++;
		aDioAudio[4].play();

		if (aWork3d.index >= 8) {
			aWork3d.index = 0;
		}
		if (aWork3d.index1 >= 8) {
			aWork3d.index1 = 0;
		}
		aWork3d.style.WebkitTransition = '0.2s';
		aWork3d.style.MozTransition = '0.2s';
		aWork3d.style.MsTransition = '0.2s';
		aWork3d.style.OTransition = '0.2s';
		aWork3d.style.transition = '0.2s';

		aWork3d.style.WebkitTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.MozTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.MsTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.OTransform = 'rotateX(' + aWork3d.num + 'deg)';
		aWork3d.style.transform = 'rotateX(' + aWork3d.num + 'deg)';

		for (var i = 0; i < a3dDiv.length; i++) {
			a3dDiv[i].style.display = 'block';
			a3dDiv[i].className = '';
		}
		a3dDiv[aWork3d.index1].style.display = 'none';
		a3dDiv[aWork3d.index].className = 'hover';
		aCutufo1Auto();
		Contxt();
		setTimeout(function () {
			aTime.innerHTML = aTimeArr[aWork3d.index];
			aTitle1.innerHTML = aTimeArr1[aWork3d.index];
			aCon.innerHTML = aTimeArr2[aWork3d.index];
			//aShadeDiv.innerHTML = aTimeArr2[aWork3d.index];
		}, 400)
	}

	aShade.addEventListener('click', function (e) {
		e.preventDefault();
		aShade.style.display = 'none';
		aAlear.style.display = 'none';
	}, false);


	function Contxt() {
		Contxt1(aTitle1, '0.5s', '50px', '-50px', 20, 'top', 'left', 0);
		Contxt1(aCon, '0.5s', '80px', '-50px', 20, 'top', 'left', 0);
		Contxt1(aQx, '0.5s', '40px', '-30px', 20, 'bottom', 'right', 0);
		setTimeout(function () {
			Contxt1(aTitle1, '0.5s', '20px', '20px', 0, 'top', 'left', 1);
			Contxt1(aCon, '0.5s', '50px', '20px', 0, 'top', 'left', 1);
			Contxt1(aQx, '0.5s', '10px', '0px', 0, 'bottom', 'right', 1);

		}, 300)
	}
	function Contxt1(a, b, c, d, e, f, h, k) {
		a.style.WebkitTransition = b;
		a.style.MozTransition = b;
		a.style.MsTransition = b;
		a.style.OTransition = b;
		a.style.transition = b;

		a.style[f] = c;
		a.style[h] = d;
		a.style.WebkitFilter = 'blur(' + e + 'px)';
		a.style.MozFilter = 'blur(' + e + 'px)';
		a.style.MsFilter = 'blur(' + e + 'px)';
		a.style.OFilter = 'blur(' + e + 'px)';
		a.style.filter = 'blur(' + e + 'px)';
		a.style.WebkitOpacity = k;
		a.style.MozOpacity = k;
		a.style.OOpacity = k;
		a.style.opacity = k;
	}


	function aCutufo1Auto() {
		clearInterval(aCutufo1.timer);
		clearInterval(aCutufo1.timer1);
		aCutufo1.num = 0;
		aCutufo1.timer = setInterval(function () {
			aCutufo1.num += 0.1;
			if (aCutufo1.num >= 1) {
				clearInterval(aCutufo1.timer);
				aCutufo1Auto1();
			}
			aCutufo1.style.WebkitOpacity = aCutufo1.num;
			aCutufo1.style.MozOpacity = aCutufo1.num;
			aCutufo1.style.OOpacity = aCutufo1.num;
			aCutufo1.style.opacity = aCutufo1.num;
		}, 20)

		function aCutufo1Auto1() {
			aCutufo1.timer1 = setInterval(function () {
				aCutufo1.num -= 0.1;
				if (aCutufo1.num <= 0) {
					aCutufo1.num = 0;
					clearInterval(aCutufo1.timer);
				}
				aCutufo1.style.WebkitOpacity = aCutufo1.num;
				aCutufo1.style.MozOpacity = aCutufo1.num;
				aCutufo1.style.OOpacity = aCutufo1.num;
				aCutufo1.style.opacity = aCutufo1.num;
			}, 20)
		}

	}


	function shakeAuto() {
		aShake.num = 1;
		aCutufo.num = 0;
		aCutufo.num1 = -240;
		aCutufo.num2 = 0;

		aCutufo.timer1 = setInterval(function () {
			aCutufo.num1 += 10;
			aCutufo.num2 += 0.04;
			if (aCutufo.num1 >= 15) {
				aCutufo.num1 = 15;
				aCutufo.num2 = 1;
				clearInterval(aCutufo.timer1);
				aCutufoAotu();
			}
			aCutufo.style.bottom = aCutufo.num1 + 'px';
			aCutufo.style.WebkitOpacity = aCutufo.num2;
			aCutufo.style.MozOpacity = aCutufo.num2;
			aCutufo.style.OOpacity = aCutufo.num2;
			aCutufo.style.opacity = aCutufo.num2;

		}, 30);
		function aCutufoAotu() {
			aCutufo.timer = setInterval(function () {
				aShake.num -= 0.04;
				aCutufo.num++;
				if (aCutufo.num >= 13) {
					aCutufo.num = 13;
					aShake.num = 0;
					aShake.style.display = 'none';
					clearInterval(aCutufo.timer);
				}
				aShake.style.WebkitOpacity = aShake.num;
				aShake.style.MozOpacity = aShake.num;
				aShake.style.OOpacity = aShake.num;
				aShake.style.opacity = aShake.num;
				aCutufo.style.background = 'url(img/cool/cutufo_' + aCutufo.num + '.png) no-repeat';

			}, 50);
		}
	}
	/*--工作经历页面结束--*/
}