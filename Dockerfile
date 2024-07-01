
#
# Build stage
#
FROM node:18-alpine
ARG REACT_APP_ENV=Local
ENV REACT_APP_ENV=$REACT_APP_ENV
WORKDIR /home/react-app
COPY public/ /home/react-app/public
COPY src/ /home/react-app/src
COPY package.json /home/react-app/.

RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]