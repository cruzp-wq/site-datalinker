# 📊 DataLinker - Site de Análise de Dados

Um site moderno e responsivo para análise de dados, construído com React, TypeScript e Vite.

## 🎯 O que é este projeto?

DataLinker é uma plataforma que permite você:
- Visualizar dados em tempo real
- Integrar múltiplas fontes de dados
- Processar grandes volumes de dados rapidamente
- Analisar e criar relatórios

## 📁 Estrutura do Projeto

```
datalinker-site/
├── src/
│   ├── components/
│   │   ├── Header.tsx      - Cabeçalho com navegação
│   │   └── Footer.tsx      - Rodapé do site
│   ├── pages/
│   │   ├── Home.tsx        - Página inicial com dashboard
│   │   ├── About.tsx       - Página sobre a empresa
│   │   └── Contact.tsx     - Página de contato
│   ├── styles/
│   │   └── global.css      - Estilos CSS globais
│   ├── App.tsx             - Componente principal com rotas
│   └── main.tsx            - Arquivo de entrada da aplicação
├── public/
│   ├── index.html          - Arquivo HTML principal
│   └── robots.txt          - Configuração para buscadores
├── package.json            - Dependências do projeto
├── tsconfig.json           - Configuração do TypeScript
└── vite.config.ts          - Configuração do Vite
```

## 🚀 Como começar?

### 1. Instalar dependências
```bash
npm install
```

### 2. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

O site estará disponível em: `http://localhost:3000`

### 3. Fazer build para produção
```bash
npm run build
```

### 4. Visualizar build local
```bash
npm run serve
```

## 📄 Páginas do Site

### 🏠 Home (/)
- **Dashboard com dados** - Visualiza métricas importantes
- **Tabela de dados** - Mostra dados processados por período
- **Seção de funcionalidades** - Destaca os principais recursos

### ℹ️ Sobre (/about)
- Informações sobre a empresa
- Missão e valores
- Apresentação da equipe

### 📧 Contato (/contact)
- Formulário de contato funcional
- Informações de contato
- Feedback ao enviar mensagem

## 🎨 Design e Estilos

O site usa:
- **Cores principais**:
  - Azul: `#2563eb` (primária)
  - Verde: `#10b981` (secundária)
- **Responsive Design** - Funciona em mobile, tablet e desktop
- **Sombras e transições** - Para melhor experiência visual
- **Tipografia moderna** - System fonts para melhor performance

## 🔧 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Para código mais seguro e robusto
- **React Router v6** - Para navegação entre páginas
- **Vite** - Build tool rápido e moderno
- **CSS3** - Estilos modernos com variáveis CSS

## 🎓 Explicação dos Componentes

### Header.tsx
- Exibe o logo e nome da empresa
- Menu de navegação entre páginas
- Fixed (sempre visível ao rolar)

### Footer.tsx
- Informações de copyright
- Links úteis

### Home.tsx
- **Seção Hero** - Boas-vindas e descrição
- **Dashboard** - Mostra métricas importantes:
  - Total de dados processados
  - Média mensal
  - Fontes ativas
- **Tabela de dados** - Registros com percentuais
- **Seção de funcionalidades** - Cards com recursos

### About.tsx e Contact.tsx
- Páginas de informações e contato
- Formulário funcional com validação

## 📱 Responsividade

O site é totalmente responsivo:
- **Desktop**: Todos os elementos em grid/flex
- **Tablet**: Ajustes para telas médias
- **Mobile**: Layout otimizado para telas pequenas

## 🔐 Segurança

O projeto segue as melhores práticas:
- React.StrictMode para detectar problemas
- TypeScript para evitar erros
- Validação de formulários

## 💡 Próximos Passos

Para expandir o projeto você pode:

1. **Adicionar gráficos reais**:
   ```bash
   npm install recharts
   ```
   Depois usar em `Home.tsx`

2. **Conectar a um backend**:
   - Integrar com API real em vez de dados estáticos

3. **Adicionar autenticação**:
   - Login/Logout para usuários

4. **Melhorar o formulário**:
   - Integrar com serviço de email

5. **Adicionar Dark Mode**:
   - Alternar entre temas claro/escuro

## 📚 Recursos Úteis

- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Vite Guide](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## ✨ Dicas para Personalizar

### Mudar cores:
Edite `:root` em `src/styles/global.css`:
```css
:root {
    --primary-color: #suacor;
    --secondary-color: #suacor;
}
```

### Adicionar novas páginas:
1. Criar arquivo em `src/pages/NovaPage.tsx`
2. Importar em `App.tsx`
3. Adicionar rota em `<Routes>`
4. Adicionar link no `Header.tsx`

### Modificar dados do dashboard:
Edite o array `analysisData` em `src/pages/Home.tsx`

---

## ❓ Dúvidas Frequentes

**P: Como vejo o site no meu computador?**
R: Após rodar `npm run dev`, abra `http://localhost:3000` no seu navegador.

**P: Como mudo o título da página?**
R: Edite `public/index.html` - mude o `<title>`

**P: Como adiciono uma nova seção à home?**
R: Adicione uma nova `<section>` em `src/pages/Home.tsx`

**P: Como faço deploy?**
R: Rode `npm run build`, depois faça upload da pasta `dist/` para seu hosting.

---

**Desenvolvido com ❤️ para análise de dados**
