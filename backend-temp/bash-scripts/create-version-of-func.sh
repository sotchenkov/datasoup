#!/bin/bash

yc serverless function version create \
--folder-id $1 \
--function-name ozon-to-google-sheets \
--memory 256m \
--execution-timeout 5s \
--runtime python311 \
--entrypoint index.handler \
--source-path backend-temp/temp.py
