# Dockerfile

FROM node:latest

WORKDIR /app/

COPY . /app/

RUN yarn install && yarn build

CMD ["yarn", "start"]
