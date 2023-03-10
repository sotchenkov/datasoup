#!/bin/bash

# Orchestrates function creation scripts

set -e

oauth_token=$(cat | jq '.' | jq '.queryStringParameters .access_token' | jq -r)
cloud_id=$(cat | jq '.' | jq '.queryStringParameters .cloud_id' | jq -r)

ozon_token=$(cat | jq '.' | jq '.queryStringParameters .ozon_token' | jq -r)
ozon_id=$(cat | jq '.' | jq '.queryStringParameters .ozon_id' | jq -r)

google_creds=$(cat | jq '.' | jq '.queryStringParameters .google_creds' | jq -r)


yc config set token $oauth_token
yc config set cloud-id $cloud_id


echo "Creating a folder and functions"
sh create-folder-n-func.sh

echo "Creating a version of the function"
sh create-func-version.sh ${ozon_token} ${ozon_id} ${google_creds}

echo "Creating a trigger"
sh set-trigger.sh


RESPONSE=$(cat | jq -sc '.[0] // {}' | jq -c '{statusCode:200}')
echo $RESPONSE | jq -c '.body |= tostring' # make sure 'body' is a string, not a json node