FROM node:lts-alpine3.15
WORKDIR /app
COPY package.json yarn.lock .
RUN yarn install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]
# CMD ["sleep", "infinity"]
EXPOSE 3000