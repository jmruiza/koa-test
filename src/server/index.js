require('dotenv').config();
const PORT = process.env.PORT || 3000;
const Koa = require('koa');
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');

const app = new Koa();

app.use(indexRoutes.routes());
app.use(movieRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;