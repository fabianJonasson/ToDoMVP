const request = require('supertest');

const app = require('./app');

test('Im alive!', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET /jibberish', done => {
    request(app)
    .get('/asdijopswko')
    .expect(404)
    .end(done); 
});