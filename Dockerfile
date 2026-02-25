# Multi-stage Dockerfile

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Declare build args for Vite env injection
ARG GEMINI_API_KEY=PLACEHOLDER_API_KEY
ARG WHATSAPP_NUMBER=5549998267439
ARG LEAD_WEBHOOK_URL
ARG LEAD_WEBHOOK_TOKEN

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Write env vars to .env for Vite's loadEnv to pick up at build time
RUN printf "GEMINI_API_KEY=%s\nWHATSAPP_NUMBER=%s\nLEAD_WEBHOOK_URL=%s\nLEAD_WEBHOOK_TOKEN=%s\n" \
    "$GEMINI_API_KEY" "$WHATSAPP_NUMBER" "$LEAD_WEBHOOK_URL" "$LEAD_WEBHOOK_TOKEN" > .env

# Build with env vars available
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build artifacts from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
