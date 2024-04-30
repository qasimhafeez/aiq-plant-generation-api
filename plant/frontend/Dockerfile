FROM node:16-alpine AS BUILD_IMAGE

WORKDIR /app

COPY package.json ./

# install dependencies
RUN npm install

COPY . .

RUN npm run build
CMD ["npm", "run", "start"]

# production environment
FROM node:16-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/build ./build
# COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm install -g serve
# serve the build
CMD ["serve", "-s", "build"]