# Introduction
A simple express server using the pem library to show how to create a server that allows HTTPS connections. This utilizes a self-signed certificate whcih is perfect for development servers.

On a Mac there are no extra dependencies. The PEM library uses OpenSSL under the covers which should be installed on a mac be default. Windows on the other hand is a different beast and requires you to install OpenSSL. Good luck!!

# Usage
Server will startup from the command line.

```bash
npm install && npm start
```
To stop the server
```bash
ctrl+c
```


