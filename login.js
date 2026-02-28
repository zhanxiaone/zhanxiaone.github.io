//监听DOM内容加载完成事件 比load更快 表示HTML文档已被完全加载和解析
document.addEventListener("DOMContentLoaded", function() {
    // 检查是否已登录
    var session = JSON.parse(sessionStorage.getItem("userInfo"));//JSON.parse()将读取的字符串转换成对象 使用sessionStorage对象的getItem方法获取名为"userInfo"的项
    if (session && session.userName) {
        alert(session.userName + "已登录");
        location.href = "liuyan.html";
        return; // 如果已登录，直接跳转，不执行后续代码
    }

    // 登录按钮点击事件
    document.getElementById("loginbutton").onclick = function() {
        //获取输入框元素的值
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("pwd").value;
        
        // 从localStorage获取用户信息
        var userInfo = JSON.parse(localStorage.getItem("userInfo"));
        
		if(!userName){
			alert("用户名未填写!");
			return false;
		}
		if(!password){
			alert("密码未填写!");
			return false;
		}
		
        if (!userInfo || userName !== userInfo.username) {
            alert("该用户未注册，请先注册");
            location.href = "register.html";
            return false;
        } else {
            if (password !== userInfo.password) {
                alert("您输入的用户名或密码不正确！");
                return false;
            } else {
                // 登录成功，保存登录状态到sessionStorage
                sessionStorage.setItem("userInfo", JSON.stringify({
                    userName: userName,
                    password: password
                }));
                
                alert("登录成功！");
                location.href = "liuyan.html";
                return true;
            }
        }
    };
});






