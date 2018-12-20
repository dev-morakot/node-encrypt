/*
 * AWS Sdk KMS spike: (assuming node v6.6+)
 * 1 - Create master key at KMS
 * 2 - Copy alias or ARN
 * 3 - run this i.e.
 * $ node spike.js KEY_ALIAS YOUR_PLAINTEXT_TO_ENCRYPT
 */
var AWS = require('aws-sdk');

// aws-sdk is not reading my region info so i'll have to set it here
// maybe you have it working properly
// aws-sdk reads in your aws credentials from ~/.aws/credentials
AWS.config.update({region: 'us-east-2'});

var kms = new AWS.KMS();

// your input args
const KeyId = process.argv[2];
const Plaintext = process.argv[3];

// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#encrypt-property
/**
 * @params KeyId String
 * @params Plaintext String | Buffer
 * @params EncryptionContext object (optional) http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html
 * @params GrantTokens [Strings] (optional) http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant
 */
const params = {
	KeyId: '465b9156-cd56-4b7e-91e9-026c4f553931', // your key alias or full ARN key
	Plaintext: 'morakot', // your super secret.
};

kms.encrypt(params).promise().then(data => {
	const base64EncryptedString = data.CiphertextBlob.toString('base64');
	console.log('base64 encrypted string: ' + base64EncryptedString);
	return base64EncryptedString;
})
.then(base64EncryptedString => {
	// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/KMS.html#decrypt-property
	// @params KeyId String
	// @params CiphertextBlob Buffer(base64)
	// @params EncryptionContext object (optional) http://docs.aws.amazon.com/kms/latest/developerguide/encryption-context.html
	// @params GrantTokens [Strings] (optional) http://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#grant
	return kms.decrypt({
		CiphertextBlob: Buffer(base64EncryptedString, 'base64')
	}).promise();
})
.then(data => {
	console.log('Your super secret is: ' + data.Plaintext.toString('utf8'));
	// do something with it
})
.catch(err => console.log(err));


/*var creds = new AWS.Credentials({
  accessKeyId: 'AKIAI64SZXZXTK7GRH3Q', 
  secretAccessKey: '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', 
  sessionToken: 'session'
});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2:465b9156-cd56-4b7e-91e9-026c4f553931',
});*/

 /*kms.listKeys(function(err, data) {
   if (err) console.log(err); // an error occurred
   else     console.log(data);    
   });*/