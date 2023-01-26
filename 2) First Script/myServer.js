const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>Hello World :)</h1>');
});

const port = 8000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});