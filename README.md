
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