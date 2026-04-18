const request = require('supertest');
const {expect} = require('chai');
const {obterToken} = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencias', () => {
    describe('POST /transferencias', () =>{
        let token
        beforeEach(async() => {
            //capiturar o token do login
            token = await obterToken('julio.lima', '123456');
        })
        
        it('Deve retornar 201 quando a transferencia for realizada com sucesso igual ou acima de $10,00 ', async()=>{
            const bodyTransferencias = { ...postTransferencias }
            const resposta = await request('http://localhost:3000')
            .post('/transferencias')
            .set ('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)
            expect(resposta.status).to.equals(201)
            console.log(bodyTransferencias)
        })
        it('Deve retornar 422 quando a conta de origem for abaixo de $10,00', async ()=>{
            const bodyTransferencias = { ...postTransferencias }
            bodyTransferencias.valor = 7.00

            const resposta = await request('http://localhost:3000')
            .post('/transferencias')
            .set ('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)
            expect(resposta.status).to.equals(422)
        })   
    })
})