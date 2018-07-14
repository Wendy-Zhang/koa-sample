const Koa = require('koa');
const app = new Koa();

//x-response-time 中间件
app.use((ctx,next) => {
	var start = new Date;  //第一步执行，进入路由
	next();  //第五步执行再次进入 x-response-time 中间件，记录2次通过此中间件「穿越」的时间
	var ms = new Date - start;
	ctx.set('X-Response-Time',ms + 'ms');  //第六步 返回 this.body
	console.log('response1:'+ ms);
	console.log(ctx);
});

//logger中间件
app.use((ctx,next) =>{
	var start = new Date;  //第二步执行 进入logger中间件
	next();  //第四步执行再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
	var ms = new Date - start;
	console.log('logger2:', ctx.request.method, ctx.request.url, ms);  
});

//response中间件
app.use((ctx,next) => {
	ctx.body = 'Hello World';  //第三步执行进入response中间件，没有捕获到下一个符合条件的中间件，传递到 upstream
    //ctx.response.body也是可以的，ctx是指上下文，封装了req res两个对象，ctx.req=ctx.request,ctx.res=ctx.response
});

app.listen(3000);