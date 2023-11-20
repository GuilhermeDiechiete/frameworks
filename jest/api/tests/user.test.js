const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Teste cadastro de usuário', () => {
    test('Deve cadastrar um usuário com sucesso', () => {

        let time = Date.now();
        let email = `${time}@gmail.com`;
        const user = { 
            name: 'Guilherme', 
            email, 
            password: '123456'
        };

        return request.post('/user/register').send(user).then(res => {

            expect(res.statusCode).toEqual(200);
            expect(res.body.email).toEqual(email);

        }).catch(err => {
            throw err
        });
    });
});