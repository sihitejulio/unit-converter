FROM node:lts
# FROM node:16.13.2-alpine

# ENV CI=true
ENV PORT=3000

WORKDIR /app
COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# RUN npm install
RUN npm install --save --legacy-peer-deps
COPY . /app

CMD [ "npm", "start" ]