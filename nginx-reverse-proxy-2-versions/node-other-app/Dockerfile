FROM node:9.1.0-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]
