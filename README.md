# 🧪 Desafio Técnico - Easy Secrets

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions\&logoColor=white)

Automação dos principais fluxos da aplicação **Demoblaze** utilizando **Playwright**, **TypeScript** e **Page Object Model (POM)**, desenvolvida como parte do desafio técnico para a vaga de **Estágio em QA Automation** da Easy Secrets.

---

# 🎯 Objetivo

Automatizar os principais fluxos da aplicação **Demoblaze**, contemplando cadastro de usuário, login, adição e remoção de produtos do carrinho, utilizando **Playwright** e **TypeScript** com o padrão **Page Object Model (POM)** e boas práticas de organização, reutilização de código e manutenção.

---

# 🚀 Tecnologias e Ferramentas

| Tecnologia         | Utilização                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| **Playwright**     | Framework utilizado para automação dos testes end-to-end.                                                           |
| **TypeScript**     | Linguagem utilizada para adicionar tipagem estática e auxiliar na identificação de erros durante o desenvolvimento. |
| **Node.js**        | Ambiente de execução das ferramentas de automação e gerenciamento das dependências.                                 |
| **GitHub Actions** | Execução automática da suíte de testes na integração contínua.                                                      |

---

# 📋 Cenários Automatizados

Foram automatizados cenários para validar os principais comportamentos da aplicação:

* ✅ Abertura da página inicial
* ✅ Cadastro de usuário
* ✅ Login
* ✅ Adição de produto ao carrinho com validação da mensagem de confirmação
* ✅ Remoção do produto com validação de sua presença e posterior exclusão do carrinho

Cada cenário contém as validações necessárias para confirmar que a funcionalidade foi executada com sucesso.

A suíte é executada nos navegadores **Chromium**, **Firefox** e **WebKit**, configurados no Playwright.

---

# 🏗️ Arquitetura

O projeto foi organizado utilizando o padrão **Page Object Model (POM)**, separando elementos e ações da interface em classes específicas.

Essa organização proporciona benefícios como:

* Centralização dos seletores;
* Reutilização de código;
* Maior legibilidade dos testes;
* Facilidade de manutenção caso a interface seja alterada.

Cada **Page Object** possui responsabilidade única, encapsulando apenas os elementos e comportamentos relacionados à sua respectiva página ou componente.

---

# 📂 Estrutura do Projeto

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── CartPage.ts
│   ├── HomePage.ts
│   ├── LoginModal.ts
│   ├── ProductPage.ts
│   └── SignUpModal.ts
├── tests/
│   └── store.spec.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Organização

| Diretório              | Responsabilidade                                                                                                        |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **pages/**             | Classes Page Object responsáveis por encapsular os elementos e ações de cada página ou componente.                      |
| **tests/**             | Contém os cenários automatizados responsáveis por validar os principais fluxos da aplicação utilizando os Page Objects. |
| **.github/workflows/** | Pipeline de Integração Contínua executada pelo GitHub Actions.                                                          |

---

# 💡 Decisões Técnicas

## Organização dos testes

Os testes foram separados de acordo com os principais comportamentos da aplicação: abertura da página, cadastro, login, adição e remoção de produtos do carrinho.

Essa divisão facilita a identificação da funcionalidade responsável por uma eventual falha, tornando os relatórios de execução mais claros e simplificando o processo de troubleshooting.

Cada cenário prepara os dados necessários para sua própria execução. Dessa forma, os testes possuem baixo acoplamento e podem ser executados individualmente sem depender da execução prévia dos demais cenários.

---

## Dados de teste

Para evitar conflitos com usuários previamente cadastrados na aplicação, os nomes de usuário são gerados dinamicamente durante a execução.

Nos cenários que exigem autenticação, o usuário é criado durante a própria execução do teste, garantindo que cada cenário possua os dados necessários para sua validação.

---

## Tratamento dos alertas

A aplicação utiliza diálogos nativos do navegador para confirmar ações como cadastro de usuário e adição de produtos ao carrinho.

Esses eventos são capturados e tratados pelo Playwright antes da continuidade do fluxo, garantindo maior confiabilidade durante a execução dos testes.

---

## Scripts do package.json

Foram adicionados scripts para padronizar a execução da suíte de testes.

A pipeline executa a suíte utilizando o mesmo script `npm test` disponível para a execução local.

```bash
npm test
npm run test:headed
npm run report
```

Essa abordagem simplifica a execução do projeto e garante que o comando utilizado para iniciar a suíte seja o mesmo nos dois ambientes.

---

## Simplificação da arquitetura

Durante o desenvolvimento foram avaliadas estruturas para organização de dados de teste (`fixtures`) e funções auxiliares (`utils`).

Após a implementação dos fluxos, verificou-se que essas camadas não possuíam responsabilidade efetiva no projeto.

Como o desafio possui escopo reduzido e não havia reutilização suficiente para justificá-las, optou-se por removê-las, mantendo uma arquitetura mais simples, coesa e proporcional às necessidades atuais.

Essa decisão evita estruturas desnecessárias e facilita a manutenção do projeto.

---

# ⚙️ Como executar

## Clonar o repositório

```bash
git clone https://github.com/FilipeQA/Desafio-tecnico-Easysecrets.git
```

## Instalar as dependências

```bash
npm install
```

## Instalar os navegadores do Playwright

```bash
npx playwright install
```

## Executar os testes

```bash
npm test
```

## Executar com navegador visível

```bash
npm run test:headed
```

## Abrir o relatório HTML

```bash
npm run report
```

---

# 🔄 Integração Contínua

Foi configurada uma pipeline utilizando **GitHub Actions**, executada automaticamente a cada **push** e **pull request**.

Essa validação contínua garante que alterações enviadas ao repositório sejam verificadas automaticamente, aproximando o projeto de um fluxo utilizado em ambientes reais de desenvolvimento.

---

# 📈 Melhorias Futuras

Caso o projeto evolua, algumas melhorias que poderiam ser implementadas são:

* Ampliação da cobertura de testes.
* Inclusão de cenários negativos e casos de borda.
* Parametrização de cenários para ampliar a reutilização dos testes.
* Reutilização de dados de teste por meio de fixtures, caso o projeto cresça.
* Organização de funções auxiliares compartilhadas quando houver necessidade real de reutilização.
* Refatoração da arquitetura conforme o crescimento do projeto, preservando a separação de responsabilidades e reduzindo possíveis duplicações de código.
