# docker build -t <nazov mojej aplikacie> .
# docker run -p <port na beh mojej aplikacie>:3000 -d <nazov mojej aplikacie>

FROM node:alpine3.11 AS development
ENV NODE_ENV=development
# Priprav utils
WORKDIR /utils
# Create app directory
WORKDIR /src
# If you are building your code for production
EXPOSE 8000
CMD [ "npm", "run", "start" ]
# CMD [ "npm", "run", "dockerstart" ]

FROM node:alpine3.11 AS production
ENV NODE_ENV=production
# Priprav utils
WORKDIR /utils
# Context je o poschodie vyssie!
COPY ./utils/* ./
# RUN npm install
RUN npm install
# Create app directory
WORKDIR /src
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Nezabudni, ze context je z docker-compose o poschodie vyssie!
COPY ./check_email_web_service/package*.json ./
# If you are building your code for production
RUN npm install
# Bundle app source
COPY ./check_email_web_service/* ./
# Ak bezim z docker-compose, uz je nastavene tam
# ENV BACKENDHOST='http://172.17.0.1:8001' 
EXPOSE 8000
CMD [ "npm", "run", "start" ]
# CMD [ "npm", "run", "dockerstart" ]