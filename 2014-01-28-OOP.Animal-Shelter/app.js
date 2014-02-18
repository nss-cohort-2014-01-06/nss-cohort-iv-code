var http = require('http');
var connect = require('connect');
var directory = 'public';
var port = process.env.PORT;

var app = connect()
  .use(function(req, res, next){
    next();
  })
  .use(connect.logger('short'))
  .use(connect.static(directory));

http.createServer(app).listen(port, function(){
  console.log('Node server listening. Port: ' + port + ', Directory: ' + directory);
});

