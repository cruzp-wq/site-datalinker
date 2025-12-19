# ⚡ HELP RÁPIDO - COMECE AQUI!

## 🎯 Você está aqui: SEU SITE ESTÁ RODANDO!

```
✅ http://localhost:3000  ← ABRA ISTO NO NAVEGADOR
```

---

## 📱 O QUE VOCÊ VÊ?

### Página Inicial (Home)
- Menu no topo com links
- Grande seção "DataLinker"
- 3 Números importantes (métricas)
- Tabela com dados
- 4 Cards de funcionalidades
- Rodapé na base

### Clique nos Links
- **Home** → Volta para esta página
- **Sobre** → Página sobre a empresa
- **Contato** → Página com formulário

---

## 🛠️ COMO EDITAR?

### 1. Abra a pasta no VS Code
```
File → Open Folder → /workspaces/site-datalinker
```

### 2. Edite um arquivo
Exemplo: `src/pages/Home.tsx`

### 3. O site atualiza sozinho!
Salve (Ctrl+S) e veja o navegador mudar automaticamente

---

## 📝 GUIAS SUPER RÁPIDOS

### 🎨 Mudar Cores?
**Arquivo:** `src/styles/global.css`

Procure por:
```css
--primary-color: #2563eb;      /* Azul → Mude isto */
--secondary-color: #10b981;    /* Verde → Mude isto */
```

### 📊 Mudar Dados da Tabela?
**Arquivo:** `src/pages/Home.tsx`

Procure por:
```typescript
const analysisData = [
    { name: 'Janeiro', value: 2400 },     /* Mude isto */
    { name: 'Fevereiro', value: 1398 },
    // ... etc
];
```

### 📄 Adicionar Novo Texto?
**Arquivo:** `src/pages/Home.tsx` ou `src/pages/About.tsx`

Procure pela tag `<p>` e mude o texto.

### 🔗 Adicionar Novo Link?
**Arquivo:** `src/components/Header.tsx`

Adicione na lista `<ul>`:
```typescript
<li><Link to="/minhapage">Meu Link</Link></li>
```

---

## 🆘 ERROS COMUNS

### ❌ Página não carrega
```bash
npm run dev
# Aperte Ctrl+C, depois tente novamente
```

### ❌ Botão não funciona
Clique direito → Inspect (F12)
Veja a aba "Console" para mensagens de erro

### ❌ CSS não aplicou
Salve o arquivo (Ctrl+S)
Recarregue a página (F5)

### ❌ Mudei tudo e quebrou
Git volta a um backup:
```bash
cd /workspaces/site-datalinker
git checkout src/
```

---

## 📚 3 DOCUMENTOS PRINCIPAIS

### 1. Para INICIANTES
👉 **[EXPLICACAO_VISUAL.md](./EXPLICACAO_VISUAL.md)**
```
Tem desenhos e diagramas
Fácil de entender
Não precisa de programação
```

### 2. Para DESENVOLVEDORES
👉 **[GUIA_COMPLETO.md](./GUIA_COMPLETO.md)**
```
Tudo em detalhes
Explica cada arquivo
Como adicionar funcionalidades
```

### 3. Para PRÓXIMAS COISAS
👉 **[PROXIMOS_PASSOS.md](./PROXIMOS_PASSOS.md)**
```
Ideias de melhorias
Como fazer deploy
Problemas e soluções
```

---

## ⌨️ COMANDOS ESSENCIAIS

```bash
# Parar servidor
Ctrl + C

# Restart servidor
npm run dev

# Ver erros
npm run build

# Build para compartilhar
npm run build
# Cria pasta "dist/" com site pronto

# Voltar código anterior
git checkout src/
```

---

## 🎨 EDIÇÕES POPULARES

### Mudar título da página
**Arquivo:** `public/index.html`
Mude `<title>DataLinker</title>` para seu título

### Mudar nome da empresa
**Arquivo:** `src/components/Header.tsx`
Mude `<h1>📊 DataLinker</h1>` para seu nome

### Mudar email de contato
**Arquivo:** `src/pages/Contact.tsx`
Procure por "contato@datalinker.com" e mude

### Mudar textos da home
**Arquivo:** `src/pages/Home.tsx`
Mude qualquer `<p>` ou `<h2>`

---

## 🌍 PRÓXIMO: DEPLOY

Quando quiser colocar online:

### Opção 1: Vercel (Fácil)
```bash
npm i -g vercel
vercel
# Segue as instruções
```

### Opção 2: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 💬 CHAT DE AJUDA

Se estiver confuso:
1. Releia esta página
2. Veja [EXPLICACAO_VISUAL.md](./EXPLICACAO_VISUAL.md)
3. Procure a palavra chave em [GUIA_COMPLETO.md](./GUIA_COMPLETO.md)
4. Se tiver erro, veja [PROXIMOS_PASSOS.md](./PROXIMOS_PASSOS.md)

---

## ✨ SUCESSO!

Você está no caminho certo! 🚀

**Tudo que você precisa fazer agora:**
1. ✅ Explorar o site (já está rodando!)
2. ✅ Fazer pequenas edições
3. ✅ Ler os guias quando precisar
4. ✅ Adicionar suas próprias ideias

**Pronto! É isso!**

---

📱 Site: http://localhost:3000
🐛 Erros? Veja PROXIMOS_PASSOS.md
📖 Saiba mais? Veja GUIA_COMPLETO.md
🎨 Visual? Veja EXPLICACAO_VISUAL.md
