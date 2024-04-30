# Use Node.js image for building backend
FROM node:alpine

# Set working directory for backend
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy backend source code
COPY . .

# Build backend app
CMD ["npm", "run", "dev"]
