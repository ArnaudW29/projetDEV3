const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('The admin report route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/admin/reports')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return admin logs', function() {
        return request(app)
            .get('/admin/reports')
            .then(function(response){
                expect(response.body).to.have.lengthOf.above(0);
                expect(response.body[0]).to.have.property('_id');
                expect(response.body[0]).to.have.property('reporter');
                expect(response.body[0]).to.have.property('reported');
                expect(response.body[0]).to.have.property('msg');
                expect(response.body[0]).to.have.property('validation');
                expect(response.body[0]).to.have.property('reporterUsername');
                expect(response.body[0]).to.have.property('reportedUsername');
            })
    });
});