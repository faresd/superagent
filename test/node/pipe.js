var request = require('../../')
  , express = require('express')
  , app = express()
  , fs = require('fs')
  , bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', function(req, res){
  fs.createReadStream('test/node/fixtures/user.json').pipe(res);
});

app.post('/', function(req, res){
  res.send(req.body);
});

var base = 'http://localhost'
var server;
before(function listen(done) {
  server = app.listen(0, function listening() {
    base += ':' + server.address().port;
    done();
  });
});