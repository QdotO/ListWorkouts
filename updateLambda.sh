#!/bin/bash
file=./listworkouts.zip
if [ -e "$file" ]; then
    echo "zip already exists"
    echo "Erasing...."
    rm -r listworkouts.zip
fi 


zip -r listworkouts.zip .
echo "All zipped up"
echo "Now deploying..."
aws lambda update-function-code --function-name ListWorkouts --zip-file fileb://listworkouts.zip
echo "Done"