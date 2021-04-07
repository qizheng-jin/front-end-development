### 访问网站后台两种方式
1.	表单提交 -- 提交完成页面地址会发生变化
2.	ajax， 不变化页面， 局部刷新， 不用切换页面
3.	
$.ajax();
参数:
1) type 请求方式, get/post
2) url 请求地址
3) 指定返回数据类型: jsonp(json对象可以解决跨域错误)
4) 响应函数中, success:function(data){ 解析data } 匿名函数, ajax它会把返回结果放在data对象中

### js升级演变
三个阶段演化:
1) javascript, 版本es6, es7, (脚本语言)api
2) jQuery (本质封装js, 简化), api val(), text()
3) angularJS/reactJS/VueJS js框架(灵魂: ) 数据驱动/组件化/MVVM框架

### Vue
Vue渐进式框架,按需求来引入内容
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式JavaScript框架。
与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。
Vue: <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

### Vue渐进式框架
1) 核心(数据驱动) vue.js
2) 核心+组件
3) 核心+组件+路由router
4) 核心+组件+路由+状态
5) 核心+组件+路由+状态+工具: npm/webpack
   在body中单独加一个div id="app", 将来vue进行渲染区域, div外面就不受控
   
### Vue核心基础语法
	var vm = new Vue(); // 创建Vue对象
	{
		el: "#app", //挂载点--选择器
		data: 数据js对象
	}
	插值表达式: {{msg}}, vue回去data找msg定义, 获取它的值, 把它显示到div中
	

### Vue的特点
1) 没有完全专门api, 无需额外太多记忆 document,getElementById, val()
2) js/jQuery它们的代码和html代码,css代码交织!
   分层概念, 后端, TCP/IP7层, MVC(Model View Controller) 框架 3层, 各司其职, 清晰
   MVVM Vue框架 (Model-View-ViewModel):

3) 文本框