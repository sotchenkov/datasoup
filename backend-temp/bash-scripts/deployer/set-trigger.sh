#!/bin/bash

yc serverless function allow-unauthenticated-invoke --name ozon-to-google-sheets \
  --folder-name datasoup

yc serverless trigger create timer --name ozon-time-trigger \
  --description 'Runs the ozon-to-google-sheets script once an hour' \
  --cron-expression  '0 * ? * * *' \
  --folder-name datasoup \
  --invoke-function-name ozon-to-google-sheets

