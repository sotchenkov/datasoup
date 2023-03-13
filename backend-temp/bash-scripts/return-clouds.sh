#!/bin/bash
set -e

oauth_token=$(cat | jq '.' | jq '.queryStringParameters .oauth_token' | jq -r)

get_clouds=$(yc resource-manager cloud list --token oauth_token --format json | jq -c)

RESPONSE=$(cat | jq -s --argjson clouds "$get_clouds" '{statusCode:200, body:{clouds:$clouds}}')
echo $RESPONSE | jq -c '.body |= tostring' # make sure is a string, not a json node