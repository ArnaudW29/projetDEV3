const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require('../server');

describe('The users route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/users')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return all users', function() {
        return request(app)
            .get('/users')
            .then(function(response){
                expect(response.body).to.have.lengthOf.above(0);
                expect(response.body[0]).to.have.property('_id');
                expect(response.body[0]).to.have.property('username');
                expect(response.body[0]).to.have.property('email');
                expect(response.body[0]).to.have.property('admin');
                expect(response.body[0]).to.have.property('warning');
                expect(response.body[0]).to.have.property('blacklist');
                expect(response.body[0]).to.have.property('password');
            })
    });
});

describe('The users userId route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/users/607701f9b0ecbbef305074fe')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return all users', function() {
        return request(app)
            .get('/users/607701d0b0ecbbef305074fc')
            .then(function(response){
                expect(response.body).to.have.property('_id');
                expect(response.body).to.have.property('username');
                expect(response.body).to.have.property('email');
                expect(response.body).to.have.property('admin');
                expect(response.body).to.have.property('warning');
                expect(response.body).to.have.property('blacklist');
                expect(response.body).to.have.property('password');
            })
    });
});

describe('The users username userId route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/users/username/607701d0b0ecbbef305074fc')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return a username', function() {
        return request(app)
            .get('/users/username/607701f9b0ecbbef305074fe')
            .then(function(response){
                assert.strictEqual(response.body, "Dax");
            })
    });
});

describe('The users email username route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/users/email/Seb')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return an email', function() {
        return request(app)
        .get('/users/email/Pin1')
        .then(function(response){
            assert.strictEqual(response.body, "email3@gmail.com");
        });
    });
});

describe('The users isAdmin username route', function() {
    it('should return OK status', function() {
        return request(app)
        .get('/users/isAdmin/Pin1')
        .then(function(response){
            assert.strictEqual(response.status, 200);
        });
    });

    it('should return a boolean', function() {
        return request(app)
        .get('/users/isAdmin/TheGregouze')
        .then(function(response){
            assert.strictEqual(response.body, true);
        });
    });
});