# banco-api-tests

## Objective

API Rest test automation project for the **Banco API** application, developed as part of the Software Testing Mentorship Program 2.0 with Julio de Lima. The project validates the main API endpoints — authentication, transfers, and queries — ensuring that HTTP responses, payloads, and business rules behave as expected.

The tested API is available at: [qa-mentorship-program-banco-api](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-api)

---

## Stack

| Tool | Role |
|---|---|
| [Node.js](https://nodejs.org/) | JavaScript runtime platform |
| [Mocha](https://mochajs.org/) | Test framework (test runner) |
| [Chai](https://www.chaijs.com/) | Assertion library |
| [Supertest](https://github.com/ladjs/supertest) | HTTP client for API testing |
| [Mochawesome](https://github.com/adamgruber/mochawesome) | HTML report generator |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

---

## Directory Structure

```
banco-api-tests/
├── fixtures/                   # Reusable request payloads
│   ├── postLogin.json          # Login body (username and password)
│   └── postTransferencias.json # Transfer creation body
├── helpers/                    # Shared helper functions across tests
│   └── autenticacao.js         # obterToken() function for authentication
├── mochawesome-report/         # HTML report generated automatically after each run
│   ├── assets/                 # Report static resources (CSS, fonts, JS)
│   ├── mochawesome.html        # Visual HTML report
│   └── mochawesome.json        # Raw report data in JSON format
├── test/                       # Test suites organized by feature
│   ├── login.test.js           # Tests for POST /login endpoint
│   └── transferencia.test.js   # Tests for /transferencias endpoints
├── .env                        # Local environment variables (not versioned)
├── .env.example                # Environment variable template for initial setup
├── .gitignore                  # Files ignored by Git
└── package.json                # Project dependencies and scripts
```

---

## Environment Setup

### 1. Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- The [Banco API](https://github.com/eldinaldolustosa/qa-mentorship-program-banco-api) running locally

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy the example file and adjust as needed:

```bash
cp .env.example .env
```

Contents of `.env`:

```env
BASE_URL=http://localhost:3000
```

> The `.env` file is not versioned. Never commit it to the repository.

---

## Running Tests

### Run all tests with HTML report

```bash
npm test
```

This command runs all `*.test.js` files inside the `test/` folder, with a 200-second timeout, and automatically generates the report via Mochawesome.

---

## Test Report

After execution, the report is automatically generated at:

```
mochawesome-report/mochawesome.html
```

Open the file in a browser to view the detailed result of each test, including status (passed/failed), execution time, and error messages.

> The `mochawesome-report/` folder is ignored by Git and recreated on every test run.

---

## Dependencies Documentation

- [Mocha — Official Documentation](https://mochajs.org/)
- [Chai — Official Documentation](https://www.chaijs.com/api/)
- [Supertest — GitHub Repository](https://github.com/ladjs/supertest)
- [Mochawesome — GitHub Repository](https://github.com/adamgruber/mochawesome)
- [dotenv — GitHub Repository](https://github.com/motdotla/dotenv)
- [Node.js — Official Documentation](https://nodejs.org/en/docs)
