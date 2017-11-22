'use strict';

var Percolator = require('percolator').Percolator;

var app = {
  protocol: 'http',
  port: 8080,
};

var server = new Percolator(app);

server.route('/api/keywords', {

  GET: function(req, res) {
    res.object({'foo': 'bar'}).send();
  }

});

server.listen(function(err) {
  if(err) { console.log(err); throw err;};
  console.log('Percolator running on ' + server.port);
});
