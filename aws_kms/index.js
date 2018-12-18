var AWS = require('aws-sdk');
var kms = new AWS.KMS({region: 'us-east-2'});
var creds = new AWS.Credentials({
  accessKeyId: 'AKIAIID655PTBPLAKEQQ', 
  secretAccessKey: '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', 
  //sessionToken: 'session'
});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-2-west-1:20b5b430-d2fb-4e48-89cc-0bf88840145f',
});
 kms.listKeys(function(err, data) {
   if (err) console.log(err); // an error occurred
   else     console.log(data);    
   });