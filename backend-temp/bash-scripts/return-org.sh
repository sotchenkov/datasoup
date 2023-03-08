#!/bin/bash
set -e

access_token=$(cat | jq '.' | jq '.queryStringParameters .access_token' | jq -r)

get_orgs=$(yc organization-manager organization list --token=$access_token --format json | jq -c)

RESPONSE=$(cat | jq -s --argjson orgs "$get_orgs" '{statusCode:200, body:{orgs:$orgs}}')
echo $RESPONSE | jq -c '.body |= tostring' # make sure is a string, not a json node