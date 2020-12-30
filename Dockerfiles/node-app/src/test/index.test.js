const request =  require('supertest')
const server =  require('../app')
describe('Get Endpoints', () => {
    it('Get', async (done) => {
        const res =  await  request(server)
        .get('/')
        .send({
            userId:  1,
            title:  'test is cool',
        });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name');
        done();
    })
})
afterAll(async  done  => {
    // close server conection
    server.close();
    done();
});