const request = require('supertest');

const app = require('./app');
const tasks = require('./routes/index').tasks;

test('Im alive!', done => {
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});

test('GET /id', done => {
    request(app)
    .get('/2')
    .expect(200, 'task 2')
    .end(done); 
});

    /*afterAll(async () => {
        await request(app).delete(`/${newTask.id}`)
      });*/
      test('POST /', async () => {
        const newTask = {
            id: tasks.length+1,
            desc: 'new test', 
            date: '2023-10-05'
        };
        const count = tasks.length;

        await request(app)
        .post('/')
        .send(newTask);

        const newCount = tasks.length;
        expect(newCount).toBe(count + 1);
      });

    /*
    const count = tasks.length;
    request(app)
    .post('/')
    .send(task)

    const newCount = tasks.length;
    expect(newCount).toBe(count + 1);
    */


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