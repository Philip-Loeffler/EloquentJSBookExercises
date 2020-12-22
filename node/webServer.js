const http = require("http");

let server = http.createServer(function (request, response) {
  console.log("got requests", request.url);
  response.write("howdy");
  response.end();
});

server.listen(3000);
