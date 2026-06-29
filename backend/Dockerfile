# Use Node 20 (bullseye) – compatible with Prisma v7 and other modern packages
FROM node:20-bullseye

# Install Python, pip, and virtualenv
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app/backend

# Copy package files and install ALL dependencies (including dev for build)
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy the whole project (including scraper)
COPY . .

# Install Python dependencies for the scraper
WORKDIR /app
RUN pip3 install --no-cache-dir -r scraper/requirements.txt

# Back to backend directory
WORKDIR /app/backend

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Remove dev dependencies (keep prisma because it's now in dependencies)
RUN npm prune --omit=dev

# Expose the port (Render sets PORT env)
EXPOSE 3001

# Start the server (migrations run inside the start script)
CMD ["npm", "start"]