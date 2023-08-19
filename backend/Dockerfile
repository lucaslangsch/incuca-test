FROM node:lts-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN apk add --no-cache git

COPY . .

RUN chown -R node:node /home/node

RUN npm ci

USER node

CMD [ "node", "ace", "serve", "--watch" ]