FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]