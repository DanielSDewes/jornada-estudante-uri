# Jornada do Estudante – URI  
Uma apresentação interativa da jornada do estudante ingressante na Universidade Regional Integrada do Alto Uruguai e das Missões (URI) — acompanhando o perfil do estudante “Daniel, 18 anos”.

---

## 🧭 Propósito do Site  
Este site foi criado com o objetivo de ilustrar e documentar a experiência de entrada de um estudante na URI — desde o momento de descoberta da universidade até o engajamento no início das aulas.  
Ele serve para:  
- Visualizar cada etapa da jornada (emoções, ações, pontos de contato e oportunidades de melhoria) de forma clara e acessível.  
- Apoiar a equipe de marketing, comunicação ou onboarding da universidade a entender e melhorar o processo de acolhimento.  
- Servir como case de estudo ou material de inspiração para universidades, agências de comunicação ou equipes UX envolvidas em experiências de estudante.  
- Demonstrar habilidades de front‑end e design de experiência, mostrando como construir uma narrativa visual de jornada do usuário.

---

## 🛠 Tecnologias Utilizadas  
Este projeto foi desenvolvido com as seguintes tecnologias:  
- **Vite** – Build tool rápida para ambiente de desenvolvimento front‑end e bundling.  
- **TypeScript** – Superset de JavaScript com tipagem estática para maior robustez do código.  
- **React** – Biblioteca para construir a interface de usuário de forma reativa e componentizada.  
- **Tailwind CSS** – Framework de utilitários CSS para estilização rápida e consistente.  
- **shadcn‑ui** – Conjunto de componentes pré‑construídos (baseado em Tailwind/Headless UI) para acelerar o desenvolvimento da interface.  
- **ESLint / Prettier** – Ferramentas de linting e formatação para manter a qualidade e consistência do código.  
- **Vite.config.ts / tsconfig.json / postcss.config.js** – Arquivos de configuração padrão para integrar as tecnologias acima.  
- (Opcional) Hospedagem estática — o site pode ser publicado em plataformas como Netlify, Vercel ou GitHub Pages.

---

## 🚀 Como Rodar o Projeto Localmente  
Para começar a desenvolver ou visualizar localmente, siga os passos abaixo:

```bash
# Clonar o repositório  
git clone https://github.com/DanielSDewes/jornada-estudante-uri.git  
cd jornada-estudante-uri

# Instalar dependências  
npm install  
# — ou, se estiver usando yarn  
# yarn install

# Rodar em ambiente de desenvolvimento  
npm run dev  
# Acesse: http://localhost:5173 (ou porta indicada no terminal)

# Build para produção  
npm run build  
# O output estará em /dist (ou conforme configuração)

# Preview local da versão de produção  
npm run preview  
```

---

## 🎨 Estrutura do Projeto  
- `src/` – Pasta principal com componentes React, estilos e imagens.  
- `index.html` – Página de entrada que carrega a aplicação.  
- `tailwind.config.ts` – Configuração personalizada do Tailwind.  
- `tsconfig.json` & `tsconfig.app.json` – Configurações de TypeScript.  
- `vite.config.ts` – Configurações específicas do Vite.  
- Outras pastas (por exemplo `public/` ou `assets/`) podem armazenar imagens, ícones e fontes.

---

## 📋 Funcionalidades & Layout  
- Seção de **Hero** com imagem de capa e chamada para ação (“Iniciar Jornada”).  
- Apresentação da persona “Daniel” e seu contexto.  
- Mapa da jornada em 6 estágios com emoções, ações, pontos de contato e imagens ilustrativas.  
- Tabela ou cards resumindo a jornada de forma interativa/responsiva.  
- Seção de conclusão com chamado à ação para ingressar na URI.  
- Design responsivo, acessível, com animações suaves (fade‑in, scroll) e ícones representando emoções.

---

## 📄 Licença  
Este projeto está licenciado sob a **MIT License** — sinta‑se à vontade para utilizar, modificar ou aprimorar conforme suas necessidades.

---

## 👤 Autor  
- **Daniel S. Dewes** — [GitHub profile](https://github.com/DanielSDewes)  
- Projeto desenvolvido como iniciativa pessoal / projeto de portfólio.

---

_Meta: README criado para orientar outras pessoas que acessem este repositório, entenderem o propósito e a tecnologia utilizada no site da jornada do estudante._  
