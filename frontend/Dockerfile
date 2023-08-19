FROM node:lts-alpine

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install vite

RUN npm install

RUN npm add vuetify

COPY . ./

EXPOSE 8080

CMD ["npm", "run", "dev"]

# FROM node:lts-alpine as build
# WORKDIR /app
# COPY package.json /app/package.json
# RUN npm install --silent
# RUN npm install @vue/cli@3.7.0 -g
# COPY . /app
# RUN npm run build

# # production environment
# FROM nginx:1.16.0-alpine
# COPY --from=build /app/dist /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]
