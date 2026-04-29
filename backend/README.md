# Backend Aloca

Backend Node.js com Express e MongoDB via Mongoose.

## Requisitos

- Node.js
- MongoDB acessivel pela variavel `MONGO_URI`

## Configuracao local

1. Instale as dependencias:

```bash
npm install
```

2. Crie o arquivo `.env` a partir do exemplo:

```bash
cp .env.example .env
```

3. Ajuste as variaveis no `.env`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/aloca
```

## Rodando localmente

Dentro da pasta `backend/`, execute:

```bash
npm run dev
```

Por padrao, a API fica disponivel em `http://localhost:4000`.

## Health check

Com o servidor rodando:

```bash
curl http://localhost:4000/health
```

Resposta esperada:

```json
{
  "status": "ok",
  "service": "aloca-api"
}
```

## Estrutura inicial

```txt
src/
|-- app.js
|-- servidor.js
|-- config/
|-- controllers/
|-- middlewares/
|-- models/
|-- routes/
|-- services/
`-- utils/
```
