

//轮播图
var picsArr=new Array();
			picsArr[0]="pic1.jpg";
			picsArr[1]="pic2.jpg";
			picsArr[2]="pic3.jpg";
			picsArr[3]="pic4.jpg";
			picsArr[4]="pic5.jpg";
			var timer,index=0;
function showPic(){
	//获取id为"pic"的元素并将其src属性设置为 picsArr 数组中索引为 index 的图片路径。
	document.getElementById("pic").src=picsArr[index];
	if(index<(picsArr.length-1)){
		index++;
	}else{
		index=(index+1)%picsArr.length; //索引加1
	}
	//清除上一次使用的定时器
	clearTimeout(timer);
	//使用新的定时器
	timer = setTimeout("showPic()",2500);//到了2.5s之后就调用showpic()函数
	
}
function showPrepic(){
	if(index>0){
		index--;
	}else{
		index=4;
	}
	document.getElementById("pic").src=picsArr[index];
	timer = setTimeout("showPic()",2500);
}
function showNext(){
	clearTimeout(timer);
	showPic();
}
function showPre(){
	clearTimeout(timer);
	showPrepic();
}

window.onload=showPic; //将 window.onload 事件处理程序设置为 showPic 函数

//settimeout:延时时间到了，就去调用这个回调函数，只调用一次，
//setinterval:每隔这个延时时间，就调用这个函数，会调用很多次



//  轮播图两边按钮显现功能 
document.addEventListener("DOMContentLoaded",function(){
				var preBtn=document.querySelector('.preBtn');
				var nextBtn=document.querySelector('.nextBtn');
				var foucus=document.querySelector('#section5');
				
				foucus.onmouseover=function(){
					preBtn.style.display="block";
					nextBtn.style.display="block";
				}
				
				foucus.onmouseout=function(){
					preBtn.style.display="none";
					nextBtn.style.display="none";
				}
				
				
			//导航栏随鼠标移动动画
			// 封装动画函数
			// 原理:1.获得当前盒子所在位置
			// 2.让盒子在当前位置移动一个距离并使用定时器不断重复,达到效果
			// 3.加上定时器结束的条件
			// 4.注意此元素需要添加定位 才能使用element.style.left
			function animate(obj, target) {
			    
			    clearInterval(obj.timer);// 清除之前的定时器，防止多个动画同时运行
			    
			    obj.timer = setInterval(function() {
			        // 计算当前位置与目标位置的差值
			        var distance = target - obj.offsetLeft;          //offsetleft属性：返回元素当前左侧位置（相对于其父元素）不带单位---偏移量 
			        
			        // 如果已经到达目标位置，停止动画
			        if (obj.offsetLeft == target) {
			            clearInterval(obj.timer);
			        } else {
			            // 移动元素
			            obj.style.left = obj.offsetLeft + (distance/20) + 'px';    //定时器限制了移动步长：每5毫秒就移动1/20的距离，达到缓慢移动的效果
			        }
			    }, 5);
			}
			
			// 导航光标
			var guangbiao = document.querySelector('.guangbiao');
			var daohang = document.querySelector('.daohang');
			var lis = daohang.querySelectorAll('li');
			
			// 初始化光标位置
			var current = lis[0].offsetLeft;
			
			// 给所有的li绑定事件
			for (var i = 0; i < lis.length; i++) {
			    
			    lis[i].onmouseenter = function() {
			        animate(guangbiao, this.offsetLeft);// 这里的this就是当前鼠标经过的li元素
					
			    };//当鼠标经过某个li，就把当前li的offersetleft位置作为目标值
			    
			    lis[i].onmouseleave = function() {
			        animate(guangbiao, current);
					
			    };//鼠标离开就回到起始点
			    
			    lis[i].onclick = function() { 
					current = this.offsetLeft;// 点击时更新current的值
					animate(guangbiao, current);
			       
			    };//鼠标点击，就把当前li位置作为目标值
			}
			
			
			
			
			//页面滚动 淡入淡出top
			$(function(){
				
				var h3top=$(".zjjdz").offset().top;
				//页面滚动事件
				$(window).scroll(function(){
					if($(document).scrollTop() >= h3top){
						$(".top").stop().fadeIn();
					}else{
						$(".top").stop().fadeOut();
					}
				})
				
				//返回顶部
				$(".top").click(function(){
					$("body,html").stop().animate({
						scrollTop:0
					})
				})
				
			})
			

})
