FROM node:current-alpine as dev
WORKDIR /app
RUN apk add inotify-tools
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
EXPOSE $PORT
# For docker dev mode
EXPOSE 24678
CMD yarn dev --host -p $PORT

FROM node:current-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD yarn build

FROM node:current-alpine as runtime
WORKDIR /app
COPY --from=build /app .
COPY . .
CMD node dist
