const supertest = require('supertest')
// supertest -> biblioteca para trabalhar com express
const request = supertest('http://localhost:4000')

// forma normal de teste
test('A aplicação deve responder na porta 4000', () => {
    return request.get('/').then(res => expect(res.statusCode).toEqual(200))
})


// usando async await
test('A aplicação deve responder na porta 4000', async () => {
    let res = await request.get('/')
    expect(res.statusCode).toEqual(200)
})