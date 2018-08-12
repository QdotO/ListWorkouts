// listWorkouts.js

module.exports = (request)=> {
	return checkRequestBody(request)
	.then(queryDB)
	.then(translateList)
	.catch(error => {
		console.log("listWorkouts error: " + JSON.stringify(error, null, 2));
		return Promise.reject({
			errorType: "listWorkouts error",
			errorData: error,
			errorPayload: request
		});
	});
}