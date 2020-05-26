# mictemplate

## Docker-compose 
ak chces aby nebral predchadzajuce layers docker pouzi no-cache pri build image
 docker-compose  build --no-cache  

ak len jeden service potom:
 docker-compose  build --no-cache  auth_service

a na rozbehnutie kontainera:
docker-compose  up  auth_service

na kontrolu containerov pouzi:
 docker-compose  run  auth_service sh

 z dokumentacie:
    docker-compose run [service] [command] starts a new container from the image of the service and runs the command.
    docker-compose exec [service] [command] runs the command in the currently running container of that service.

 na inspekciu :
 docker inspect mictemplate_auth_service_1

 ## Docker
 pouzijem multi stage Dockerfile, jede stage pre development a druhy pre Prod
 https://docs.docker.com/develop/develop-images/multistage-build/

 

 ## testy
NEAUTHENTIFIKOVANA sluzba volajuca dalsiu sluzbu v backende:
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -H "Host:fe_service_notauth.localhost"  -X POST http://localhost:80

Vrati:  {
  "service": "be_service",
  "vratene": "OK"
} lebo fe_service_notauth vola dalej be_service a az ten vracia hodnotu ...

autentifikacia:
POZITIV
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -H "Host:fe_service_auth.localhost" -H Authentication:iamok -X POST http://localhost:80

vrati: {
  "service": "fe_service_auth",
  "vratene": "OK"
}

NEGATIV
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -H "Host:fe_service_auth.localhost" -H Authentication:iamNok -X POST http://localhost:80

vrati: {
  "service": "fe_service_auth",
  "vratene": "BAD authenticated"

# Jest test
do package.json je pre testovanie axios pridat : "jest": { "testEnvironment": "node" }, 
inak dava chybu 404 non existing page

