'use strict';

var request = require('request');

describe('The API', function() {

    it('should just work', function() {
      expect(true).toBe(true);
    });

    it('should send a GET request to route /api/keywords', function(done) {
      var expected = {
        "_item":[{"id": 1, "value": "Mission Impossible", categoryID: 1},
		 {"id": 2, "value": "Jeff Bridges", categoryID: 2},
		 {"id": 3, "value": "Quentin Tarantino", categoryID: 3}]
	  }

      request.get({ url: 'http://localhost:8080/api/keywords', json: true}, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        expect(body).toEqual(expected);
        done();
      });
    });
});
