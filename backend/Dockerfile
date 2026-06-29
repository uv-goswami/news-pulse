# Use Node 20 (bullseye)
FROM node:20-bullseye

# Install Python, pip, and virtualenv
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Set working directory to /app/backend
WORKDIR /app/backend

# Copy backend package files and install ALL dependencies (including dev for build)
COPY backend/package*.json ./
RUN npm ci && npm cache clean --force

# Copy the whole backend source
COPY backend/ .

# Copy scraper directory (from the repository root) into /app/scraper
COPY scraper /app/scraper

# Install Python dependencies for the scraper
WORKDIR /app
RUN pip3 install --no-cache-dir -r scraper/requirements.txt

# Back to backend directory
WORKDIR /app/backend

# Set a dummy DATABASE_URL for Prisma Client generation
ENV DATABASE_URL=postgresql://dummy:dummy@localhost:5432/dummy

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Verify the compiled file exists (debug)
RUN ls -la dist && ls -la dist/server.js

# Do NOT prune dev dependencies – keep everything to avoid missing runtime files
# (Prune is safe, but skipping it ensures no accidental removal)

# Expose the port
EXPOSE 3001

# Start the server: run migrations, then start using relative path
CMD ["sh", "-c", "npm run prisma:deploy && node dist/server.js"]