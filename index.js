// index.js
const listWorkouts = require('./listWorkouts.js');

exports.handler = (event, context,callback)=> {
	listWorkouts(event).then(listResponse => {
		console.log("Returning list: " + JSON.stringify(listResponse, null, 2));
		callback(null, listResponse);
	}).catch(error => {
		console.log("listWorkouts error: ", error);
		callback(error, null);
	});
}