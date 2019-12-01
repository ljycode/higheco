const http = require("http");
const fs = require("fs");
let server = http.createServer(function(req,res) {
  console.log(req.url);
  fs.readFile("." + req.url, (err,data) => {
    if (err) {
      res.statusCode(404);
      res.write("sorry");
      res.end();
    }
    res.write(data);
    res.end();
  });
});
server.listen(8080);