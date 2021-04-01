jQuery 第三方， 和js的区别
1） javascript的原生代码， 所有浏览器都支持
2） jQuery第三方，浏览器不直接支持，script导入
3） js升级版， 加大简化js开发
	js --->  document.getElementsByClassName("username");
	jQuery ---> $(".username")
	
	
	js --->  document.getElementsByClassName("username")[0].value;
	jQuery ---> $(".username").val()
	
JavaScript有两个重要衍生品：
1) JSON, 数据传输
2） AJAX， 请求方式，请求后台系统，处理数据，返回信息JSON， 拿到返回值， 进行解析， 最终在页面上展现

### innerTest和innerHTML的区别
innerText写入纯文本, 如果有html标签, 不翻译 ----> jQuery.text();
innerHtml会解析html的标签 ---> jQuery.html();


### jQuery简化js开发，无需记忆晦涩难懂的api
模拟用户登录案例：
1） html页面（用户名框， 密码框， 按钮）
2） bootstrap美化页面
3） javascript交互（获取用户信息，显示用户登录成功
登录按钮，取消按钮
4） 用jQuery升级JavaScript代码

microsoft的jQuery: <script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery/jquery-1.4.min.js"></script> 
bootstrap的jQuery: <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>

### 小结jQuery几个方法的差异
.text()		设置当前对象文字	div.innerText
.css()		设置当前对象样式	div.style



### 什么是JSON
JSON 指的是 JavaScript 对象表示法（JavaScript Object Notation）notation音符
JSON 是轻量级的文本数据交换格式
JSON 独立于语言：JSON 使用 Javascript语法来描述数据对象，但是 JSON 仍然独立于语言和平台。
JSON 解析器和 JSON 库支持许多不同的编程语言。 目前非常多的动态（PHP，JSP，.NET）编程语言都支持JSON。
JSON 具有自我描述性，更易理解
json是JavaScript的子集
本质就是传递数据, 最早的软件系统可以传递java对象

[
	{name: "陈浩南", age:18},
	{name: "山鸡", age:18},
]

JSON格式要求:
1. []代表数组
2. {}代表一条记录, 代表一个java对象
3. 大括号里面: 多个键值对, 之间逗号隔开

https://p.3.cn/prices/mgets?skuIds=J_100010378153
访问这个网址返回JSON字符串:
[
	{
		"p":"17999.00",        //商品的价格
		"op":"17999.00",
		"cbf":"0",
		"id":"J_100010378153", //商品的编号
		"m":"100000.00" // 最后的不能加逗号
	}
]

### JSON操作的api
1) 把json字符串转化成js对象
2) 把js对象转化成json字符串
var obj = JSON.parse(JSON数组);
var str = JSON.stringify(Javascript对象);

### 后台操作流程
java对象 ---> JSON字符串 ---> javascript对象