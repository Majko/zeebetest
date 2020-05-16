# mictemplate

## Docker-compose 
ak chces aby nebral predchadzajuce layers docker pouzi no-cache pri build image
 docker-compose  build --no-cache  

ak len jeden service potom:
 docker-compose  build --no-cache  api-gw

a na rozbehnutie kontainera:
docker-compose  up  api-gw

na kontrolu containerov pouzi:
 docker-compose  run  api-gw sh

 z dokumentacie:
    docker-compose run [service] [command] starts a new container from the image of the service and runs the command.
    docker-compose exec [service] [command] runs the command in the currently running container of that service.

 na inspekciu :
 docker inspect mictemplate_api-gw_1

 ## Docker
 pouzijem multi stage Dockerfile, jede stage pre development a druhy pre Prod
 https://docs.docker.com/develop/develop-images/multistage-build/

 

 ## testy
 curl -d '{"key1:"value1", "key2":"value2", "auth":"iamok"}' -H "Content-Type: application/json" -H  Host:service1.localhost -X POST http://localhost:80

Vrati: {
  "service": "service1",
  "vratene": "OK"
}

curl -d '{"key1:"value1", "key2":"value2"}' -H "Content-Type: application/json" -H  Host:service2.localhost -X POST http://localhost:80

Vrati:  {
  "service": "backservice",
  "vratene": "OK"
} lebo service2 vola dalej backservice a az ten vracia hodnotu ...

autentifikacia:
curl -d '{"key1":"value1", key2":"value2", "auth":"iamnok"}' -H "Content-Type: application/json" -H  Host:authservice.localhost -X POST http://localhost:80

vrati: {
  "service": "service1",
  "vratene": "BAD"
}