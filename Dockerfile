# Multi-stage Dockerfile

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Set env vars for Vite build
ARG VITE_LANDING_DATA_URL
ARG VITE_API_KEY
ARG GEMINI_API_KEY
ARG WHATSAPP_NUMBER
ARG LEAD_WEBHOOK_URL
ARG LEAD_WEBHOOK_TOKEN

ENV VITE_LANDING_DATA_URL=$VITE_LANDING_DATA_URL
ENV VITE_API_KEY=$VITE_API_KEY
ENV GEMINI_API_KEY=$GEMINI_API_KEY
ENV WHATSAPP_NUMBER=$WHATSAPP_NUMBER
ENV LEAD_WEBHOOK_URL=$LEAD_WEBHOOK_URL
ENV LEAD_WEBHOOK_TOKEN=$LEAD_WEBHOOK_TOKEN

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Write env file for Vite's loadEnv (ensure it's exhaustive)
RUN echo "VITE_LANDING_DATA_URL=$VITE_LANDING_DATA_URL" > .env && \
    echo "VITE_API_KEY=$VITE_API_KEY" >> .env && \
    echo "GEMINI_API_KEY=$GEMINI_API_KEY" >> .env && \
    echo "WHATSAPP_NUMBER=$WHATSAPP_NUMBER" >> .env && \
    echo "LEAD_WEBHOOK_URL=$LEAD_WEBHOOK_URL" >> .env && \
    echo "LEAD_WEBHOOK_TOKEN=$LEAD_WEBHOOK_TOKEN" >> .env

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
