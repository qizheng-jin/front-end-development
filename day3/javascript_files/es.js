/**
 * 比较 var 和 let的区别
 * let的作用域支持块级别,如果在代码块中定义的变量,在块外部就消失了
 * var的作用域支持全局
 */
var a = 10;
{
	var a = 20; //js重复定义变量名称,它不报错,并且会覆盖以前值
	console.log(a);
}
console.log(a);

let b = 100;
{
	let b = 200;
	console.log(b);
}
console.log(b);

/**
 * es6箭头函数
 */
//1 无参函数
var js0 = function(){
	console.log("这是无参方法");
}
js0(); //调用的时候后面加个小括号,就可以区分于变量

//箭头函数, 如果大括号只有一句话, 这个大括号可以省略
var esFunction = () => {
	console.log("esFunction无参调用");
}
esFunction();
//2 一个参数函数
var js1 = function(arg1){
	return arg1;
}
console.log(js1("一个参数的函数"));

//可以同时省略大括号和return(只省略其中一个则会报错)
//如果只有一个参数,则参数的括号也可以省略
var esFunction1 = (arg1) =>{	
	return arg1;
	}
console.log(esFunction1("esFunction含一参数"));

//3 两个参数函数
var js2 = function(arg1, arg2){
	return arg1 + arg2;
}
console.log(js2("这是一个", "两个参数的函数"));

var esFunction2 =(arg1, arg2) => arg1 + arg2;

console.log(esFunction2("这是一个", "esFunction含两个参数"));

/**
 * 创建类
 */
function Student(name, age, hobby){
	this.name = name;
	this.age = age;
	this.hobby = hobby;
	
}
var getName = function(student){
	return student.name;
}

var student1 = new Student("小A", 18, "游泳");
console.log(getName(student1));