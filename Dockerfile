FROM node:16-alpine

RUN apk update
RUN apk upgrade
RUN apk add bash

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

STOPSIGNAL SIGTERM

CMD ["npm", "start"]