#  Bookstore API

API REST desenvolvida para gerenciamento de uma livraria utilizando Node.js, TypeScript e Firebase Firestore.

---

#  Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Firebase Firestore
- JWT Authentication
- Zod Validation
- Jest
- APIdog
- Docker

---

#  Endpoints

##  Products

| Método | Endpoint |
|---|---|
| GET | /products |
| GET | /products/:id |
| POST | /products |
| PATCH | /products/:id |

##  Users

| Método | Endpoint |
|---|---|
| GET | /users |
| POST | /users |
| PATCH | /users/:id |

##  Clients

| Método | Endpoint |
|---|---|
| GET | /clients |
| GET | /clients/:id |

##  Sales

| Método | Endpoint |
|---|---|
| GET | /sales |
| GET | /sales/:id |
| GET | /sales/client/:clienteId |
| POST | /sales |

---

#  Instalação

## Clonar repositório

```bash
git clone https://github.com/robertasouzas177/bookStores_API.git
```

## Instalar dependências

```bash
npm install
```

---

# Executar Projeto

## Desenvolvimento

```bash
npm run dev
```

## Produção

```bash
npm run build
npm start
```

---

#  Executar Testes

```bash
npm test
```

---

#  Docker

## Build

```bash
docker build -t bookstore-api .
```

## Run

```bash
docker run -p 3000:3000 bookstore-api
```

---

#  Documentação

A documentação da API foi desenvolvida utilizando APIdog.
5ehweoskfp.apidog.io 
---

#  Regras de Negócio
- Sistema feito para vendedores
- Clientes acumulam 10 pontos de fidelidade a cada compra registrada e recebem descontos com 100 pontos
- O sistema não realiza exclusão física de registros para preservar integridade histórica e relatórios financeiros.
- Atualizações são realizadas utilizando PATCH para permitir alterações parciais de dados.
- Clientes acumulam pontos de fidelidade a cada compra registrada.
---

#  Projeto Acadêmico

Desenvolvido para a disciplina de Programação Web - FATEC.
Feito utilizando o APP em flutter feito para materia de Programação Para dispositivos moveis
Roberta C. R. Souza