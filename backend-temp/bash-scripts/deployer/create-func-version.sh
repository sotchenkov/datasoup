#!/bin/bash

yc serverless function version create \
--folder-name "datasoup" \
--function-name "ozon-to-google-sheets" \
--memory 128m \
--execution-timeout 3s \
--runtime python311 \
--entrypoint main.main \
--source-path /home/alexey/datasoup/backend-temp/bash-scripts/deployer/get-latest-ozon-script-version.sh