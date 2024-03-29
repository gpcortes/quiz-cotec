FROM node:10 AS builder

WORKDIR /app

COPY . .

RUN yarn install --ignore-engines
RUN yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]
