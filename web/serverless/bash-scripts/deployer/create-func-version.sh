#!/bin/bash

yc serverless function version create \
  --token ${1} \
  --cloud-id ${2} \
  --folder-name datasoup \
  --function-name ozon-to-google-sheets \
  --runtime python311 \
  --entrypoint main.py \
  --memory 128M \
  --execution-timeout 5s \
  --package-bucket-name ozon-script \
  --package-object-name ozon-to-gs.zip \
  --environment OZON_TOKEN=${3} \
  --environment OZON_ID=${4} \
  --environment GOOGLE_CREDS=${5} \
  --environment GOOGLE_TABLE_NAME=${6} \
  --environment GOOGLE_SHEET_NAME=${7} \
  --format json \
  >&2
