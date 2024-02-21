FROM node:21.6.1

WORKDIR ./index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
