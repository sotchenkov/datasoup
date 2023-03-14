#!/bin/bash

yc serverless function allow-unauthenticated-invoke --name ozon-to-google-sheets \
  --token ${1} \
  --cloud-id ${2} \
  --folder-name datasoup \
  --format json \
  >&2

sleep 5

yc serverless trigger create timer --name ozon-time-trigger \
  --token ${1} \
  --cloud-id ${2} \
  --description 'Runs the ozon-to-google-sheets script once an hour' \
  --cron-expression '0 * ? * * *' \
  --folder-name datasoup \
  --invoke-function-name ozon-to-google-sheets \
  --format json \
  >&2