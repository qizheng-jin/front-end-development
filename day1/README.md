前端：
1） 开发人员划分：
	a. 前端工程师: 做页面, 网站
	b. 后端工程师: 数据存储, 获取
	c. 测试工程师: 单元测试、@Test、集成、压力（高并发）
	d. 运维工程师：保证机器和网络运行 


总结：
前端应该如何去学习：
HTML标签：20几个
css样式： 20几个
javascript api, 
jQuery($("#username"))
*Vue 数据驱动(重点)

1) html hypertext mark language 超文本语言
	标记：<h2>目录<h2> header标题,预定义修饰
	利用HTML就可以实现原始的页面
	标签: 闭合<XXX>内容<XXX>
	<head>
		头信息(title, 编码UTF-8, 安全信息token)
		<link>小图标,加入外部样式css</link>
		<script>javascript</script>
	</head>
	<body>页面展现的内容</body>
2) CSS
3) 



绝对路径方式访问: 磁盘目录/文件
file:// -- 文件协议


http://127.0.0.1:8848/cgb2102/day01/hello.html
http:// -- 协议头
127.0.0.1 -- ip地址
8848 -- 端口
/cgb2102/day01/ -- 虚拟路径
FTP和HTTP协议的区别：
目的不同：
ftp 文件传输协议 远程两台计算机如何传输文件
http 超文本的传输协议， 网页，从别人的服务器抓取内容来展现
https 安全的http，加密base64,网页加载速度慢, 可以预防DDOS攻击.



CSS 层叠样式表 (Cascading Style Sheets)
配合html技术来实现网页的美化

	
二维码
里面有很多信息, 把文字信息隐藏在小块像素之中
通过它位置定位就能判断图片的正确比例,从而确定一个点多大
把这些块组成文字获取, api
https://act.codeboy.com/
手机扫描二维码,获取到上面文字,手机浏览器会自动打开这个网页

谷歌api就实现二维码图片的生成,根据开发者给的文字(链接)会生成它的图片
谷歌api使用非常繁琐,它的方法和参数很多
封装后, 4个参数: 宽/高/链接/图片位置

开发步骤
1) 创建java工程
2) 创建lib目录, 把qr.jar拷贝进去
3) 导入jar
4) 创建类, main, CreateQR.make()四个参数
5) 把这个qr.png拷贝到order.html中

图片的两种链接方式
1. 绝对路径:
2. 相对路径:
