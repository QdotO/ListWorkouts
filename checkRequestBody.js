// checkRequestBody.js

module.exports = (request)=> {
	return new Promise((resolve, reject)=>{
		console.log("Request to be checked: " + JSON.stringify(request, null, 2));

		if(request == null){
			reject("request is undefined");
		} else if(request.userId == null){
			reject("request.userId is undefined");
		}else {
			console.log("Request checks out....");
			resolve(request);
		}
	}).catch(error => {
		console.log("checkRequestBody error: " + JSON.stringify(error, null, 2));
		return Promise.reject({
			errorType: "checkRequestBody error",
			errorData: error
		});
	});
};