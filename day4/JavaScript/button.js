console.log("hello");
/**
 * 按钮事件有两种绑定方式:
 * 1) 前期绑定,静态方法,写死了, 方便阅读文件
 * 2) 后期绑定,动态方法, 不方便阅读程序, 但是后期绑定更加灵活,根据业务当前情况,设置不同内容
 * 
 * jQuery的后期绑定不会覆盖掉前期绑定的内容, 但是JavaScript会覆盖掉
 */
function pay(){
	$("#button").prop("disabled", true);
	$("#button").text("微信正在支付,请稍后");
}
//jQuery匿名函数的写法
$("#btn").click(function(){
	// this代指 "#btn"
	$(this).prop("disabled", true);
	$(this).text("支付宝正在支付,请稍后");
});

//javascript匿名函数的写法
var btn_submit = document.getElementById("btn");
btn_submit.onclick = function(){
	console.log("匿名函数创建完成");
}