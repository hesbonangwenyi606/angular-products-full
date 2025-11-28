# Step 1: Build Angular app
FROM node:18 AS build
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@16.2.0

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom nginx config for Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=build /app/dist/angular-products /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

