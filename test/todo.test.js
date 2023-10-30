const app = require('../app')
const request = require ('supertest')

describe('test api todo', () => {

    describe('get todo', () => {
        test ('get 200 all todo', (done) => {
            request(app)
            .get('/todo')
            .expect('Content-type', /json/)
            .expect(200)
            .then (response => {
                expect(response.body.message).toBe('success')
                expect(response.body.data.length).toBe(2)
                done()
            })
            .catch (done)
        });
        
        //test('GET 500 All todo', (done) =>{

        });
    });
