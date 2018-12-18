var forge = require('node-forge');
 
// PEM-formatted private key
var privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCOEDvAy4g+MCLUDGk2ybxmXPR3ETXwlfAZo5lS5bDWDZe/uvMF
83VtN+Sf/AcRJ3A3F46vgKSaoe/38hXM4w/ADbUY5wWXAyeMf6y4kujOy/IxX2Ls
YYFkp6D085S1Ot69gKwodYnnwHxAZaREGC+jMTOwPRzK+Iz7aOrlBqPP9QIDAQAB
AoGANy43B3wHP6CS5qqrc4yIkXoputYEjZ6v1EWnmHt/ZKWC/AYxv24BfprnQv0y
AYfAHqYX1jOxvB6Kh1SRAzRvOSCnGmowLjZnG4aIfkN4pj5WKNk9BdGqy1oNfH3M
3JbuG5cxRowMiY3nOzIsbys9c2M3lEGNlqwz/FfPPUsyLUECQQD4+6lkcwKKJnLN
HG4ZM0chsyBJeFMmy+Z8mWHE5wrgP0+OqwCI8fg0neYMfQ1bkWxNzJtHm3kIZkKh
sQjVw3THAkEAkhEtr9dc5OsJeEaMU4FMiufx4EalT3WkvI9QId9xCJ1P9rPIiM0j
kxn1C1v6KMe94YW9VbU1rmURKEvUhgAhYwJBAMJjwYHiZUY09IZ9Ptw/87Y04u1Z
mxn8Mcxv+CxB8nTYGSYbDkTdHdr+uGBhte8a38LyDv3ePaW4KSeST4KNonsCQBZ9
ApWyCKFN9nVIF06793bjYv/uoIDtUeGeBu5QImz7G1aWM2esfa+mLW4ESS2CIx/X
oWDSt2MUOGIF2sCOwJUCQFSsxf5dzUjHRy4G3xaM0uqg70PUfPwYm7/jSoO734tZ
D8TrVoeYNZDvjZyVa7/jghMeKHAwRKyT8L2dmukEyJY=
-----END RSA PRIVATE KEY-----`;
 
// convert PEM-formatted private key to a Forge private key
var forgePrivateKey = forge.pki.privateKeyFromPem(privateKey);
 
// get a Forge public key from the Forge private key
var forgePublicKey = forge.pki.setRsaPublicKey(forgePrivateKey.n, forgePrivateKey.e);
 
// convert the Forge public key to a PEM-formatted public key
var publicKey = forge.pki.publicKeyToPem(forgePublicKey);
 
// convert the Forge public key to an OpenSSH-formatted public key for authorized_keys
//var sshPublicKey = forge.ssh.publicKeyToOpenSSH(forgePublicKey);
 
console.log(`PEM-formatted public key: ${publicKey}`);