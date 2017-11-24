'use strict';

var Percolator = require('percolator').Percolator;

var app = {
  protocol: 'http',
  port: 8080,
  autoLink: false,
};

var server = new Percolator(app);

server.route('/api/keywords', {

  GET: function(req, res) {
    var keywords = {
      "_item":[{"id": 1, value:"Mission Impossible", categoryID: 1},
	       {"id": 2, "value": "Jeff Bridges", categoryID: 2},
	       {"id": 3, "value": "Quentin Tarantino", categoryID: 3}]
    }
    res.object(keywords).send();
  }

});

server.listen(function(err) {
  if(err) { console.log(err); throw err;};
  console.log('Percolator running on ' + server.port);
});
