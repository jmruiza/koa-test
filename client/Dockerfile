# base image
FROM node:latest

# set working directory
WORKDIR /app
COPY package.json .
COPY yarn.lock .

# install and cache app dependencies
# RUN yarn install --frozen-lockfile 
# RUN yarn upgrade caniuse-lite browserslist
# COPY . .

EXPOSE 3000

# TODO: Change by NODE_ENV
CMD yarn start