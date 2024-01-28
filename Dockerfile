FROM node:20-alpine
RUN apk add --no-cache bash 
WORKDIR /var/www
COPY . .
EXPOSE 3000
