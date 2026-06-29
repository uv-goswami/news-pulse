# Use a Debian-based Node image so we can install Python via apt
FROM node:18-bullseye

# Install Python, pip, and virtualenv (optional but recommended)
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app/backend

# Copy package files and install Node dependencies
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Copy the whole project (including the scraper directory)
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

# Expose the port (Render sets PORT env)
EXPOSE 3001

# Start the server (migrations are run inside the start script)
CMD ["npm", "start"]