require('dotenv').config();
const request = require('supertest');
const { expect } = require('chai');
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencias', () => {
    let token;

    beforeEach(async () => {
        token = await obterToken();
    });

    describe('POST /transferencias', () => {
        it('Deve retornar 201 quando a transferencia for realizada com sucesso igual ou acima de $10,00', async () => {
            const bodyTransferencias = { ...postTransferencias };
            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);

            expect(resposta.status).to.equals(201);
        });

        it('Deve retornar 422 quando a conta de origem for abaixo de $10,00', async () => {
            const bodyTransferencias = { ...postTransferencias };
            bodyTransferencias.valor = 7.00;

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);

            expect(resposta.status).to.equals(422);
        });
    });

    describe('GET /transferencias/{id}', () => {
        it('Deve retornar 200 com dados de trasferencia do banco de dados quando o ID da transferencia for informado', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias/7')
                .set('Authorization', `Bearer ${token}`);

            expect(resposta.status).to.equals(200);
            expect(resposta.body.id).to.equal(7);
            expect(resposta.body.id).to.be.a('number');
            expect(resposta.body.conta_origem_id).to.equals(1);
            expect(resposta.body.conta_destino_id).to.equals(2);
            expect(resposta.body.valor).to.equal('60.00');
        });
    });

    describe('GET /transferencias', () => {
        it('Deve retornar 10 elementos na paginacao quando informar o limite de 10 elementos por pagina', async () => {
            const resposta = await request(process.env.BASE_URL)
                .get('/transferencias?page=1&limite=10')
                .set('Authorization', `Bearer ${token}`);

            expect(resposta.status).to.equals(200);
            expect(resposta.body.limit).to.equal(10);
            expect(resposta.body.transferencias).to.have.lengthOf(10);
        });
    });
});
