# video-store-krs

Olá, segue submissão do desafio proposto para a vaga de frontend no Grupo Krs.

Algumas Observações: Para resolução do desafio usei um template do create react app em conjunto com  o pré processador SASS. Como nenhum layout foi disponibilizado tentei usar a minha criatividade e algumas referências de layouts que já desenvolvi em algum projeto ou teste.
 
Tecnologias Usadas: 
- ReactJS.
- json-server para simulação do backend.
- SASS.
- React-router-dom para criação das rotas
- Formik para criação do formulário.
- Tentei por em prática um pouco do que aprendi na codenation então tentei usar Arquitetura BEM CSS.
- Prettier e Eslint para padronização do código;
- Usei o yarn para gerenciamento dos pacotes

Funcionalidades desenvolvidas:
- Listagem dos filmes
- Adicionar um novo filme
- Deletar Filme
- Editar Filme (Pendente)

Extra: Fiz uma barra de busca em tempo real

## Como rodar o projeto
1. Clone esse repositório 

Iniciando o Backend

2. Primeiro rode no terminal o comando `npm install -g json-server` para instalar globalmente o json-server
3. Após isso, entre no diretório backend e rode `json-server db.json -p 3001`;

Rotas do Backend 

Metodo | Endpoint
------------- | -------------
GET  | movies
POST  | movies
PUT  | movies/:id
DELETE  | movies/:id


Iniciando o Frontend

4. Entre no diretório frontend e rode um `yarn` para instalar as dependencias
5. Depois é só rodar o comando `yarn start` e a aplicação irá rodar na porta 3000
