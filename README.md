# Sistema de Agendamentos -

API desenvolvida em Node.js e Express com integração ao banco de dados PostgreSQL para gerenciamento de agendamentos, usuários e serviços.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL (driver pg)
- dotenv (gerenciamento de variáveis de ambiente)

---

## Configuração do Ambiente

### 1. Pré-requisitos

- Node.js instalado no ambiente de desenvolvimento.
- Instância do PostgreSQL rodando localmente (ex.: via pgAdmin).

### 2. Instalação

Instale as dependências do projeto executando o comando no terminal:

```bash
npm install
```

### 3. Variáveis de Ambiente

Crie um arquivo `.env` na raiz da pasta do backend com o seguinte modelo:

```env
DB_USER=postgres
DB_HOST=localhost
DB_DATABASE=seu_banco_de_dados
DB_PASSWORD=sua_senha
DB_PORT=5432
PORT=3000
```

---

## Inicialização do Banco de Dados

Para criar a estrutura de tabelas necessária (`usuarios`, `servicos` e `agendamentos`) automaticamente, execute o script de inicialização:

```bash
node criar-tabelas.js
```

---

## Execução do Servidor

Para iniciar o servidor HTTP:

```bash
node server.js
```

O servidor estará acessível no endereço: `http://localhost:3000`

---

## Status do Desenvolvimento

- [x] Configuração da conexão com PostgreSQL
- [x] Script automatizado de criação de tabelas
- [ ] Rotas de Serviços (`GET /servicos`, `POST /servicos`)
- [ ] Rotas de Usuários
- [ ] Rotas de Agendamentos
