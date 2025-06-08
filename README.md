# Projeto Website - Advocacia Trabalhista

Este é o repositório de um site institucional moderno, responsivo e otimizado, desenvolvido para uma advogada especialista em direito do trabalho. O projeto foi construído com foco em **performance, acessibilidade e uma excelente experiência de usuário**, demonstrando minhas habilidades em desenvolvimento web frontend.

[![Deploy to Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare-F38020?logo=cloudflare&logoColor=white)](https://advogada-landing-page.pages.dev/)
[![All Rights Reserved](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)](./LICENSE)

**🔗 Link para o site:** [https://advogada-landing-page.pages.dev/](https://advogada-landing-page.pages.dev/)

---

## ✨ Funcionalidades Principais

* **Design Responsivo**: Interface totalmente adaptável para uma visualização perfeita em desktops, tablets e smartphones, garantindo que o site se ajuste a qualquer dispositivo.
* **Formulário de Contato**: Integração eficiente com o serviço **[FormSubmit](https://formsubmit.co/)** para recebimento de mensagens de clientes de forma simples e segura, eliminando a necessidade de um backend dedicado.
* **Integração com WhatsApp**: Botão de contato rápido que direciona o usuário para uma conversa direta no WhatsApp, facilitando e agilizando o primeiro contato.
* **SEO Otimizado**: Boas práticas de SEO cuidadosamente implementadas para garantir um excelente posicionamento em motores de busca como o Google, aumentando a visibilidade do site.
* **Acessibilidade (a11y)**: O site foi desenvolvido seguindo diretrizes de acessibilidade para garantir que todos os usuários, independentemente de suas capacidades, possam navegar e acessar o conteúdo.

---

## 🚀 Tecnologias Utilizadas

* **[Astro](https://astro.build/)**: Framework web focado em performance que me permitiu construir um site extremamente rápido e otimizado.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first essencial para uma estilização rápida, responsiva e consistente.
* **[FormSubmit](https://formsubmit.co/)**: Serviço para gerenciamento de formulários HTML, simplificando a coleta de informações.
* **[Cloudflare Pages](https://pages.cloudflare.com/)**: Plataforma utilizada para o deploy e hospedagem contínua do site, garantindo alta disponibilidade.
* **Imagens Gratuitas**: Todas as imagens utilizadas no projeto foram obtidas gratuitamente do **[Pexels](https://www.pexels.com/)**, garantindo qualidade visual sem custos de licenciamento.

---

## 🎯 Desafios e Aprendizados

Durante o desenvolvimento deste projeto, enfrentei e superei alguns desafios importantes, que me proporcionaram aprendizados valiosos.

### Integração Segura do WhatsApp com Variáveis de Ambiente

Um dos principais desafios técnicos foi garantir que informações sensíveis, como o número de telefone para contato via WhatsApp, não ficassem expostas diretamente no código-fonte do frontend (acessível ao cliente). A solução foi a utilização estratégica de **variáveis de ambiente**.

1.  **No Desenvolvimento Local**: Criei um arquivo `.env` na raiz do projeto para armazenar o número de telefone. O Astro me permitiu acessar essas variáveis de forma segura durante o processo de build, garantindo que o número fosse injetado apenas no momento certo.

    ```
    # .env
    PUBLIC_WHATSAPP_NUMBER="5511999999999"
    ```

2.  **Em Produção**: No momento do deploy na **Cloudflare Pages**, a mesma variável de ambiente foi configurada diretamente no painel da plataforma. Isso foi crucial para garantir que a informação sensível nunca fosse exposta no repositório do GitHub ou no código final servido ao usuário, mantendo a segurança e a flexibilidade da aplicação.

### Foco em Acessibilidade e SEO

Outro ponto de atenção primordial foi assegurar que o site estivesse em total conformidade com as melhores práticas de **Acessibilidade (a11y)** e **SEO**. Para isso, realizei consultas aprofundadas às documentações oficiais do Astro e do MDN (Mozilla Developer Network). Ferramentas como o **GitHub Copilot** também foram incrivelmente úteis para agilizar a implementação de código semântico (uso correto de tags HTML) e a criação de meta tags relevantes para otimização em motores de busca.

---

## ⚙️ Como Rodar o Projeto Localmente

Se você deseja explorar o código e entender como o projeto funciona, siga os passos abaixo para executá-lo em sua máquina local:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/4whatspc3/advogada-landing-page.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd nome-do-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Adicione a seguinte variável (substitua pelo número de WhatsApp desejado):
        ```
        PUBLIC_WHATSAPP_NUMBER="5511999999999"
        ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

6.  **Abra seu navegador** e acesse `http://localhost:4321` para ver o site em funcionamento.

---

## 🚀 Deploy

O deploy deste projeto é feito de forma contínua e automatizada pela **[Cloudflare Pages](https://pages.cloudflare.com/)**. A plataforma monitora a branch `main` do repositório, e cada `push` para esta branch aciona um novo build e deploy do site, garantindo que as atualizações sejam publicadas rapidamente.

---

## 📄 Licença

---

**Copyright (c) 2025 Matheus Augusto de Azevedo**

**All Rights Reserved.**

Este projeto é parte do meu portfólio e está disponível para visualização apenas. Nenhuma parte deste código pode ser copiada, modificada, distribuída ou reutilizada sem permissão expressa do autor. Para mais detalhes, por favor, consulte o arquivo [LICENSE](./LICENSE).