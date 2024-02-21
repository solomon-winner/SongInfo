FROM node:21.6.1

WORKDIR ./src/index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
