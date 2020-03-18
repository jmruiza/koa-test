require('babel-register');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var Koa = require('koa');
var app = new Koa();

app.use(async req => {
    req.body = "Hello world!";
});

app.listen(PORT);