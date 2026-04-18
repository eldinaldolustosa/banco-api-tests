require('dotenv').config();
const request = require('supertest');
const {expect} = require('chai');
const postlogin = require('../fixtures/postLogin.json');

describe('Login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com tokem em string quando usar credenciais validas', async () => {
            const bodyLogin = { ...postlogin }
            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        });
    });
});
