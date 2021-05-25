const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('The login route', function() {
    it('should return true', function() {
        return request(app)
            .post('/login/userpsw')
            .send({ username: 'Dax', password: 'psw2' })
            .then(function(response){
                expect(response.body).to.equal(true)
            });
    });

    it('should return false', function() {
        return request(app)
            .post('/login/userpsw')
            .send({ username: 'FalseUser', password: 'FalsePassword' })
            .then(function(response){
                expect(response.body).to.equal(false)
            });
    });
});