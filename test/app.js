//https://medium.com/@thanahongsuwan/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B8%AB%E0%B8%B1%E0%B8%AA%E0%B9%81%E0%B8%9A%E0%B8%9A-public-key-e087bb1efa21
//https://srakrn.me/blog/public-private-key-for-dummies/
//https://blog.nextzy.me/blockchain-ep-3-digital-wallet-927aaacc02e8
const crypto = require('crypto')
const path = require('path')
const FileSystem = require('fs')

function a(data) {
    try {
        var cipher = crypto.createCipher('aes-256-cbc', '123456');
        var encrypted = Buffer.concat([cipher.update(new Buffer(JSON.stringify(data), "utf8")), cipher.final()]);
        FileSystem.writeFileSync(`key/public.pem`, encrypted);
        return { message: "Encrypted!" };
    } catch (exception) {
        throw new Error(exception.message);
    }
}

const enc = a('morakot');
console.log('enc', enc);

/*function encrypt(toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey)
  const publicKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toEncrypt, 'utf8')
  const encrypted = crypto.publicEncrypt(publicKey, buffer)
  return encrypted.toString('base64')
}

function decrypt(toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey)
  const privateKey = fs.readFileSync(absolutePath, 'utf8')
  const buffer = Buffer.from(toDecrypt, 'base64')
  const decrypted = crypto.privateDecrypt(
    {
      key: privateKey.toString(),
      passphrase,
    },
    buffer,
  )
  return decrypted.toString('utf8')
}

const enc = encrypt('hello', `key/public.pem`)
console.log('enc', enc)

const dec = decrypt(enc, `key/private.pem`)
console.log('dec', dec)
*/
/*var NodeRSA = require('node-rsa');

var publicKeyStr = "-----BEGIN PUBLIC KEY-----"
  + "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4TIqUYxpMhciWFFSFKdF"
  + "PfpGKlyfk1Uv0RpfmTEgKbxZELV4r2tVTK6WtTVF+z+PK/w/YinncVRwN6PlC1W0"
  + "W1OkHNJ9hoEqhAgI46Ts/1OHbqQIj6KTuMvpbw8yi8Vg1MjZ4+PNawgHNoYJvip9"
  + "YM35dlb6b9bcbPXtIHv50VgIMLgIo9VtLBkHdQs9TPHkZzH+AmqZP9oe9wiMgvq3"
  + "ipGz6ErhKOBzps0p9fyCUzTDgnfn1N9qjZX/b72S5naMYMlBkCuhCNYvfdM3zkYN"
  + "Ay10YX+O3kVuzBsgNhj9rj0eiKTI4edTLaLtus20EaH71MiSz7DnKTRUJC4zARqy"
  + "TwIDAQAB"
  + "-----END PUBLIC KEY-----";

var publicKey = new NodeRSA();
publicKey.importKey(publicKeyStr,'pkcs8-public');

var sensitiveData =  "hello node.js";
console.log("NodeJs");
console.log("data: " + sensitiveData);
var encrypted = publicKey.encrypt(sensitiveData, 'base64');
console.log("enc: " + encrypted);*/
