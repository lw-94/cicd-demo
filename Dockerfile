FROM node

WORKDIR /app

RUN npm i -g pnpm

COPY ./package*.json .

RUN pnpm i

COPY . .

# RUN pnpm build

# CMD [ "pnpm","dev" ]