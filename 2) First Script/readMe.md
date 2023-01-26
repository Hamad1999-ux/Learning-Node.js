# Node.js Server Boilerplate Code

The following code is an example of a basic server setup using Node.js. 
It requires the `http` module, which is built into Node.js.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello World :)</h1>');
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

This code creates a server using the http.createServer() method, which takes a callback function as its argument.
The callback function is executed every time a request is made to the server.
It takes two arguments: the request object (req), and the response object (res).

The res.end() method is used to end the response and send the specified data back to the client.

The server is then made to listen on a specific port using the server.listen() method.
This method takes two arguments: the port number and a callback function that is executed when the server is ready to start listening.

You can start the server by running the following command in the terminal:

```bash
node myServer.js
```

You should then see the message "Server listening on port 8000" output in the terminal, indicating that the server is running and ready to handle requests.

You can test the server by making a request to http://localhost:8000 in your browser.
You should see the message "Hello World :)" (in h1 tag as a Heading) displayed on the page.

