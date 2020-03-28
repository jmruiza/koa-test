
# RESTful API with KoaJS y postgres

Based in this [article](#todo-list)

## Scripts

To run first check the [prerrequisites](#prerequisites)

```bash
# Using NPM
npm run test  # Run test cases (mochaJS)
npm start     # Run API

# Using Yarn
yarn test     # Run test cases (mochaJS)
yarn start    # Run API
```

## Prerrequisites

### 1. Install packages

```bash
npm install   # Using NPM
yarn install  # Using Yarn
```

### 2. Set .env values

Copy the _.env.demo_ file as _.env_ and set the values.


### 3. Create databases in postgres

```psql
CREATE DATABASE koa_api;
CREATE DATABASE koa_api_test;
```

If use a docker container:
```psql
docker exec -i <container> psql -U <user> -W
CREATE DATABASE koa_api;
CREATE DATABASE koa_api_test;
```

#### Migrate information with KnexJS

In order to run, you must install KnexJS as global:

```bash
npm install knex -g   # Using NPM
yarn global add knex  # Using Yarn
```

Then:

```bash
# Migrate schema for development environment
knex migrate:latest --env development
# Apply edited seed
knex seed:run --env development
```

## Project structure

```
.babelrc
.dockerignore
.env.demo
Dockerfile
index.js
knexfile.js
package.json
README.md
src - Source code
 - api      # Express route controllers for all the endpoints of the app
 - config   # Environment variables and initial configuration related stuff
 - common   # Common files / helpers
 - models   # Database models
 - init     # Data for inicializate app -> Change for db (Knex example)
lib - Build project
 - api      # Express route controllers for all the endpoints of the app
 - config   # Environment variables and initial configuration related stuff
 - common   # Common files / helpers
 - models   # Database models
 - init     # Data for inicializate app -> Change for db (Knex example)
```

## TODO List

Read articles:

* [x] [Building a RESTful API with Koa and Postgres](http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres)
* [ ] [Stubbing HTTP Requests with Sinon (this article)](http://mherman.org/blog/2017/11/06/stubbing-http-requests-with-sinon)
* [ ] [User Authentication with Passport and Koa](http://mherman.org/blog/2018/01/02/user-authentication-with-passport-and-koa)
* [ ] [Stubbing Node Authentication Middleware with Sinon](http://mherman.org/blog/2018/01/22/stubbing-node-authentication-middleware-with-sinon)

Check this resources:
* [ ] [Copy files between git branches](https://xliska.wordpress.com/2010/09/22/copy-files-between-git-branches/)
* [ ] [Koa vs Express](https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md)
* [ ] [Koa Examples](https://github.com/koajs/examples)
* [ ] [Functional Testing with TestCafe](https://mherman.org/blog/functional-testing-with-testcafe/)

## Resources
* [node-koa-api (repo)](https://github.com/mjhea0/node-koa-api)