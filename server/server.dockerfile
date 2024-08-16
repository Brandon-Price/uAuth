FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY prisma ./prisma

RUN npx prisma generate

## RUN docker exec -it server npx prisma migrate dev --name init

COPY . .

EXPOSE 4000

CMD ["npm", "start"]