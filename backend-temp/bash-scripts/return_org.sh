#!/bin/bash
set -e

access_token=$(cat | jq '.' | jq '.queryStringParameters .access_token' | jq -r)

get_orgs=$(yc organization-manager organization list --token=$access_token --format json | jq .'[]')

RESPONSE=$(cat | jq -sc '.[0] // {}' | jq --arg orgs "$get_orgs" -c '{statusCode:200, body:{orgs:$orgs}}')
echo $RESPONSE >&2
echo $RESPONSE | jq -c '.body |= tostring' # make sure 'body' is a string, not a json node