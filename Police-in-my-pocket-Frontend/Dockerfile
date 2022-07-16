FROM node:16.14.2

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/

WORKDIR /app/frontend

COPY package.json /app/frontend
COPY package-lock.json /app/frontend

RUN npm install

COPY . /app/frontend

EXPOSE 19000

CMD ["npm", "run", "android"]