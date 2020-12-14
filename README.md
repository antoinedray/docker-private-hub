# Docker Private Hub

![CI Status](https://github.com/antoinedray/docker-private-hub/workflows/CI/badge.svg)

## Usage

This application is available in the form of a Docker image that you can run as a container by executing this command:

```sh
sudo docker run \
  -d \
  -p 80:80 \
  -e DOCKER_PRIVATE_HUB_HOST=localhost \
  -e REGISTRY_HOST=localhost \
  -e REGISTRY_PORT=5000 \
  antoinedray/docker-private-hub:latest
```

## Run web interface from source

### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn serve
```

#### Compiles and minifies for production
```
yarn build
```

#### Lints and fixes files
```
yarn lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
