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

 