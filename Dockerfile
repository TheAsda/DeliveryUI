FROM node:erbium

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY ./ ./

RUN npm run build:prod
RUN npm install -g serve

CMD serve -s dist

EXPOSE 5000