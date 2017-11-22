'use strict';

var request = require('request');

describe('The API', function() {

    it('should just work', function() {
      expect(true).toBe(true);
    });

    it('should send a GET request to route /api/keywords', function(done) {
      request.get({ url: 'http://localhost:8080/api/keywords', json: true}, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        expect(body.foo).toBe('bar');
        done();
      });
    });
});
