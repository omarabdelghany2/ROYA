# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
# RUN npm run build

# Install 'serve' to serve the production build
# RUN npm install -g serve

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Command to run the app using 'serve'
CMD ["npm", "run", "start", "--turbo"]
