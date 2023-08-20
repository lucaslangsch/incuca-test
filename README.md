# Projeto InCuca Tech - O Teste Sádico

Um desafio técnico proposto pelo time da InCuca Tech que consiste em desenvolver uma aplicação fullstack. O back-end deve realizar a autenticação do usuário e trazer de forma randômica piadas da API [Geek Joke](https://github.com/sameerkumar18/geek-joke-api). O front-end deve consumir esse back-end criado, permitindo o usuário realizar login e navegar entre as páginas para visualizar as piadas.

## Tecnologias

- Vue.js
- Vuetify
- Pinia
- AdonisJs
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- SQLite
- Typescript
- Javascript
- Docker

## Como executar

Para rodar a aplicação é necessário ter o [Docker](https://docs.docker.com/engine/install/) e [Docker Compose](https://docs.docker.com/compose/) instalados .

Após clonar o repositório, entre na pasta raiz do projeto e execute no terminal
```bash
docker-compose up --build
```

> Por padrão a porta **8080** será usada no front-end e a porta **3333** no back-end.

**ATENÇÃO** se precisar usar portas diferentes, faça as alterações necessárias no `docker-compose.yml` na raiz do projeto e nos arquivos `Dockerfile` nas subpastas ./frontend e ./backend

Uma vez com a tela inicial do front-end, o login poderá ser feito com o email `cliente@incuca.com.br` e password `seumamesapossuirtrespernaschamadasqualidadeprecobaixoevelocidadeelaseriacapenga`

## Desenvolvimento

Maiores detalhes podem ser consultados na [documentação do código](https://github.com/lucaslangsch/incuca-test/DOC.md)

## Alterações futuras

A aplicação não possui testes até o momento, sendo esse o próximo passo deste projeto.