# compose
Simple example to demo docker-compose functionality

This repo contains a Dockerfile that builds a simple web application which when deployed as a docker container, can be accessed via localhost:4001
and counts the number of times the site is refreshed.  The count is maintained in a redis in-memory data store, residing in another docker
container.

Using docker-compose, the two containers are able to share a virtual network space such that no complicated configuration is needed to
enable them to communicate.
