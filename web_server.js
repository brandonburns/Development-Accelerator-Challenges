var http = require('http');
      fs = require('fs');
var request = function (req, res) {
  var readStream = fs.createReadStream('index.html');
   readStream.on('open', function () {
    readStream.pipe(res);
    });
   readStream.on('error', function(error) {
    res.end(error);
  });
}

var server = http.createServer(request);
server.listen(8080);
