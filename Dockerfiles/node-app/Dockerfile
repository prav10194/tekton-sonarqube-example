FROM ubuntu:16.04
COPY . /app
WORKDIR /app
RUN apt-get update && \
    apt-get -y install curl gnupg && \
    curl -sL https://deb.nodesource.com/setup_11.x  | bash - && \
    apt-get -y install nodejs
RUN npm install --save express jest dotenv && \
    npm install -D sonarqube-scanner jest-sonar-reporter supertest && \
    npm run test

