const app = require('../src/app')
const supertest = require('supertest')

const request = supertest(app)




test('A acplicação deve responder na porta 4000', () => {

    return request.get('/').then(res => {
        const status = res.statusCode
        expect(status).toEqual(200)
    }).catch(err => {
        fail(err)
    })
})