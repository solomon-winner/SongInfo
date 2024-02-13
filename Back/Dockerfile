FROM node:21.1.0

WORKDIR ./index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
