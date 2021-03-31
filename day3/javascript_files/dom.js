// document是js的内置对象
//window.alert(document.title); //window.alert是打印到小窗口上
console.log(document.title); //写在console(控制台)里面

//用JavaScript修改对象属性
document.title = "标题改变了";
console.log(document.title);

//获取a标签的属性值
var a =document.getElementsByTagName("a");
for(var i=0; i<a.length; i++){
	console.log(a[i].href);
	console.log(a[i].innerText);//A标签中的文字
}

/**
 * array对象的方法:
 * 1. .concat();
 * 2. .join(); 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
 * 3. .pop(); 删除并返回数组的最后一个元素
 * 4. .push(newelement1,newelement2,....,newelementX); 向数组的末尾添加一个或更多元素，并返回新的长度
   5. .reverse() 颠倒数组中元素的顺序
   6. .sort()排序
  * * */
console.log("数组长度 = "+a.length);

//获取标签的第一个值,href属性
console.log(document.getElementsByTagName("a")[1].href);


//通过name与className获取标签都是数组
var tb = document.getElementsByName("tb");
var jd = document.getElementsByClassName("jd");
var bilibili = document.getElementById("bilibili");
console.log("淘宝的域名: " + tb[0].href);

