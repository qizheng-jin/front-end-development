var a = 0;
console.log(a);
// window.alert(a);

var f1 = function(){
	console.log("这是f1方法");
}
f1();

var f2 = (arg) =>{
	console.log("这是f2方法"+arg);
}
f2("参数1");

/**
 * 在JS中，创建对象（Create Object）并不完全是我们时常说的创建类对象，
 * JS中的对象强调的是一种复合类型，JS中创建对象及对对象的访问是极其灵活的。
	JS对象是一种复合类型，它允许你通过变量名存储和访问，
	换一种思路，对象是一个无序的属性集合，
	集合中的每一项都由名称和值组成（听起来是不是很像我们常听说的HASH表、字典、键/值对？），
	而其中的值类型可能是内置类型(如number,string)，也可能是对象。
 */
var obj = new Object();
obj = {
	name: "急袭猛禽-究极猎鹰",
	rank: "10",
	property: "dark",
	toString : function(){
		return this.name + ", " + this.rank + "," +this.property;
	}
}
console.log(obj.toString());