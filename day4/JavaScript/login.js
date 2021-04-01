/**
 * 单击登录button， 传递表单信息， 刷新页面
 */

function doSubmit(){
	//获取用户名框内容
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	console.log(username.value);
	console.log(password.value);
	
	/**
	 * 刷新页面
	 * 1. 获取div对象
	 * 2. 改变div中的文字值innerText
	 * 2. 改变display值
	 * 3. 设置新样式
	 */
	var success = document.getElementById("login_success");
	var form = document.getElementById("form");
	//innerText: Plain text that the element contains. (Does not include opening and closing tags of the element.) 
	success.innerText = username.value + "登录成功";
	success.style = "display: block; color: red; font-size: 50px";
	// form.style = "display: none"
}

function doClear(){
	document.getElementById("username").value = "";//清空username
	document.getElementById("password").value = "";//清空password
}

