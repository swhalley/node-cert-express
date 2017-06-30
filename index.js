
let express = require( 'express');
let https = require( 'https');
let pem = require( 'pem' );
let app = express();

//in a windows environment, openSSL isn't available by default.
//this provides an environment variable to point to a default/sample 
//configuration file for openssl. Ideally the conf file path would be a 
//parameter passed into the program but I left it here for educational purpose
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