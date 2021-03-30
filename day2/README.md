<meta charset=UTF-8>
数据（业务、用户）, 元数据(描述开发自身信息)
最早网页编码: iso-8859-1 (英文) ascii
中国特色网页编码: gb2312 (国标) 
新标准: unicode 全球编码
主流:在unicode的基础上,压缩到UTF-8


CSS引用的三种方式:
1) 行内样式	<div style="font-size: 10px;">123</div>
2) 内嵌式a 	<style></style> 必须放在header中
3) 外联式	用<link>标签引入外来的CSS文件
    <link href="" rel="" style="">

样式使用有三种方式
1) 作用于标签
2) 作用于类属性, 它的名字要先自定义, 可以重复, 用.访问
3) 作用于id属性, 它的名字要先自定义, 可以重复, 用#访问

### 块: 
一、 div 标签 与 span 标签的区别
	1. div自动换行
	2. span不换行

图片:
img标签, 一定要定义src标签


### 码云
git 版本控制
同类产品: cvs/svn

git不能完全替代svn，

Git 命令
1. git config --global user.name “yourname”
2. git config --global user.email “your email”
3. ssh -keygen -t rsa -C “your mail” (生成密钥，连按三次回车)
4. 在Gitee上面，创建一个新的仓库
5. 把id_rsa.pub中的代码用复制到网页中SSH密钥中
6. cd + 自己的工作目录
7. git init
8. git add .
9. git commit -m ""
9. git remote add origin + 你在gitee上面创建的仓库地址
10. git pull
11. git push -u origin master

###超链接
<a href="">超链接</a>


###表单(form)
表单标签的内容可以传递到后台程序
形成前端和后端的沟通渠道
