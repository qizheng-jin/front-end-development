/**
 * el ---> 挂载点(element)
 * 冒号前面的属性都不能变,设定死的
 */
var data = {
	msg: "hello vue"
}
var param = {
	el: "#app",
	data: data //后面的data是js对象(名字自定义)
};

/**
 * 建立vue对象
 */


new Vue({
	el: "#app",
	data: {
		msg: "hello vue",
		id: 8823,
		name: "小明"
	} //后面的data是js对象(名字自定义)
});

var vm = new Vue({
	el: "#address",
	data: {
		address: "武汉"
	}
});
vm.address = "北京";

