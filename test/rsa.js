var generateRSAKeypair = require('generate-rsa-keypair')
 
var pair = generateRSAKeypair()
 
console.log(pair.private) // String with the private key in PEM format
console.log(pair.public)