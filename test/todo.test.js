const app = require('../app')
const request = require ('supertest')

describe('test api todo', () => {

    describe('get todo', () => {
        test ('get 200 all todo', (done) => {
            request(app)
            .get('/todo')
            .expect('Content-type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body.message).toBe('success');
                expect(response.body.data.length).toBe(15);
                done();
            })
            .catch(done);
        });

        describe('POST /todo', () => {
            test('should create a new todo', (done) => {
                const newTodoData = {
                    nama: 'Pram',
                    hari: 'Monday',
                    kegiatan: 'Do something',
                };
    
                request(app)
                    .post('/todo')
                    .send(newTodoData)
                    .expect('Content-type', /json/)
                    .expect(201) // Assuming you return HTTP status 201 for a successful creation
                    .then((response) => {
                        expect(response.body.nama).toBe(newTodoData.nama);
                        expect(response.body.hari).toBe(newTodoData.hari);
                        expect(response.body.kegiatan).toBe(newTodoData.kegiatan);
                        done();
                    })
                    .catch(done);                   
            });

            describe('delete /todo/:id', () => {
        test('should delete a todo', (done) => {
            
            const todoIdToDelete = 16; 

            request(app)
                .delete(`/todo/${todoIdToDelete}`)
                .expect('Content-type', /json/)
                .expect(201) 
                .then((response) => {
                    expect(response.body.message).toBe('movie deleted succesfully');
                    done();
                })
                .catch(done);
        });
    });


        });
    });
});
