# koa-sample
###这个项目为了解koa更多特性应用而作的样例。<br>
---------
以下记录一点本人对koa基本的了解：
* koa1与koa2的特点主要在于：koa1的中间件使用generator函数，使用yield next进入下一个中间件；koa2中间件使用async和await函数，使用await next()进入下一个中间件。
* koa1中用this来调用写中间件和处理请求和响应时的所有方法，而在koa2中，用ctx对象表示上下文（context），ctx对象封装了request和response对象。在koa2中用ctx代替了this。<br>
代码展示：
```
app.use(async ctx => {
  ctx; // 这是 Context
  ctx.request; // 这是 koa Request
  ctx.response; // 这是 koa Response
});
```
具体内容详见koa官网，附上中文官网链接` https://koa.bootcss.com ` 以及github上的官方文档` https://github.com/koajs/koa `<br>
* 本文中主要写了中间件`middleware` 和 `koa-router`部分的样例。详见route文件夹中。
* koa框架提供了一个轻量优雅的函数库，除了上述提到的路由、中间件的应用外，还有`错误处理`和`代理支持`和`重定向`等都提供了相应的方法，阮一峰老师的博客上的教程比较适合入门 `http://www.ruanyifeng.com/blog/2017/08/koa.html`<br>

------------

后续内容有待补充。。。
