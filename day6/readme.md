### Vue有两个特点：
1)	数据驱动，只要操作数据， 页面上引用(插值表达式, v-xxx指令)动态显示内容
2)	组件化, element-ui一套组件, 别人可以写好组件, 我们直接使用, 开发效率

Vue结构:
1)	导入Vue.js文件
2)	展示区域: div id="app"
3)	创建vm = new Vue对象
	el: "#挂载点",
	data: {
		
	},
	function{
		
	}
	
	
Data语法3种:
1)	Vue标准写法
2)	Vue函数写法, 返回值 return js 对象


### VUE 函数的三种方式
f1: function(){
	return{
		返回值变量名: 返回值
	}
}

f2(){
	return{
		返回值变量名: 返回值
	}
}


f3: {
	返回值变量名: 返回值
}

Vue框架增加: 路由和组件
1) 路由: Vue开发SPA结构网站, 一个页面(列表转新增页面, 新增页面保存数据), 它的操作(新增, 修改)没有离开当前页面
add
update
不同路径
2) 组件, 可以自己写好积木, 也可以利用第三方的, 搭建起最终结构(复用)

Vue脚手架, 项目
不是引入Vue.js能搞定的!
搭建条件: 安装NodeJS(JVM)15安装, win7操作8版本
执行一系列命令: dos命令
自动安装npm和webpack

### Vue框架
index.html	--->	首页
http://localhost:8080/

build/webpack.base.conf.js	---> config基础base配置信息
build/webpack.dev.conf.js---> dev 开发环境
build/webpack.prod.conf.js ---> prod 生产环境

src/assets/logo.png ---> 静态资源, vue图片
src/components/HelloWorld.vue component组件, 这个目录下存放自定义组件
node_modules---> 存放第三方组件, 这力内容不许动

src/router/index.js--->路由,怎么加载自己写组件
src/App.vue--->根组件,自定义组件都是App组件的子组件
src/main.js--->index.html辉自动加载main.js, 它里面就加载App.vue

Vue项目极其复杂,这些文件是存在联系的
例如
1)	自定义组件, 再componets目录下: Item.vue
2)	声明, 注册, App.vue
3)	引入第三方Element-ui, 再全局main.js中引入

### *.vue文件
这个文件由3个部分组成
template ---> 模板
script
style

### 调用外部组件, Element-UI
npm i element-ui -D
-D安装到开发环境, -S安装到生产环境, 通常-D

//导入外部组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//把这个样式加入Vue项目中
Vue.use(ElementUI);

先加入小图标
引入栅格系统, html没有它不能适应屏幕大小变化
有了栅格系统, 

### Vue项目启动加载过程
vue项目一加载好就会有这三个文件: index.html, main.js, App.js
先App.vue封装组件，再main.js引入组件并挂载，最后在index.html上边呈现内容
1.	index.html, 总所周知, Vue是单页形式开发, 所有的组件都是用来渲染index.html的
2.	main.js相当于一个入口函数(main方法)控制这初次启动Vue需要加载的组件


js将对象置空 ---> var obj = {} 把所有的属性置空
运行 obj.attr1 = "attribute1"; ---->自动给obj加入attr1属性

### js实现对数组新增修改删除 --->.splice()
.splice(startIndex, deleteAmount, 插入值);
var m = [1, 2, 3];
m.splice(0, 0, "A"); --->在头部插入A m=[A, 1, 2, 3]
m.splice(0, 1, "B"); ----> 将A替换成B m=[B, 1, 2, 3]
m.splice(0, 2) ---> 删除B和1 m=[2, 3]


### 项目结构
一个table，实现增删改
一个dialog，对话框，提交表单