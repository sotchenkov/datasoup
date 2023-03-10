#!/bin/bash

yc serverless function version create \
  --folder-name datasoup \
  --function-name ozon-to-google-sheets \
  --runtime python311 \
  --entrypoint main.py \
  --memory 128M \
  --execution-timeout 3s \
  --package-bucket-name ozon-script \
  --package-object-name ozon-to-gs.zip \
  --environment OZON_TOKEN=${1} \
  --environment OZON_ID=${2} \
  --environment GOOGLE_CREDS=${3}
