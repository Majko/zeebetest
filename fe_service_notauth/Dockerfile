# docker build -t <nazov mojej aplikacie> .
# docker run -p <port na beh mojej aplikacie>:3000 -d <nazov mojej aplikacie>

# prvy stage pre dev, len robim mount na file system kde mam node code
FROM node:alpine3.11 AS development
ENV NODE_ENV=development
# Priprav utils
WORKDIR /utils
# Create app directory
WORKDIR /src
EXPOSE 8000
CMD [ "npm", "run", "start" ]
# CMD [ "npm", "run", "dockerstart" ]

# druhy stage pre prod, tu uz kopirujem files do kontajnera
FROM node:alpine3.11 AS production
ENV NODE_ENV=production
# Priprav utils
WORKDIR /utils
COPY ./utils/* ./
# RUN npm install
RUN npm install
# Create app directory
WORKDIR /src
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# Nezabudni, ze context je z docker-compose o poschodie vyssie!
COPY ./fe_service_notauth/package*.json ./
# If you are building your code for production
RUN npm install
# Bundle app source
COPY ./fe_service_notauth/* ./
# Ak bezim z docker-compose, uz je nastavene tam
# ENV BACKENDHOST='http://172.17.0.1:8001' 
EXPOSE 8000
CMD [ "npm", "run", "start" ]
# CMD [ "npm", "run", "dockerstart" ]