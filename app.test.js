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

test('POST /', async(done) => {
    const task = {
        id: tasks.length+1,
        desc: 'new test', 
        date: '2023-10-05'
    };

    const count = await tasks.length();
    await request(app)
        .post('/')
        .send(task)

    const newCount = await tasks.length()
    expect(newCount).toBe(count + 1);
    done();
});

test('DELETE /id', done => {
    const tasks = [
        {id: 1, desc: 'task 1', date: '2023-10-05'},
        {id: 2, desc: 'task 2', date: '2023-10-05'}
    ];

    request(app)
    .delete('/2')
    .expect(200, tasks[1] == undefined)
    .end(done); 
});

test('GET /jibberish', done => {
    request(app)
    .get('/asdijopswko')
    .expect(404)
    .end(done); 
});