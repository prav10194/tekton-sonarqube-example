## Build and push your Dockerfile

In case you want to build your own image and not use the ones I have uploaded on my account. You can follow the steps - 

1. Assuming you already have a docker account, run the following command to build 

```cmd
docker build -t <docker_username>/node-sonarqube:0.1 .
```

2. Push the docker image to your account. 

```cmd
docker push <docker_username>/node-sonarqube:0.1
```

