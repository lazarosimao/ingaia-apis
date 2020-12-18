FROM node:latest

WORKDIR /app

COPY . .

RUN apt-get update && \
    apt-get install -qq -y build-essential nodejs yarn

RUN yarn install

EXPOSE 3333

ENTRYPOINT ["yarn", "start"]