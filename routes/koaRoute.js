const Koa = require('koa');//koa2导入的是一个class，故用大写
const router = require('koa-router')();//返回的是函数
const app = new Koa();//创建KOA对象

app.use(async (ctx,next) => { //调用异步函数处理请求
	console.log(`Process ${ctx.request.method} ${ctx.request.url}`)
	await next(); 
})

//增加路由
//路由1是动态路由
router.get('/hello/:name',async(ctx,next) => {
	let name = ctx.params.name;
	console.log(name);
	ctx.response.body = `<h1>hello,${name}</h1>`;	
})
//路由2是默认路由127.0.0.1:3000
router.get('/',async(ctx,next) =>{
	ctx.response.body = '<h2>morning!</h2>'
})

//路由3是多个中间件路由
router.get('/:users/:id',async(ctx,next) =>{
	// return User.findOne(ctx.params.id).then(function(user){
		let users = ctx.params.users;
		console.log(users);
		next();
		let id = ctx.params.id;
		console.log(id);
	// });
    ctx.response.body = `<h2>${users} id is ${id}</h2>`;
})

app.use(router.routes());
app.listen(3000);