require('dotenv').config();
const request = require('supertest');
const postlogin = require('../fixtures/postLogin.json');

const obterToken = async function (usuario, senha) {
    const bodyLogin = { ...postlogin }
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin)
    return respostaLogin.body.token;
}

module.exports = {
    obterToken
}
