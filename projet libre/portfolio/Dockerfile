FROM ubuntu:latest

RUN apt-get update && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install -y nodejs \
  && apt-get install -y build-essential

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "build", "-l", "5000"]
