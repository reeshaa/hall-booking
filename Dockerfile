FROM node:16-alpine

WORKDIR app

COPY package*.json ./


COPY . .

RUN cd frontend/

RUN npm install --silent

RUN npm run build

RUN cd ..

RUN npm install --silent

RUN ls

EXPOSE 3000

CMD ["node","index"]