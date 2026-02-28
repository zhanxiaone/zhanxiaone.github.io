//随即头像设置
//监听DOM内容加载完成事件 比load更快 表示HTML文档已被完全加载和解析
document.addEventListener("DOMContentLoaded",function(){


var num = Math.floor(Math.random() * 15);
document.querySelector("#avatar").setAttribute("src", num +".jpg");


var btn=document.querySelector(".submit-btn");
btn.onclick = function(){
    var userName = document.querySelector("#name").value;
    var content = document.querySelector("#txt").value;
    var replyDivs = document.querySelectorAll("div.message-card");   //找到所有既是div元素又有message-card类的元素，返回一个元素列表
    //创建属于新评论的div
    var reply_div = document.createElement("div");
    //设置新评论的类名为message-card
    reply_div.setAttribute("class","message-card");
    reply_div.innerHTML = `<div class="message-avatar">
								<div class="avatar-display">
									<img src="/${num}.jpg" alt=""/>
								</div>
							</div>
                    <div class="message-content">
                        <div class="message-header">
                            <div class="author-info">
                                <div class="author">${userName}</div>
                            </div>
                            <div class="date">${showTime()}</div>
                        </div>
                        <div class="message-text">
                            ${content}
                        </div>
                        <span><a class="remove" href="#">删除</a></span>
                    </div>
					
					`;
            //将新评论元素添加到已有评论父节点末尾  .appendChild() 方法用于将一个节点添加到指定父节点的子节点列表末尾。
            replyDivs[0].parentNode.appendChild(reply_div);
            //清空文本框
            var userName = document.querySelector("#name").value="";
            var content = document.querySelector("#txt").value="";
			//由于新添加了留言，需要重新获取所有删除链接（包括新添加的）
             removes = document.querySelectorAll("a.remove");
			 //调用函数为所有删除链接绑定点击事件
			 removeInfo();
}
//获取当前评论时间
function showTime(){
    var now = new Date();
    var year = now.getFullYear();//年份
    var month = now.getMonth() + 1;//月份（0-11）
    var date = now.getDate();//日期
    
    return year + "年" + month + "月" + date + "日";
}
//实现删除功能
var removes = document.querySelectorAll("a.remove");
function removeInfo(){
	for(var i in removes){
		removes[i].onclick=function(){
			this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode)
		}
	}
}
// 初始调用，为页面加载时就存在的删除链接绑定事件
removeInfo();




 // 1. 定义更新时间的核心函数
        function refreshTime() {
            // 获取当前客户端时间
            var now = new Date();
            // 直接使用Date对象的toLocaleString()方法 将日期时间转换为本地化的字符串格式
            var timeText = now.toLocaleString();
            // 渲染到页面
            document.getElementById('showTime').innerText = timeText;
        }

        
        // 3. 设置定时器，每秒（1000毫秒）更新一次，实现动态效果
        setInterval(refreshTime, 1000);



})
