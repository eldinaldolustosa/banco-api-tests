const request = require('supertest');
const {expect} = require('chai');

describe('Transferencias', () => {
    describe('POST /transferencias', () =>{
        it('Deve retornar 201 quando a transferencia for realizada com sucesso igual ou acima de $10,00 ', async()=>{
            //capiturar o token do login
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set ('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
            })
            //recebendo o token do login
            const token = respostaLogin.body.token;

            const resposta = await request('http://localhost:3000')
            .post('/transferencias')
            .set ('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                'contaOrigem': '1',
                'contaDestino': '2',
                'valor': 11.00,
                'token' : ""
            })
            expect(resposta.status).to.equals(201)
            console.log(resposta.body);
        })
        it('Deve retornar 422 quando a conta de origem for abaixo de $10,00', async ()=>{
            //capiturar o token do login
            const respostaLogin = await request('http://localhost:3000')
                .post('/login')
                .set ('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
            })
            //recebendo o token do login
            const token = respostaLogin.body.token;

            const resposta = await request('http://localhost:3000')
            .post('/transferencias')
            .set ('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                'contaOrigem': '1',
                'contaDestino': '2',
                'valor': 9.99,
                'token' : ""
            })
            expect(resposta.status).to.equals(422)
            console.log(resposta.body);
        })   
    })
})