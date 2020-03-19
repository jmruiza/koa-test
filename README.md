
# RESTful API with KoaJS y postgres

Based in this article: [Building a RESTful API with Koa and Postgres](https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/)

```bash
yarn test
yarn start
```

## Create databases in postgres

```psql
docker exec -i eclipse-postgres psql -U postgres -W

# CREATE DATABASE koa_api;
CREATE DATABASE
# CREATE DATABASE koa_api_test;
CREATE DATABASE
```

## TODO List
[x] [Building a RESTful API with Koa and Postgres](http://mherman.org/blog/2017/08/23/building-a-restful-api-with-koa-and-postgres)
[] [Stubbing HTTP Requests with Sinon (this article)](http://mherman.org/blog/2017/11/06/stubbing-http-requests-with-sinon)
[] [User Authentication with Passport and Koa](http://mherman.org/blog/2018/01/02/user-authentication-with-passport-and-koa)
[] [Stubbing Node Authentication Middleware with Sinon](http://mherman.org/blog/2018/01/22/stubbing-node-authentication-middleware-with-sinon)
