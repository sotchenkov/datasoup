#!/bin/bash

# Orchestrates function creation scripts

set -e


REQUEST=$(jq '.')


oauth_token=$(jq '.queryStringParameters .oauth_token' <<< "$REQUEST" | jq -s | jq -r '.[]')

cloud_id=$(jq '.queryStringParameters .cloud_id' <<< "$REQUEST" | jq -s | jq -r '.[]')

ozon_token=$(jq '.queryStringParameters .ozon_token' <<< "$REQUEST" | jq -s | jq -r '.[]')
ozon_id=$(jq '.queryStringParameters .ozon_id' <<< "$REQUEST" | jq -s | jq -r '.[]')

google_creds=$(jq '.queryStringParameters .google_creds' <<< "$REQUEST" | jq -s | jq -r '.[]')
google_table_name=$(jq '.queryStringParameters .google_table_name' <<< "$REQUEST" | jq -s | jq -r '.[]')
google_sheet_name=$(jq '.queryStringParameters .google_sheet_name' <<< "$REQUEST" | jq -s | jq -r '.[]')


echo "Creating a folder and functions" >&2
sh create-folder-n-func.sh $oauth_token $cloud_id

echo "Creating a version of the function" >&2
sh create-func-version.sh ${oauth_token} ${cloud_id} ${ozon_token} ${ozon_id} ${google_creds} ${google_table_name} ${google_sheet_name}

echo "Creating a trigger" >&2
sh set-trigger.sh ${oauth_token} ${cloud_id}


RESPONSE=$(cat | jq -sc '.[0] // {}' | jq -c '{statusCode:200, body:{info:"OK"}}')
echo $RESPONSE | jq -c '.body |= tostring' # make sure 'body' is a string, not a json node
