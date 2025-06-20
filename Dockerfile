FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev
COPY . .
EXPOSE 5725
CMD ["node", "index.js"]

