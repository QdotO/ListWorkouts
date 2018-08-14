// queryDB.js
const tableName = process.env.workoutTableName || "workouts";
const region = process.env.region || "us-east-2";
const AWS = require('aws-sdk');
AWS.config.update({
	region: region,
	// endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();
module.exports = (request) => {
	return new Promise((resolve, reject) => {
		var params = {
			TableName: tableName,
			Key: {
				"userId": request.userId
			}
		};
		console.log("DynamoDB params: ", params);

		return resolve(docClient.get(params).promise());
	}).then(dbResponse => {
		console.log(`dbResponse: ${JSON.stringify(dbResponse)}`);
		if (typeof dbResponse.Item != 'undefined') {
			return dbResponse.Item;
		}else {
			console.log("Item not found in DB");
			return Promise.reject("Item not found in DB");
		}
	}).catch(error => {
		console.log("queryDB error: " + JSON.stringify(error, null, 2));
		return Promise.reject({
			errorType: "queryDB error",
			errorData: error,
			errorPayload: request
		});
	});


};