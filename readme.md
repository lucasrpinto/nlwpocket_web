# In.Orbit (Frontend)

In.Orbit é um gerenciador de metas desenvolvido durante o evento NLW Pocket Intermediário da RocketSeat. Este repositório contém a parte frontend da aplicação, onde os usuários podem criar, acompanhar e marcar suas metas como concluídas.

## Sumário

1. [Funcionalidades](#funcionalidades)
2. [Tecnologias Utilizadas](#tecnologia-utilizadas)
3. [Instalação e Execução](#instalação-e-execução)
4. [Documentação da API](#documentacao-da-api)
5. [Referência](#referência)


## Funcionalidades

- ### Criação de Metas
    Permite que o usuário crie novas metas semanais, armazenando-as no banco de dados.
  
- ### Atualização de Metas
    Os usuários podem marcar metas como concluídas, atualizando o status no banco de dados.

- ### Listagem de Metas
    A API recupera as metas criadas e organiza-as por dia da semana, permitindo que o front-end exiba o progresso semanal.

- ### Progresso Semanal
    A API calcula a porcentagem de metas concluídas e as metas pendentes, retornando essa informação ao front-end para que seja exibida aos usuários.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build para desenvolvimento rápido.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **TanStack Query**: Para gerenciamento de estado e cache de dados.
- **Zod**: Para validação de esquemas.

## Instalação e Execução

### Observações

- Certifique-se de ter o Node.js.
- Execute os comandos a seguir na pasta do projeto utilizando o cmd (Windows), terminal (Linux) e terminal (macOS) ou utilizando o terminal de sua IDE.

### Comandos
    
1. Instale as dependências, inicie o servidor de desenvolvimento e crie o container no Docker e as tabelas no banco de dados:
    ```bash 
    npm i
    npm run dev
    ```
- O Aplicativo estará disponível em http://localhost:3000.

## Estrutura do projeto
- src/: Contém todo o código-fonte do Aplicativo
    - components/: Componentes reutilizáveis da interface.
    -  http/: Funções para chamadas de API.
    - ui/: Componentes de interface de usuário.

## Documentação da API

[Documentação da API](https://link-da-documentação)
    


## Referência

- [NLW Pocket Avançado - Rocketseat](https://app.rocketseat.com.br/classroom/nlw-17-pocket-intermediario)

## Contribuições
- Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
