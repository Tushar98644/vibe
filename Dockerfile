FROM node:18-alpine3.18
WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN npm install -g pm2
RUN pnpm install --prod
COPY . .
RUN ["pm2-runtime","pnpm","--","dev"]