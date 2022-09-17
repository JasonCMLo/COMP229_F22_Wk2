const http = require("http");

// Create the webserver web handler
const server = http.createServer((req, res) => {
  const parameter = req.url;
  //split(split(req.url, "/?")[0], "=")[1];

  console.log(parameter);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World</h1>");
});

// Start the server
server.listen(3000);

console.log("Server running at http://localhost:3000");
