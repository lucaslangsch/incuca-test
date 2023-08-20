## Desenvolvimento

### Prazo de conclusão - requisitos iniciais
Nesse primeiro projeto utilizando Adonis e Vue, estimou-se uma carga horária de 30h, tendo em vista a necessidade de um tempo para familiarização com as tecnologias.

### Prazo de conclusão - requisitos bônus
Acredita-se que para a implementação de testes e aplicação de estilos seria necessário mais 24h.

### Tecnologias

Para construção do back-end foi utilizado Adonis.Js, SQLite, pela facilidade de implementação uma vez que não se viu necessidade de um servidor dedicado para o banco, e, JWT através do pacote [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken). O Adonis é um framework completo e o mesmo apresenta módulos nativos para autenticação, mas, por não seguirem o padrão JWT optou-se pela não utilização destes.

Na construção do front-end utilizou-se do framework VueJs, Vuetify para aplicação de folhas de estilos e componentes prontos, e Pinia, para gerenciamento do estado.

### Arquitetura

O projeto foi desenvolvido em container utilizando Docker e Docker Compose. O arquivo `docker-compose.yml` encontras-se na raiz do projeto enquanto que o os arquivos `Dockerfile` nas em suas respectivas subpastas `./frontend` e `./backend`. Alterações de portas ou de variáveis de ambiente devem ser feitas nesses arquivos.

### Arquitetura - Back-end

Optou-se pela metodolgia em camadas com separação em Controllers, Services e Model, sendo a camada de Model administrada pelo ORM nativo do Adonis, o Lucid.

- `/start/routes.ts`: é o arquivo que deverá agrupar todas as rotas através de importações

- `./start/routes`: é a pasta que contém os arquivos com cada rota. Os arquivos de rotas são agrupadas por endpoint, sendo os diferentes métodos presentes no mesmo arquivo. Ex.: a rota `DELETE /user` e `POST /user` devem estar dentro do arquivo `UserRoutes.ts`

- `/app/middlewares`: é a pasta que deverá conter os tratamentos e validações necessárias

- `/start/kernel.ts`: neste arquivo devem ser feitas as importações de cada middleware criado

- `/app/controllers`: os controllers devem chamar a camada de service e devolver a resposta para o usuário

- `/app/services`: as services devem aplicar as regras de negócio existente e chamar a camada de model

- `/app/models`: a camada de model é administrada pelo Lucid, sendo assim essa pasta deve conter o espelho de cada tabela criada no banco de dados

- `/app/auth`: nesta pasta encontram-se as funções referentes a autenticação do usuário

### Arquitetura - Front-end

O front foi construído em Vue.Js, Vuetify para aplicação de estilos e uso de componentes de UI, Pinia para gerenciamento de estado e Vue Router para administração de rotas. Também é utilizado o localStorage do cliente, uma vez que é necessário armazenar o token de autenticação.

- `/src/router/index.js`: neste arquivo encontram-se todas as telas disponíveis da aplicação

- `/src/stores`: nesta pasta encontram-se as stores globais criadas, sendo uma para cada contexto

- `/src/utils`: nesta pasta encontram-se as funções de fetch e de localStorage

- `/src/views`: é a pasta que contém o arquivo base para cada tela. Cada arquivo pode ou não importar outros componentes

- `/src/components`: é a pasta que contém os componentes
