# Projeto Node com WebSocket

Este é um exemplo básico de um projeto Node.js que utiliza WebSocket para comunicação em tempo real entre o servidor e o cliente.

## Pré-requisitos

- Node.js instalado na sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).
- Um navegador web para abrir o `client.html`.

## Instalação

1. Clone o repositório para a sua máquina e abra um terminal neste diretório.

2. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Execução do Servidor

1. Para iniciar o servidor, execute:
    ```bash
    node server.js
    ```

## Abrir o Cliente

1. Abra o arquivo `client.html` no seu navegador. Você pode simplesmente clicar duas vezes no arquivo ou abrir manualmente através do menu do navegador.

## Uso do Nodemon (opcional)

Nodemon é uma ferramenta que ajuda a desenvolver aplicativos baseados em Node.js reiniciando automaticamente o servidor quando arquivos do projeto são alterados.

1. Instale o Nodemon globalmente:
    ```bash
    npm install -g nodemon
    ```

2. Para iniciar o servidor usando o Nodemon, execute:
    ```bash
    nodemon server.js
    ```

## Estrutura do Projeto

.
├── client.html
├── package.json
└── server.js


- `client.html`: Arquivo HTML (nosso frontend) que será aberto no navegador para a comunicação com o servidor WebSocket.
- `server.js`: Arquivo principal do servidor Node.js que configura e gerencia o WebSocket.
- `package.json`: Arquivo de configuração do npm, contendo dependências e scripts do projeto.
