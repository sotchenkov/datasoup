#!/bin/bash

# Orchestrates function creation scripts

#oauth_token=$(cat | jq '.' | jq '.queryStringParameters .access_token' | jq -r)
#organization_id=$(cat | jq '.' | jq '.queryStringParameters .org_id' | jq -r)

yc config set token $oauth_token
yc config set cloud-id $cloud_id

#sh create-folder-n-func.sh

sh get-latest-ozon-script-version.sh
sh create-func-version.sh

# get_orgs=$(yc organization-manager organization list --token=$access_token --format json | jq -c)
