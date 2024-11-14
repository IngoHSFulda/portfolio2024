# Stage 1: Build der Angular-App
# Start with a Debian image
FROM debian:latest

# Update package list and install nano
RUN apt-get update && \
    apt-get install -y nano && \
    rm -rf /var/lib/apt/lists/*

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Servieren mit Nginx
FROM nginx:alpine

 COPY ssl/fullchain.crt /etc/letsencrypt/live/ingos-portfolio.de/fullchain.pem
 COPY ssl/privkey.key /etc/letsencrypt/live/ingos-portfolio.de/privkey.key


 RUN chmod 644 /etc/letsencrypt/live/ingos-portfolio.de/fullchain.pem
 RUN chmod 600 /etc/letsencrypt/live/ingos-portfolio.de/privkey.key


# Kopiere die benutzerdefinierte Nginx-Konfiguration
 COPY nginx.conf /etc/nginx/nginx.conf



COPY --from=build /app/dist/portfolio /usr/share/nginx/html
EXPOSE 80
EXPOSE 443

