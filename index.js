
const http = require('http');

http.createServer((req, res) => {
  res.end("Hello CI/CD");
}).listen(3000);

console.log("Server running...");
