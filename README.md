# 📊 DataLinker - Plataforma de Análise de Dados

Um site moderno e responsivo para análise de dados, construído com **React**, **TypeScript** e **Vite**.

## 🚀 Quick Start

### 1. Instalar
```bash
cd datalinker-site
npm install
```

### 2. Rodar Localmente
```bash
npm run dev
```

Abra: **http://localhost:3000**

### 3. Build para Produção
```bash
npm run build
npm run serve
```

---

## 📱 O que tem no Site?

### 🏠 Home (`/`)
- **Dashboard** com métricas principais
- **Tabela de dados** interativa
- **Seção de funcionalidades** destacadas

### ℹ️ Sobre (`/about`)
- Informações da empresa
- Missão e valores
- Apresentação da equipe

### 📧 Contato (`/contact`)
- Formulário funcional
- Informações de contato
- Feedback ao enviar

---

## 📁 Estrutura

```
src/
├── components/
│   ├── Header.tsx    ← Menu de navegação
│   └── Footer.tsx    ← Rodapé
├── pages/
│   ├── Home.tsx      ← Dashboard principal
│   ├── About.tsx     ← Sobre
│   └── Contact.tsx   ← Contato
├── styles/
│   └── global.css    ← Estilos do site
├── App.tsx           ← Roteamento
└── main.tsx          ← Entrada da app
```

---

## 🛠️ Tecnologias

- **React 18** - UI
- **TypeScript** - Type safety
- **React Router v6** - Navegação
- **Vite** - Build tool
- **CSS3** - Estilos modernos

---

## 📚 Documentação

- **[GUIA_COMPLETO.md](./GUIA_COMPLETO.md)** - Tudo sobre o projeto
- **[EXPLICACAO_VISUAL.md](./EXPLICACAO_VISUAL.md)** - Diagramas e explicações
- **[PROXIMOS_PASSOS.md](./PROXIMOS_PASSOS.md)** - Troubleshooting e melhorias

---

## 💡 Customizar

### Mudar cores
Edite `:root` em `src/styles/global.css`

### Mudar dados
Edite `analysisData` em `src/pages/Home.tsx`

### Adicionar página
1. Crie em `src/pages/NovaPage.tsx`
2. Importe em `App.tsx`
3. Adicione rota em `<Routes>`
4. Adicione link em `Header.tsx`

---

## 🌍 Deploy

### Vercel (Grátis)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 📝 Comandos

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor local com hot reload |
| `npm run build` | Build otimizado para produção |
| `npm run serve` | Visualizar build localmente |
| `npm install` | Instalar dependências |

---

## 🐛 Problemas?

Veja [PROXIMOS_PASSOS.md](./PROXIMOS_PASSOS.md) para soluções de troubleshooting.

---

## 📖 Aprenda Mais

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 📞 Próximas Melhorias

- [ ] Gráficos com Recharts
- [ ] Integração com API real
- [ ] Sistema de login
- [ ] Dark mode
- [ ] Notificações

---

**Desenvolvido com ❤️ para análise de dados | Versão 1.0.0**
