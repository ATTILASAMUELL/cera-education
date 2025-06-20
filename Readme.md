# CERA Project

Sistema completo composto por **back-end Node.js/Express** e **front-end Vite + Vue** (ou React, ajuste se necessário) com orquestração via **Docker Compose**.

---

## Visão geral

| Camada | Caminho | Descrição |
| ------ | ------- | --------- |
| Back-end | `cera-back-end/` | API REST, autenticação, regras de negócio |
| Front-end | `cera-front-end/` | Interface web SPA |
| Containerização | `docker-compose.yml` | Serviços `api`, `web` e dependências |

---

## Tecnologias

- **Node.js 18** + **Express**
- **Vite**
- **Docker** & **Docker Compose**
- **Nginx** (reverse proxy no container `web`)

---

## Pré-requisitos

- Node.js >= 18
- npm >= 9
- Docker >= 24
- Docker Compose v2

---

## Variáveis de ambiente

Crie um arquivo `.env` na raiz com, por exemplo:

```env
# Porta exposta pelo back-end
API_PORT=3000

# Porta exposta pelo front-end em modo dev
WEB_PORT=5173

# Qualquer outro segredo
JWT_SECRET=change_me
```

> **Importante:** O `docker-compose.yml` lê essas variáveis.

---

## Executar com Docker

```bash
# build + up em segundo plano
docker compose up --build -d

# parar
docker compose down
```

A stack padrão cria:

- `api`: container Node.js rodando **server.js** em `cera-back-end`.
- `web`: container Nginx servindo o build da pasta `cera-front-end/dist`.

---

## Executar localmente (sem Docker)

### Back-end

```bash
cd cera-back-end
npm install
npm run dev   # nodemon
```

O servidor inicia em `http://localhost:$API_PORT` (3000 por padrão).

### Front-end

```bash
cd cera-front-end
npm install
npm run dev
```

SPA disponível em `http://localhost:$WEB_PORT` (5173 por padrão).

Para build de produção:

```bash
npm run build   # gera dist/
```

---

## Estrutura de pastas (resumida)

```text
cera-project/
│
├─ cera-back-end/
│  ├─ controllers/
│  ├─ models/
│  ├─ routes/
│  ├─ services/
│  ├─ utils/
│  └─ server.js
│
├─ cera-front-end/
│  ├─ public/
│  ├─ src/
│  ├─ index.html
│  └─ vite.config.js
│
├─ docker-compose.yml
└─ README.md
```

---

## Scripts úteis

| Local | Comando | Ação |
| ----- | ------- | ---- |
| `cera-back-end` | `npm run dev` | Inicia API com hot reload |
| `cera-back-end` | `npm test` | Executa testes (configure) |
| `cera-front-end` | `npm run dev` | Inicia Vite dev server |
| `cera-front-end` | `npm run build` | Gera bundle produção |

---

## Licença

Distribuído sob a licença MIT.
