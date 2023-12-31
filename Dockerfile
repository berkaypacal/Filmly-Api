FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 4000

FROM base as production

ENV NODE_PATH=./build

RUN npm run build