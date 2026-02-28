
	//正则表达式

function $(elementid){
	return document.getElementById(elementid);
}

function checkUser(){
	//获取id为user的输入框中的值
	var user=$("userName").value;
	//获取提示信息的dom元素
	//用户名要求由2-16位字符组成   \S 表示任何非空白字符
	var reg=/^\S{2,16}$/;
	if(user && reg.test(user) == false){
		alert("用户名不正确");
		return false;
	}
	return true;
}
function checkEmail(){
	var email =$("email").value;
	//判断值是否包含@和.并且.在@后面，以.com/.cn结尾   \w+ 表示一个或多个字母、数字、下划线
	//当这些字符需要表示自身时，可以在前面加转义字符  \.-->.
	var reg=/^\w+@\w+\.(com|cn)$/;
	if(email && reg.test(email) == false){
		alert("邮箱格式不正确");
		return false;
	}
	return true;
}
function checkPwd(){
	var pwd=$("pwd").value;
	//密码由6-10位字符组成
	var reg=/^[a-zA-Z0-9]{6,10}$/;
	if( pwd && reg.test(pwd) == false){
		alert("密码长度在6-10之间");
		return false;
	}
	return true;
	}

function checkRepwd(){
	var pwd =$("pwd").value;
	var repwd=$("repwd").value;
	检查密码是否有效
	if(!repwd){
		alert("请先确认密码");
	}

	if(pwd!=repwd){
		alert("两次输入的密码不一致");
		return false;
	}
	return true;
}
function checkAll(){
if(checkUser()&&checkPwd()&&checkRepwd()&&checkEmail()){
       return true;
    }else{
        return false;
    }
}





	document.getElementById("registerbutton").onclick=function(){
		//获取用户注册信息
		var userName=document.getElementById("userName").value;
		var email=document.getElementById("email").value;
		var password=document.getElementById("pwd").value;
		var repassword=document.getElementById("repwd").value;
		//校验
			if(password!=repassword){
				alert("两次密码不一致！");
				return false;
			}
			if(!userName){
				alert("用户名未填写!");
				return false;
			}
			if(!email){
				alert("邮箱未填写!");
				return false;
			}
			if(!password){
				alert("密码未填写!");
				return false;
			}
			if(!repassword){
				alert("密码未确认!");
				return false;
			}
			//localstorage只能存储键值对，先处理获取到的数据
			var userInfo={
				username:userName,
				password:password,
				email:email
				
			}
			//将对象转换为字符串存储在本地
		localStorage.setItem("userInfo",JSON.stringify(userInfo));
		location.href="login.html";
		alert("注册成功，跳转到登录页！");
		//跳转到登录页
		
	}
	
	
	



