const connect = require("connect");

const app = connect();

function helloWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
}

function byeWorld(req, res, next) {
  res.setHeader("Content-Type", "text/plain");
  res.end("GoodBye World");
}

app.use("/hello", helloWorld);
app.use("/bye", byeWorld);
app.use("/", helloWorld);

app.listen(3000);

console.log("Server running on port 3000");
