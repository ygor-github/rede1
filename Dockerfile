# Multi-stage Dockerfile

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Set env vars for Vite build
ARG VITE_LANDING_DATA_URL
ARG VITE_API_KEY
ENV VITE_LANDING_DATA_URL=$VITE_LANDING_DATA_URL
ENV VITE_API_KEY=$VITE_API_KEY

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Write env file for Vite's loadEnv
RUN echo "VITE_LANDING_DATA_URL=$VITE_LANDING_DATA_URL" > .env && \
    echo "VITE_API_KEY=$VITE_API_KEY" >> .env

# Build with env vars available
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
