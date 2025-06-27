# Building Stage


FROM node:18-alpine AS build

ENV APP_DIR=/app/fullstack-app

WORKDIR ${APP_DIR}/frontend

COPY ./frontend/package*.json  .

RUN  npm install

COPY ./frontend .

RUN npm run build

# Initialization Stage
FROM node:18-alpine AS server

ENV APP_DIR=/app/fullstack-app

WORKDIR ${APP_DIR}/backend

COPY ./backend/package*.json .

RUN   npm install

COPY ./backend .

COPY --from=build ${APP_DIR}/frontend/dist ./dist

EXPOSE 6969

CMD ["npm","run","start"]
