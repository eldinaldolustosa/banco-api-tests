const request = require('supertest');

const obterToken = async function (usuario, senha) {
    const respostaLogin = await request('http://localhost:3000')
        .post('/login')
        .set ('Content-Type', 'application/json')
        .send({
            'username': usuario,
            'senha': senha
    })
    //recebendo o token do login
    return respostaLogin.body.token;
}

module.exports = {
    obterToken
}
