FROM node:lts-alpine3.15
WORKDIR /
COPY package.json yarn.lock .
RUN yarn install
WORKDIR /app
ENV PATH /node_modules/.bin:$PATH
CMD ["npm", "run", "dev"]
# CMD ["sleep", "infinity"]
EXPOSE 3000