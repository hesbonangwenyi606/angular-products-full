# Step 1: Build Angular app
FROM node:18 AS build
WORKDIR /app

COPY package*.json ./
# Fix peer dependency issue
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build --configuration production

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist/angular-products /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

