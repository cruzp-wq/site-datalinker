# Datalinker Site

Este é o projeto do site da empresa Datalinker, desenvolvido com React e TypeScript. Abaixo estão as instruções para instalação e uso.

## Estrutura do Projeto

```
datalinker-site
├── public
│   ├── index.html        # Página principal do site
│   └── robots.txt       # Instruções para motores de busca
├── src
│   ├── main.tsx         # Ponto de entrada da aplicação
│   ├── App.tsx          # Componente raiz da aplicação
│   ├── pages
│   │   ├── Home.tsx     # Página inicial
│   │   ├── About.tsx    # Página "Sobre"
│   │   └── Contact.tsx   # Página de contato
│   ├── components
│   │   ├── Header.tsx    # Componente de cabeçalho
│   │   └── Footer.tsx    # Componente de rodapé
│   ├── styles
│   │   └── global.css    # Estilos globais
│   └── assets            # Recursos estáticos
├── package.json          # Configuração do npm
├── tsconfig.json         # Configuração do TypeScript
├── vite.config.ts        # Configuração do Vite
└── README.md             # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd datalinker-site
   ```

2. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar o servidor de desenvolvimento, execute:
```
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Construção

Para construir o projeto para produção, execute:
```
npm run build
```

Os arquivos de produção serão gerados na pasta `dist`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções. Faça um fork do repositório e envie um pull request.