# banco-api-tests

## Objetivo

Projeto de automação de testes de API Rest para a aplicação **Banco API**, desenvolvido como parte de um programa de Mentoria em Teste de Software 2.0 com Julio de Lima. O projeto valida os principais endpoints da API — autenticação, transferências e consultas — garantindo que as respostas HTTP, payloads e regras de negócio estejam de acordo com o esperado.

A API testada está disponível em: [qa-mentorship-program-banco-api](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-api)

---

## Stack

| Ferramenta | Função |
|---|---|
| [Node.js](https://nodejs.org/) | Plataforma de execução JavaScript |
| [Mocha](https://mochajs.org/) | Framework de testes (test runner) |
| [Chai](https://www.chaijs.com/) | Biblioteca de asserções |
| [Supertest](https://github.com/ladjs/supertest) | Cliente HTTP para testes de API |
| [Mochawesome](https://github.com/adamgruber/mochawesome) | Gerador de relatório HTML |
| [dotenv](https://github.com/motdotla/dotenv) | Gerenciamento de variáveis de ambiente |

---

## Estrutura de Diretórios

```
banco-api-tests/
├── fixtures/                   # Payloads reutilizáveis para as requisições
│   ├── postLogin.json          # Body de login (usuário e senha)
│   └── postTransferencias.json # Body de criação de transferência
├── helpers/                    # Funções auxiliares compartilhadas entre os testes
│   └── autenticacao.js         # Função obterToken() para autenticação
├── mochawesome-report/         # Relatório HTML gerado automaticamente após cada execução
│   ├── assets/                 # Recursos estáticos do relatório (CSS, fontes, JS)
│   ├── mochawesome.html        # Relatório visual em HTML
│   └── mochawesome.json        # Dados brutos do relatório em JSON
├── test/                       # Suites de testes organizadas por funcionalidade
│   ├── login.test.js           # Testes do endpoint POST /login
│   └── transferencia.test.js   # Testes dos endpoints de /transferencias
├── .env                        # Variáveis de ambiente locais (não versionado)
├── .env.example                # Modelo de variáveis de ambiente para configuração inicial
├── .gitignore                  # Arquivos ignorados pelo Git
└── package.json                # Dependências e scripts do projeto
```

---

## Configuração do Ambiente

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- A [Banco API](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-api) em execução localmente

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Copie o arquivo de exemplo e ajuste conforme necessário:

```bash
cp .env.example .env
```

Conteúdo do `.env`:

```env
BASE_URL=http://localhost:3000
```

> O arquivo `.env` não é versionado. Nunca o commite no repositório.

---

## Execução dos Testes

### Executar todos os testes com relatório HTML

```bash
npm test
```

Este comando executa todos os arquivos `*.test.js` dentro da pasta `test/`, com timeout de 200 segundos e gera automaticamente o relatório via Mochawesome.

---

## Relatório de Testes

Após a execução, o relatório é gerado automaticamente em:

```
mochawesome-report/mochawesome.html
```

Abra o arquivo no navegador para visualizar o resultado detalhado de cada teste, incluindo status (passou/falhou), tempo de execução e mensagens de erro.

> A pasta `mochawesome-report/` é ignorada pelo Git e recriada a cada execução dos testes.

---

## Documentação das Dependências

- [Mocha — Documentação oficial](https://mochajs.org/)
- [Chai — Documentação oficial](https://www.chaijs.com/api/)
- [Supertest — Repositório GitHub](https://github.com/ladjs/supertest)
- [Mochawesome — Repositório GitHub](https://github.com/adamgruber/mochawesome)
- [dotenv — Repositório GitHub](https://github.com/motdotla/dotenv)
- [Node.js — Documentação oficial](https://nodejs.org/en/docs)
