# build stage
FROM node:15.4-buster as build-stage

WORKDIR /app

ARG DOCKER_REGISTRY
ARG DOCKER_REGISTRY_HOST
ARG DOCKER_REGISTRY_PORT

RUN echo "VUE_APP_DOCKER_REGISTRY=$DOCKER_REGISTRY" > .env.production
RUN echo "VUE_APP_DOCKER_REGISTRY_HOST=$DOCKER_REGISTRY_HOST" >> .env.production
RUN echo "VUE_APP_DOCKER_REGISTRY_PORT=$DOCKER_REGISTRY_PORT" >> .env.production

COPY package*.json ./

RUN npm install -s --no-progress

COPY . .

RUN npm run build

# production stage
FROM nginx:stable as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
