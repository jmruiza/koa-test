// Environment configurations
const config = require('./config')(true);

// Imports
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

// Custom imports
const indexRoutes = require('./routes/index');
const movieRoutes = require('./routes/movies');
 
const app = new Koa();

// Middlewares
app.use(bodyParser());

// Routes
app.use(indexRoutes.routes());
app.use(movieRoutes.routes());


// Start server
const server = app.listen(config.PORT, () => {
  console.log(`Server listening on port: ${config.PORT}`);
});

module.exports = server;