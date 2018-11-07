#!/usr/bin/env bash
rm index.zip
cd lambda
npm i
zip -r -X ../index.zip *
cd ..
aws lambda update-function-code --function-name Slack_holidays --zip-file fileb://index.zip
