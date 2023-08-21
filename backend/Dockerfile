FROM node:lts-alpine

RUN mkdir -p /home/node/app && chown node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node ./package*.json ./

RUN npm install

RUN npm i sqlite3

COPY --chown=node:node ./ ./

ENV DRIVE_DISK='local'

ENV NODE_ENV='development'

ENV APP_KEY='DQR9XEhl0ftK4cKprTAyyOAbcO2O65qM'

ENV DB_CONNECTION='sqlite'

ENV PORT='3333'

ENV HOST=0.0.0.0

EXPOSE 3333

CMD [ "npm", "run", "dev" ]