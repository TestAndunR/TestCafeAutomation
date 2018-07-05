let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {

	cognito_idp.adminCreateUser({
		UserPoolId: process.env.UserPoolId_cognitoTestUserPool, /* required */
		Username: "AndunRanmal", /* required */
		DesiredDeliveryMediums: ["EMAIL"],//[SMS | EMAIL,/* more items */],
		ForceAliasCreation: false,
		MessageAction: "RESEND",
		TemporaryPassword: "Andun!12345",
		UserAttributes: [{ Name: 'email', Value: 'andun@adroitlogic.com' }],
		ValidationData: [{ Name: '', Value: '' }]
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
	});


	callback(null, 'Successfully executed');
}