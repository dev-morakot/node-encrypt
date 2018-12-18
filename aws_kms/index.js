var AWS = require('aws-sdk');
var kms = new AWS.KMS({region: 'us-east-2'});
var creds = new AWS.Credentials({
  accessKeyId: 'AKIAI64SZXZXTK7GRH3Q', 
  secretAccessKey: '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', 
  //sessionToken: 'session'
});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2:465b9156-cd56-4b7e-91e9-026c4f553931',
});

 kms.listKeys(function(err, data) {
   if (err) console.log(err); // an error occurred
   else     console.log(data);    
   });