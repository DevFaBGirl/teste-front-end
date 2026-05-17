# Teste Técnico: Vaga Front-End Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End na Econverse.

---

## 🚀 Tecnologias utilizadas

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Sass (SCSS)](https://sass-lang.com/)

---

## 📋 Funcionalidades

- Vitrine de produtos consumindo dados via API JSON
- Modal de detalhes ao clicar em um produto
- Fechamento do modal clicando fora, no botão X ou pela tecla ESC
- Layout responsivo para mobile, tablet e desktop
- Fiel ao layout do Figma fornecido

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── ProductCard.module.scss
│   ├── ProductGrid/
│   │   ├── ProductGrid.tsx
│   │   └── ProductGrid.module.scss
│   └── Modal/
│       ├── Modal.tsx
│       └── Modal.module.scss
├── hooks/
│   └── useProducts.ts
├── services/
│   └── api.ts
├── types/
│   └── product.ts
└── styles/
    ├── _variables.scss
    ├── _reset.scss
    └── main.scss
```

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 22.12 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/DevFaBGirl/teste-front-end.git

# Entre na pasta do projeto
cd teste-front-end

# Instale as dependências
npm install
```

### Rodando em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

### Build para produção

```bash
npm run build
```

---

## 💡 Decisões técnicas

- **Vite** foi escolhido por ser mais moderno e performático que o Create React App
- **Sass com CSS Modules** para escopo de estilos por componente, evitando conflitos
- **Custom Hook `useProducts`** para separar a lógica de fetch dos componentes visuais
- **Proxy no Vite** configurado para resolver o CORS ao consumir a API da Econverse
- **TypeScript** com tipagem forte em todos os componentes e serviços
- Sem bibliotecas de UI — todos os componentes foram desenvolvidos do zero

---

## 🔗 Links

- [Layout no Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr)
- [API de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)