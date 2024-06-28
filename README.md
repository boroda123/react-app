# react-app
Sample implementation of a React UI app, using remote REST API.


The project can be run
1. Locally from an IDE or command line:
   1. npm install
   2. npm run build
   3. npm start
2. As a Docker container:
   1. docker image build -t react-app:latest . 
   2. docker images  
   3. docker run -p 3002:3000 react-app
3. As AWS service: new image is built and deployed on "push" to the "main" branch

Currently, the service is deployed as:
https://k7b3riigaa.us-east-2.awsapprunner.com/

