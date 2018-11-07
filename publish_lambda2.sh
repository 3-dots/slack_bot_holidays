#!/usr/bin/env bash
rm index2.zip
cd lambda2
# rm -rvf ./node_modules
npm i
zip -r -X ../index2.zip *
cd ..
aws lambda update-function-code --function-name slack_holidays_delayed --zip-file fileb://index2.zip
