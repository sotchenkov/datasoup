#!/bin/bash

new_folder_id=$(yc resource-manager folder create --name datasoup \
  --description "Automation deployment Yandex Functions to transfer the data from Ozon Seller to Google Sheets" \
  --token ${1} \
  --cloud-id ${2} \
  --format json | jq -r '.id') >&2


yc serverless function create --name ozon-to-google-sheets --folder-id ${new_folder_id} --token ${1} --format json >&2
