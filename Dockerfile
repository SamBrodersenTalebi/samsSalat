# Use a specific version of node:16-alpine for consistency
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install your app dependencies using the npm binary
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Your app will be served on port 8080
EXPOSE 8080

# Copy the entrypoint script into the image
COPY docker-entrypoint.sh /usr/local/bin/

# Make sure your script is executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Use the entrypoint script to serve the app
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
CMD ["serve", "-s", "build", "-l", "8080"]
