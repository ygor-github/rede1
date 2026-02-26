# Multi-stage Dockerfile

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Set env vars for Vite build
ENV GEMINI_API_KEY=PLACEHOLDER_API_KEY
ENV WHATSAPP_NUMBER=5549998267439
ENV LEAD_WEBHOOK_URL=https://automations.redeon.cloud/webhook/landing-lead
ENV LEAD_WEBHOOK_TOKEN=ba32e3b1599875b750d31ea0d8dbba30549897e150f0442f4fbd2dabc98f2196

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Write env file for Vite's loadEnv
RUN echo "GEMINI_API_KEY=$GEMINI_API_KEY" > .env && \
    echo "WHATSAPP_NUMBER=$WHATSAPP_NUMBER" >> .env && \
    echo "LEAD_WEBHOOK_URL=$LEAD_WEBHOOK_URL" >> .env && \
    echo "LEAD_WEBHOOK_TOKEN=$LEAD_WEBHOOK_TOKEN" >> .env

# Build with env vars available
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build artifacts from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
