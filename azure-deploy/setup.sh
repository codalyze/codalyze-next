#!/bin/bash

GROUP_NAME=testgroup
ACR_NAME=codalyzenext
DOCKER_IMAGE_NAME=codalyze-next_web

az group create --name ${GROUP_NAME} --location southindia

az acr create --resource-group ${GROUP_NAME} --name ${ACR_NAME} --sku Basic

az acr login --name ${ACR_NAME}

# get ACR_LOGIN_SERVER name from command below
az acr list --resource-group ${GROUP_NAME} --query "[].{acrLoginServer:loginServer}" --output table

ACR_LOGIN_SERVER=codalyzenext.azurecr.io

docker tag ${DOCKER_IMAGE_NAME} ${ACR_LOGIN_SERVER}/${DOCKER_IMAGE_NAME}:v1

docker push ${ACR_LOGIN_SERVER}/${DOCKER_IMAGE_NAME}:v1

# list images in repository, see tags for specific image
az acr repository list --name ${ACR_NAME} --output table
az acr repository show-tags --name ${ACR_NAME} --repository ${DOCKER_IMAGE_NAME} --output table


# ----
# Kub

APP_ID=813ce2e8-c4a1-4abc-b8bb-8c4b97d16678
PASSWORD=ff5bcc96-097e-4f35-a04b-13404862e30e

# Get ACR_ID from the below command
az acr show --resource-group ${GROUP_NAME} --name ${ACR_NAME} --query "id" --output tsv

ACR_ID=/subscriptions/82efaf05-b1d5-4a42-a440-2d884e81396b/resourceGroups/testgroup/providers/Microsoft.ContainerRegistry/registries/codalyzenext

az role assignment create --assignee ${APP_ID} --scope ${ACR_ID} --role acrpull

# --

AKS_CLUSTER_NAME=codalyze-test-cluster

az aks create \
    --resource-group ${GROUP_NAME} \
    --name ${AKS_CLUSTER_NAME} \
    --node-count 1 \
    --service-principal ${APP_ID} \
    --client-secret ${PASSWORD} \
    --generate-ssh-keys

az aks get-credentials --resource-group ${GROUP_NAME} --name ${AKS_CLUSTER_NAME}

