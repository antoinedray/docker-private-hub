# build stage
FROM node:15.4-buster as build-stage

ARG DOCKER_REGISTRY
ARG DOCKER_REGISTRY_HOST
ARG DOCKER_REGISTRY_PORT

ENV REGISTRY_HOST localhost
ENV REGISTRY_PORT 5000

RUN echo "VUE_APP_DOCKER_REGISTRY=$DOCKER_REGISTRY" > .env.production
RUN echo "VUE_APP_DOCKER_REGISTRY_HOST=$DOCKER_REGISTRY_HOST" >> .env.production
RUN echo "VUE_APP_DOCKER_REGISTRY_PORT=$DOCKER_REGISTRY_PORT" >> .env.production

WORKDIR /app

COPY package*.json ./

RUN npm install -s --no-progress

COPY . .

RUN npm run build

# production stage
FROM nginx:1.19 as production-stage

ENV DOCKER_PRIVATE_HUB_HOST localhost
ENV REGISTRY_HOST localhost
ENV REGISTRY_PORT 5000

COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf.template /etc/nginx/templates/nginx.conf.template

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
