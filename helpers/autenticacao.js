const request = require('supertest');
const postlogin = require('../fixtures/postLogin.json');

const obterToken = async function (usuario, senha) {
    const bodyLogin = { ...postlogin }
    const respostaLogin = await request('http://localhost:3000')
        .post('/login')
        .set ('Content-Type', 'application/json')
        .send(bodyLogin)
    //recebendo o token do login
    return respostaLogin.body.token;
}
module.exports = {
    obterToken
}
