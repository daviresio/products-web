FROM node:22-alpine AS builder
ENV NODE_ENV production

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install --dev @types/react

COPY . .

RUN export $(cat .env | xargs)

RUN npm run build

FROM nginx:1.25.4-alpine as production
ENV NODE_ENV production

COPY --from=builder /app/dist /usr/share/nginx/html

RUN find /usr/share/nginx/html -name '*.map' -delete

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]