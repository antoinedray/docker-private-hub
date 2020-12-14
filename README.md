# Docker Private Hub

![Starts](https://img.shields.io/github/stars/antoinedray/docker-private-hub?style=social)
![MIT License](https://img.shields.io/github/license/antoinedray/docker-private-hub)
![Last Commit](https://img.shields.io/github/last-commit/antoinedray/docker-private-hub)
![CI Status](https://github.com/antoinedray/docker-private-hub/workflows/CI/badge.svg)
![Docker Pulls](https://img.shields.io/docker/pulls/antoinedray/docker-private-hub)
![Release](https://img.shields.io/github/v/release/antoinedray/docker-private-hub?include_prereleases)

Docker Private Hub is a look-alike Docker Hub for self-hosted registries.

__Please Note:__ The project is still under development.

## Features

* Similiar design to the official Docker Hub website
* Support for new multi-arch images
* Backward compatibilty for old registry images
* Easy to deploy

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

## Questions?

If you find a bug, feel free to [open an issue](https://github.com/antoinedray/docker-private-hub/issues/new) and fill out the issue template.

## Contributing

If you are looking to start working with the Docker Private Hub codebase, navigate to the GitHub issues tab and start looking through interesting issues.

Pull request, issue, or direct mention are welcome !
