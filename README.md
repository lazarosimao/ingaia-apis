<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">inGaia Challenge</h1>

  <p align="center">
    Apis para calcular o valor do imóvel
    <br />
    <a href="https://www.linkedin.com/in/l%C3%A1zaro-sim%C3%A3o-b21a26b1/"><strong>Lázaro Simão - Developer - Linkedin »</strong></a>
    <br />
    <br />
    <a href="https://apis-ingaia.herokuapp.com/swagger/#/">Swagger</a>
    ·
    <a href="https://github.com/lazarosimao/ingaia-apis/issues">Reportar Bug</a>
    ·
    <a href="https://github.com/lazarosimao/ingaia-apis/issues">Solicitar nova funcionalidade</a>
  </p>
</p>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#requisitos">Requisitos</a></li>
        <li><a href="#pontos-relevantes-para-o-desenvolvimento">Pontos relevantes para o desenvolvimento</a></li>
        <li><a href="#tecnologias-e-ferramentas-utilizadas-no-desenvolvimento">Tecnologias e ferramentas utilizadas no desenvolvimento</a></li>
      </ul>
    </li>
    <li>
      <a href="#começando">Começando</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#build-do-projeto">Build do projeto</a></li>
        <li><a href="#testes">Executar Testes</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# Sobre o projeto
<p align="center">
  <img alt="githubdark-logo" src="https://cdn-content.talentbrand.com.br/companies/159/w512h140/ef0adf3c65d8eb3e56a28f996ac607d3790152ed.png?1550301519" width="300">
</p>

- Desenvolver 2 APIs
    - API1 - Retorna o valor fixo do metro quadrado
    - API2 - Recebe quantidade de metros quadrados e calcula o valor do imóvel


## Requisitos
#### Todo List

[:heavy_check_mark:] Seu serviço deve ser acessível através de uma API REST

[:heavy_check_mark:] Você deverá desenvolver 2 APIs

[:heavy_check_mark:] Seu serviço deve validar o valor de entrada

[:heavy_check_mark:] O quantidade de metros quadrados deve estar entre 10 e 10.000

[:heavy_check_mark:] Apesar do valor do metro quadrado ser fixo, desenvolva como se esse valor tivesse vindo de um base de dados

[:heavy_check_mark:] O valor do métro quadrado dever ser obtido chamando a API1

[:heavy_check_mark:] Disponibilizar os serviços Online


## Pontos relevantes para o desenvolvimento
#### Todo List

[:heavy_check_mark:] Boas práticas de desenvolvimento

[:heavy_check_mark:] Padrões de codificação 

[:heavy_check_mark:] Execução utilizando docker

[:heavy_check_mark:] Readme bem estruturado explicando a arquitetura e instruções para subir os microserviços

[:heavy_check_mark:] Código no GitHub, demonstrando conhecimento em sua utilização

[:heavy_check_mark:] Swagger

[:heavy_check_mark:] Teste unitário e teste de integração

[:heavy_check_mark:] CI/CD


## Tecnologias e ferramentas utilizadas no desenvolvimento
* [NodeJS](https://nodejs.org/en/docs/)
* [Typescript](https://www.typescriptlang.org/docs/)
* [Express](https://expressjs.com/pt-br/)
* [MongoDB](https://docs.mongodb.com/)
* [CircleCI](https://circleci.com/docs/)
* [GitHub](https://docs.github.com/pt)
* [Docker](https://docs.docker.com/)
* [Heroku](https://devcenter.heroku.com/categories/reference)
* [Eslint](https://eslint.org/docs/user-guide/configuring)
* [Jest](https://jestjs.io/docs/en/getting-started)
* [Swagger](https://swagger.io/docs/)

<!-- GETTING STARTED -->
# Começando

Para obter uma cópia local instalada e funcionando, siga estas etapas simples de exemplo.

### Pré-requisitos

* Docker instalado
* Yarn instalado

### Build do projeto

1. Clone o repositório
    ```sh
    git clone git@github.com:lazarosimao/ingaia-apis.git
    ```
2. Altere o comando de start no `Dockerfile`
  - Na linha 14: `ENTRYPOINT ["yarn", "start"]`
  - Altere para: `ENTRYPOINT ["yarn", "start:dev"]`

3. Faça o build
   ```sh
   docker-compose up --build
   ```

### Testes
1. Faça o build
   ```sh
   docker-compose up --build
   ```
2. Execute os testes
   ```sh
   yarn test
   ```


<!-- USAGE EXAMPLES -->
# Uso
- [GET] - `https://apis-ingaia.herokuapp.com/api/v1/square-meter-value`
- [POST] - `https://apis-ingaia.herokuapp.com/api/v1/property-value`

_Para maiores detalhes acesse a [documentação](https://apis-ingaia.herokuapp.com/swagger/#/)_


<!-- ROADMAP -->
# Roadmap
_Veja os [commits](https://github.com/lazarosimao/ingaia-apis/commits/master) gerados._


<!-- CONTACT -->
# Contato

Lázaro Simão - Developer - lssimao.infor@gmail.com | lazaro.lss@outlook.com
<br>
[![LinkedIn][linkedin-shield]][linkedin-url]

Repositório: [https://github.com/your_username/repo_name](https://github.com/lazarosimao/ingaia-apis/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/lazarosimao
[contributors-url]: https://github.com/lazarosimao/ingaia-apis/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/lazarosimao
[forks-url]: https://github.com/lazarosimao/ingaia-apis/network/members
[stars-shield]: https://img.shields.io/github/stars/lazarosimao
[stars-url]: https://github.com/lazarosimao/ingaia-apis/stargazers
[issues-shield]: https://img.shields.io/github/issues/lazarosimao
[issues-url]: https://github.com/lazarosimao/ingaia-apis/issues
[license-shield]: https://img.shields.io/github/license/lazarosimao
[license-url]: https://github.com/lazarosimao/ingaia-apis/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/lazarosimao
