const server = require("http");
server
  .createServer((req, res) => {
    res.write("<h1>this is my first server</h1>");
    res.end("");
  })
  .listen(4000, () => {
    console.log("server started");
  });
