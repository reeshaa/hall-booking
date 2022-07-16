FROM node:16-alpine

WORKDIR app

COPY package*.json ./


COPY . .

RUN cd frontend/

RUN cd npm install --silent

RUN npm run build

RUN cd ..

RUN npm install --silent

EXPOSE 3000

CMD ["node","index.js"]