#!/bin/bash

new_folder_id=$(yc resource-manager folder create --name="datasoup" \
  --description="Automation deployment Yandex Functions to transfer the data from Ozon Seller to Google Sheets" \
  --format="json" | jq -r '.id')

yc serverless function create --name="ozon-to-google-sheets" --folder-id=${new_folder_id}
