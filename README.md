# **Agenda de Contatos - Projeto em TypeScript**

## Descrição

Este projeto tem como objetivo criar uma **Agenda de Contatos** simples, onde o usuário pode **adicionar, editar e excluir** contatos. Ele é desenvolvido com **HTML, CSS, JavaScript (JS)** e **TypeScript**, e permite ao usuário armazenar os dados no **localStorage** para que as informações persistam mesmo após o fechamento do navegador.

A **Agenda de Contatos** foi criada para ser uma aplicação funcional e prática, ideal para praticar conceitos de **CRUD**, **validação de formulários**, e integração de **JavaScript/TypeScript** com o **localStorage** para persistência de dados.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página e dos elementos principais.
- **CSS3**: Estilização da aplicação para uma interface limpa e simples.
- **JavaScript/TypeScript**: Lógica para interação com o usuário, manipulação de dados e armazenamento no `localStorage`.
- **Webpack**: Empacotamento do código, configuração de compilação do TypeScript e suporte a arquivos estáticos.

## Funcionalidades

- **Adicionar Contato**: Permite que o usuário adicione um novo contato à agenda.
- **Editar Contato**: O usuário pode editar as informações de um contato existente.
- **Excluir Contato**: O usuário pode remover um contato da agenda.
- **Validação de Formulário**: Validação de campos obrigatórios, como nome, e-mail e telefone.
- **Persistência de Dados**: Utiliza `localStorage` para salvar os contatos no navegador, garantindo que os dados permaneçam mesmo após o fechamento da página.

## Objetivos do Projeto

1. **Praticar JavaScript e TypeScript**: Melhorar o domínio de JavaScript/TypeScript com um projeto prático.
2. **Entender o CRUD (Create, Read, Update, Delete)**: Implementar as operações CRUD para entender sua utilização no desenvolvimento web.
3. **Aprender a utilizar o localStorage**: Usar o `localStorage` para persistir dados no navegador.
4. **Desenvolver validação de formulários**: Validar entradas de dados e melhorar a experiência do usuário com feedback visual.
5. **Configurar e utilizar o Webpack**: Empacotar o código e usar o Webpack como ferramenta de build.

## Estrutura do Projeto

```plaintext
agenda-de-contatos/
├── frontend/                   # Oque aparece no browser em tempo de desenvolvimento
│   ├── assets/                 # Arquivos que estruturam o index.html e são encapsulados pelo webpack
│   │   ├── css/                # Estilizações gerais
│   │   │   └── style.css   
│   │   └── js/                 # Pasta que armazena os arquivos js gerados pelo webpack
│   │       ├── bundle.js
│   │       └── bundle.js.map
│   └── index.html              # Página principal
├── src/                        # Código fonte principal
│   ├── scripts/                # Scripts em TypeScript
│   │   ├── app.ts              # Entrada principal da aplicação
│   │   ├── models/             # Modelos de dados
│   │   │   └── contact.ts      # Definição da interface Contact
│   │   ├── services/           # Serviços auxiliares
│   │   │   └── storage.ts      # Funções relacionadas ao localStorage
│   │   └── utils/              # Funções utilitárias
│   │       └── validation.ts   # Validação de e-mail e telefone
│   └── index.ts                # Arquivo de entrada do Webpack
├── webpack.config.js           # Configuração do Webpack
├── package.json                # Gerenciamento de dependências
├── tsconfig.json               # Configuração do TypeScript
├── .tsconfig-frontend.json     #Configuraões especificas para o frontend
├── .gitignore                  # Arquivos e pastas para ignorar no Git
└── README.md                   # Documentação do projeto

