# base image
FROM node:latest

# set working directory
WORKDIR /app/api
COPY package.json .
COPY yarn.lock .

# install and cache app dependencies
# RUN yarn install --frozen-lockfile 
# RUN yarn upgrade caniuse-lite browserslist
# COPY . .

EXPOSE 3006
CMD yarn start