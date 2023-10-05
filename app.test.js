const request = require('supertest');

const app = require('./app');
const tasks = require('./index').tasks;

test('Im alive!', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET /id', done => {
    const tasks = [
        {id: 1, desc: 'task 1', date: '2023-10-05'},
        {id: 2, desc: 'task 2', date: '2023-10-05'}
    ];
    
    request(app)
    .get('/2')
    .expect(200, tasks[1].desc === 'task 2')
    .end(done); 
});

test('GET /jibberish', done => {
    request(app)
    .get('/asdijopswko')
    .expect(404)
    .end(done); 
});