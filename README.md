# Docker Private Hub

![CI Status](https://github.com/antoinedray/docker-private-hub/workflows/CI/badge.svg)

Docker Private Hub is a look-alike Docker Hub for self-hosted registries.

The project is still under development.

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
