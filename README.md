# Introduction
A simple express server using the pem library to show how to create a server that allows HTTPS connections. This utilizes a self-signed certificate whcih is perfect for development servers.

There are no extra dependencies like openSSL or keytool required ot generate a certificate. It is done in the node server on startup.

# Usage
Server will startup from the command line.

```bash
npm install && npm start
```
To stop the server
```bash
ctrl+c
```


