# 🔗 Sistema de Armazenamento de Contatos - DataLinker

Seu site agora tem um **banco de dados SQLite** para armazenar todos os contatos que chegam pelo formulário!

## ✨ O que foi criado

```
projeto/
├── datalinker-site/          ← Frontend (React + Vite)
├── backend/                  ← Backend (Node.js + Express)
│   ├── server.js             ← Servidor principal
│   ├── package.json
│   ├── contatos.db           ← Banco de dados SQLite (criado automaticamente)
│   └── README.md             ← Documentação detalhada
```

## 🚀 Como Usar

### Passo 1: Instalar e Rodar o Backend

```bash
# Navegue até a pasta do backend
cd /workspaces/site-datalinker/backend

# Instalar dependências (se ainda não fez)
npm install

# Rodar o servidor
npm start
```

O backend estará disponível em: `http://localhost:5000`

### Passo 2: Testar o Formulário

1. Acesse `http://localhost:3000/site-datalinker/`
2. Vá para a página de **Contato**
3. Preencha o formulário e clique em "Enviar Mensagem"
4. A mensagem será salva no banco de dados! ✅

### Passo 3: Visualizar os Contatos

Abra uma aba no navegador e acesse:
```
http://localhost:5000/api/contatos
```

Você verá todos os contatos em formato JSON.

## 📊 Banco de Dados

O arquivo `contatos.db` é criado automaticamente na pasta `backend/` quando o servidor inicia.

**Tabela:** `contatos`
- `id` - ID único
- `name` - Nome do contato
- `email` - Email
- `subject` - Assunto
- `message` - Mensagem
- `created_at` - Data/hora de envio

## 🔌 API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/contatos` | Criar novo contato |
| `GET` | `/api/contatos` | Listar todos os contatos |
| `GET` | `/api/contatos/:id` | Obter contato específico |
| `DELETE` | `/api/contatos/:id` | Deletar contato |
| `GET` | `/health` | Verificar status |

## 💡 Exemplo: Criar Contato via cURL

```bash
curl -X POST http://localhost:5000/api/contatos \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "subject": "Orçamento",
    "message": "Gostaria de mais informações..."
  }'
```

## 📱 Integração Frontend

O formulário de contato do site automaticamente:
1. ✅ Coleta os dados
2. ✅ Envia para o backend
3. ✅ Salva no banco de dados
4. ✅ Mostra mensagem de sucesso/erro

## 🌐 Deployment em Produção

Para colocar o backend em produção (Heroku, AWS, etc):

1. **Backend:**
   - Deploy na sua plataforma preferida
   - Alterar URL de `http://localhost:5000` para a URL de produção
   - Adicionar autenticação

2. **Frontend:**
   - Alterar a URL da API no arquivo `Contact.tsx`
   - Fazer build e deploy

## ⚙️ Configurações

### Porta do Backend
Edite o arquivo `.env`:
```
PORT=5000
NODE_ENV=development
```

### CORS
Para mudar de qual origem o backend aceita requisições, edite `backend/server.js`:
```javascript
app.use(cors({
    origin: ['http://localhost:3000', 'https://seu-site.com']
}));
```

## 🔐 Segurança (Importante!)

### Em Produção, Adicione:

1. **Autenticação** - Proteja os endpoints GET/DELETE
2. **Rate Limiting** - Limite requisições por IP
3. **Validação** - Valide e sanitize os dados
4. **HTTPS** - Use sempre HTTPS
5. **Variáveis de Ambiente** - Não exponha senhas/tokens

## 📚 Documentação Completa

Veja `backend/README.md` para documentação detalhada de todos os endpoints.

## 🎉 Pronto!

Seu site agora:
- ✅ Recebe contatos
- ✅ Armazena em banco de dados
- ✅ Pode consultar os dados

**Próximos passos:**
1. Testar o formulário
2. Consultar os contatos via API
3. Fazer deploy em produção
4. Adicionar painé de admin (opcional)

---

**Desenvolvido com ❤️ para DataLinker**
