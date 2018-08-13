// queryDB.js
const TableName = process.env.workoutTableName || "workouts";
const region = process.env.region || "us-east-1";
const AWS = require('aws-sdk');
AWS.config.update({
  region: region,
  // endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();
module.exports = (request)=> {
	return new Promise((resolve, reject) => {
		var params = {
			TableName: tableName,
			Key: {
				"userId": request.userId
			}
		};

		docClient.get(params).promise().then(dbResponse => {
			if(dbResponse.Count > 0){
				return resolve(dbResponse.Items);
			}
		});
	});

	
};