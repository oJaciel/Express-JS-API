# Express-JS-API

Este projeto consiste em uma API para gerenciamento de CRUD de estudantes. A API funciona através dos Endpoints cadastrados, que realizam as requisições para o banco de dados.

## Como rodar a aplicação

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Rodar as migrations (caso necessário)**:
   ```bash
   npx prisma migrate deploy
   ```

3. **Iniciar a aplicação**:
   ```bash
   npm start
   ```


Pronto! A API vai estar rodando em `http://localhost:3000`.

## Endpoints

- `GET /api/students`: Lista todos os estudantes.
- `POST /api/students`: Cria um novo estudante.
- `PUT /api/students/:id`: Atualiza um estudante existente.
- `DELETE /api/students/:id`: Deleta um estudante.
```