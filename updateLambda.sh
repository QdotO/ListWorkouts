zip -r listworkouts.zip .
aws lambda update-function-code --function-name ListWorkouts --zip-file fileb://listworkouts.zip