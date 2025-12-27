FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY . .

# Expose the Next.js dev server port
EXPOSE 3000

CMD ["pnpm", "run", "dev", "--hostname", "0.0.0.0"]
