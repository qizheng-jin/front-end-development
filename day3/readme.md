###href 和 src的区别
href 表示超文本引用（hypertext reference），在 link和a 等元素上使用。
src 表示来源地址(source)，在 img、script、iframe 等元素上。

src 的内容，是页面必不可少的一部分，是引入。href 的内容，是与该页面有关联，是引用。区别就是，引入和引用。


### bootstrap
1. 引用地址
	1.1 css: <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
	1.2 jQuery: <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
	1.3 javascript: <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
	
### 动态网站技术 javascript (js)
html和css无法交互, 动态去改变js作用

javascript 和 java的关系:
1. 两者没有任何关系
2. js是浏览器语言,脚本语言,弱语言,动态语言
3. java是全能applet小程序,强语言,静态语言(安全)


### js怎么和页面交互
<title>js就可以获取标题修改标题

JavaScript 出品一套api
把页面定义DOM树, 快速去定位页面的某个位置(标签)

document对象, 代表页面

在页面新加标签<script>位置任意</script>习惯放在body的最后面

### js获取标签方式
1. tagName 标签名称(数组)
2. name属性(数组) getElementsByName
3. class属性(数组) getElementsByClassName
4. id属性(一个变量值) getElementById


### ES标准化组织, 强化应用javascript
1) 定义变量是没有类型的,会自动进行类型推断
var a = 10 和 let a = 10 的区别:
 * let的作用域支持块级别,如果在代码块中定义的变量,在块外部就消失了
 * var的作用域支持全局
 
2) 常量const

3) 新语法, 拉姆达表达式, ES6中习惯箭头函数(=>)语法简洁
有很多语法的省略......
js函数写法
var 函数名 = function(参数1, 参数2....参数n){
	...
	return 返回值;
}
调用: 函数名(参数列表);

es6函数写法
var 函数名 = (参数1, 参数2...., 参数n) =>{
	...
	return 返回值
}
调用: 函数名(参数列表);


### 小结
1. 引入bootstrap样式
	