require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Koa = require('koa');
const indexRoutes = require('./routes/index');

const app = new Koa();

app.use(indexRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;