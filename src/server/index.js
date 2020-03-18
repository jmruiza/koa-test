require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'hello, world!'
  };
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;