
let express = require( 'express');
let https = require( 'https');
let pem = require( 'pem' );
let app = express();

if( process.platform === 'win32'){
    process.env.OPENSSL_CONF = 'win32/openssl.cnf'
}

pem.createCertificate({ days: 1000, selfSigned: true}, (error, cert) =>{
    let options = {
        key: cert.serviceKey, 
        cert: cert.certificate
    }
    
    https.createServer(options, app).listen( 8443, ()=> {console.log('Server running')});
});

app.get( '/', (request, response) =>{
    response.send('Hello World');
});