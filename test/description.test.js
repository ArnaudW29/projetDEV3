const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('The descriptions [game] route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/description/morpion')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return a game description', function() {
        return request(app)
            .get('/description/421')
            .then(function(response){
                assert.strictEqual(typeof(response.body), typeof("string"));
            })
    });
});