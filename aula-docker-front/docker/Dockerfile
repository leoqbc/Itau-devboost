FROM node:14.10.1-alpine

# shell script
RUN mkdir /app

RUN chown -R 1000:1000 /app

RUN npm i -g typescript
RUN npm i -g nodemon

CMD sh -c "nodemon dist/main.js & tsc -w"

EXPOSE 5000