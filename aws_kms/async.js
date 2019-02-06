const AWS = require('aws-sdk');
const aes256 = require('aes256');
const AesCtrl = {};

// aws-sdk is not reading my region info so i'll have to set it here
// maybe you have it working properly
// aws-sdk reads in your aws credentials from ~/.aws/credentials
AWS.config.update({region: 'ap-southeast-1'});

const kms = new AWS.KMS();

/*const creds = new AWS.Credentials({
  accessKeyId: 'AKIAIU5XNGPHW2BXZSHA', 
  secretAccessKey: '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', 
  sessionToken: 'session'
});
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'ap-southeast-1:305aa34e-3377-488b-a3db-1c5b9ef3e05b',
});*/

// เข้าด้วย คี หนึง ถอดด้วย คี สอง
// หรือ คีหนึงต้องถอดด้วย คีหนึง

AesCtrl.KmsKeys = async (req, res) => {
  await kms.listKeys((err, data) => {
    
    let allKeys = data.Keys;
    
    let assetKey = data.Keys[0].KeyId;
    let assetKey1 = data.Keys[1].KeyId;
    let assetKey2 = data.Keys[2].KeyId;

    
    let plaintext = req.body.input;

    // เข้ารหัสด้วย AWS KMS 
    let cipher =  aes256.createCipher(assetKey);
    let cipher1 = aes256.createCipher(assetKey1);
    let cipher2 = aes256.createCipher(assetKey2);
 

    // เข้ารหัส
    let encrypted = cipher.encrypt(plaintext);

    // ถอดรหัส
    let decrypted = cipher.decrypt(encrypted); 

    res.json({
      result: {
        keyAll: allKeys,
        key0: assetKey,
        key1: assetKey1,
        key2: assetKey2,
        encrypt: encrypted, 
        decrypt: decrypted
      }
    });
  });
  
}

module.exports = AesCtrl;
