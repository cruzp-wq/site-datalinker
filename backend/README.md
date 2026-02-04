# Backend DataLinker - Sistema de Contatos

Backend simples para armazenar mensagens de contato do site DataLinker.

## 🚀 Funcionalidades

- ✅ Receber contatos via API REST
- ✅ Armazenar em banco SQLite
- ✅ Listar todos os contatos
- ✅ Obter contato específico
- ✅ Deletar contato
- ✅ CORS habilitado

## 📦 Instalação

```bash
cd backend
npm install
```

## ▶️ Rodando o Backend

### Modo Desenvolvimento
```bash
npm run dev
```

### Modo Produção
```bash
npm start
```

O servidor rodará em `http://localhost:5000`

## 🔌 Endpoints

### Criar Contato
```
POST /api/contatos
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "subject": "Orçamento",
  "message": "Gostaria de um orçamento..."
}
```

**Resposta (201):**
```json
{
  "message": "Contato salvo com sucesso",
  "id": 1
}
```

### Listar Todos os Contatos
```
GET /api/contatos
```

**Resposta (200):**
```json
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "subject": "Orçamento",
    "message": "Gostaria de um orçamento...",
    "created_at": "2024-02-04 10:30:00"
  }
]
```

### Obter Contato Específico
```
GET /api/contatos/:id
```

**Resposta (200):**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com",
  "subject": "Orçamento",
  "message": "Gostaria de um orçamento...",
  "created_at": "2024-02-04 10:30:00"
}
```

### Deletar Contato
```
DELETE /api/contatos/:id
```

**Resposta (200):**
```json
{
  "message": "Contato deletado com sucesso"
}
```

### Health Check
```
GET /health
```

**Resposta (200):**
```json
{
  "status": "OK"
}
```

## 📊 Banco de Dados

O arquivo `contatos.db` será criado automaticamente na pasta do backend.

### Estrutura da Tabela

```sql
CREATE TABLE contatos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## 🌐 Integração com Frontend

O frontend envia dados para `http://localhost:5000/api/contatos` quando o usuário submete o formulário de contato.

## 📝 Notas

- CORS está configurado para aceitar qualquer origem (mudar em produção)
- Adicione autenticação em produção para proteger os endpoints
- Considere usar variáveis de ambiente para configurações sensíveis

## 🐛 Troubleshooting

### Erro CORS
Se receber erro de CORS, verifique se o backend está rodando em `http://localhost:5000`

### Banco de dados travado
Delete `contatos.db` e reinicie o servidor

### Porta 5000 em uso
Mude a porta no arquivo `.env`

---

**Desenvolvido para DataLinker** 🔗
