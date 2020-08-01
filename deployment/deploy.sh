#!/bin/bash

PROJECT=cm-next-app
ECR=414085459896.dkr.ecr.ap-south-1.amazonaws.com

IMAGE_TAG=$(aws ecr describe-images --repository-name cm-next-app --query 'sort_by(imageDetails,& imagePushedAt)[-1].imageTags[0]' | tr -d '"')


echo $POSTGRES_TAG
$(aws ecr get-login --no-include-email --region ap-south-1)
docker pull ${ECR}/${PROJECT}:${IMAGE_TAG}


docker-compose down &&
cat > ~/docker-compose.yml <<EOF
version: "3"
services:
  server:
    container_name: codalyze_server
    build:
      context: .
      dockerfile: Dockerfile
    image: ${ECR}/${PROJECT}:${IMAGE_TAG}
    ports: 
    - "3000:3000"
EOF

docker image prune -a -f
