
# RESTful API with KoaJS y postgres

Based in this [articles](#todo-list)

## Scripts

```bash
yarn test   # Run test cases (mochaJS)
yarn start  # Run API
```

## Prerrequisites

### Set .env values

Copy the _.env.demo_ file as _.env_ an set the values

### Create databases in postgres

```psql
docker exec -i eclipse-postgres psql -U postgres -W

CREATE DATABASE koa_api;
CREATE DATABASE koa_api_test;
```

### Migrate information with KnexJS

In order to run, you must install KnexJS as global:

```bash
npm install knex -g
yarn global add knex
```

Then:

```bash
# Migrate schema for development environment
knex migrate:latest --env development
# Apply edited seed
knex seed:run --env development
```

## Project structure

* test: Test cases for [mochaJS](https://mochajs.org/)
* src/server: Source code for API
  * db: All related with DB connection ([KnexJS](http://knexjs.org/))
  * routes: Routes resolvers for API

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