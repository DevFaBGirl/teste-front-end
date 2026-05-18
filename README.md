# Teste Técnico: Vaga Front-End Econverse

Projeto desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-End na Econverse.

---

## Tecnologias utilizadas

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Sass (SCSS Modules)](https://sass-lang.com/)

---

## Requisitos atendidos

- [x] React + TypeScript
- [x] Layout fiel ao Figma pixel a pixel
- [x] Consumo de produtos via API JSON
- [x] Vitrine de produtos com carrossel e paginação
- [x] Modal de detalhes ao clicar no produto
- [x] Pré-processador Sass (SCSS Modules)
- [x] Sem bibliotecas de UI (Bootstrap, Material UI, etc.)

## Pontos extras atendidos

- [x] **SEO** — meta tags, Open Graph, robots, lang="pt-BR"
- [x] **HTML semântico** — `header`, `main`, `footer`, `nav`, `section`, `article`, `aria-label`, `role`, `aria-modal`

---

## Funcionalidades

- Vitrine de produtos consumindo dados via API JSON
- Modal de detalhes ao clicar em um produto
- Fechamento do modal clicando fora, no botão X ou pela tecla ESC
- Carrossel de produtos com navegação por setas
- Filtro de produtos por categoria (abas)
- Layout responsivo para mobile, tablet e desktop
- Fiel ao layout do Figma fornecido
- Links externos com `target="_blank"` e `rel="noopener noreferrer"` para segurança:
  - Botão "Ver produto" direciona para o site da Econverse
  - Ícones de redes sociais direcionam para Instagram, Facebook e LinkedIn da Econverse

---

## Componentes desenvolvidos

- `Header` — barra superior, busca e navegação por categorias
- `Banner` — banner hero com CTA
- `Categories` — vitrine de categorias com ícones
- `ProductGrid` — grade de produtos com carrossel e abas
- `ProductCard` — card individual de produto
- `Modal` — modal de detalhes do produto com acessibilidade
- `PartnerBanners` — banners duplos de parceiros
- `BrandShowcase` — seção "Navegue por marcas"
- `Newsletter` — formulário de inscrição
- `Footer` — rodapé com links e redes sociais

---

## 📁 Estrutura do projeto

```
src/
├── assets/
├── components/
│   ├── Banner/
│   │   ├── Banner.tsx
│   │   └── Banner.module.scss
│   ├── BrandShowcase/
│   │   ├── BrandShowcase.tsx
│   │   └── BrandShowcase.module.scss
│   ├── Categories/
│   │   ├── Categories.tsx
│   │   └── Categories.module.scss
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.scss
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.scss
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── Modal.module.scss
│   ├── Newsletter/
│   │   ├── Newsletter.tsx
│   │   └── Newsletter.module.scss
│   ├── PartnerBanners/
│   │   ├── PartnerBanners.tsx
│   │   └── PartnerBanners.module.scss
│   ├── ProductCard/
│   │   ├── ProductCard.tsx
│   │   └── ProductCard.module.scss
│   └── ProductGrid/
│       ├── ProductGrid.tsx
│       └── ProductGrid.module.scss
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

## Como rodar o projeto

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
- **Sass com CSS Modules** para escopo de estilos por componente, evitando conflitos e garantindo padronização
- **Variáveis SCSS centralizadas** em `_variables.scss` para cores, tipografia, espaçamentos e breakpoints
- **Custom Hook `useProducts`** para separar a lógica de fetch dos componentes visuais
- **Proxy no Vite** configurado para resolver o CORS ao consumir a API da Econverse
- **TypeScript** com tipagem forte em todos os componentes e serviços
- **HTML semântico e acessibilidade** — uso de `aria-label`, `aria-modal`, `role`, `aria-hidden` e navegação por teclado no modal
- Sem bibliotecas de UI — todos os componentes foram desenvolvidos do zero

---

## 🔗 Links

- [Layout no Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr)
- [API de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)