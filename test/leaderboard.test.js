const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('The leaderboard [game] route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/leaderboard/puissance4')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return a game leaderboard', function() {
        return request(app)
            .get('/leaderboard/garticPhones')
            .then(function(response){
                expect(response.body).to.have.lengthOf.above(0);
                expect(response.body[0]).to.have.property('pseudo');
                expect(response.body[0]).to.have.property('score');
            })
    });
});