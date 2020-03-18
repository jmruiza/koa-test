require('babel-register');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var Koa = require('koa');
var app = new Koa();

/*
    When a middleware invokes next() the function suspends 
    and passes control to the next middleware defined.
*/

// logger
app.use(async (ctx, next) => {
    console.log('1. logger');
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});
  
  // x-response-time
app.use(async (ctx, next) => {
    console.log('2. x-response-time');
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});
  
  // response
app.use(async ctx => {
    console.log('3. response');
    ctx.body = 'Hello World';
});

app.listen(PORT);