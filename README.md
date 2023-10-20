# SOBRE O PROJETO

O projeto é uma aplicação web desenvolvida em React com Typescript que se concentra em fornecer funcionalidades de login e cadastro de usuários. Para gerenciar a autenticação, o projeto utiliza o "auth provider" (provedor de autenticação), que é uma técnica comum para gerenciar o estado da autenticação e fornecer acesso a rotas específicas da aplicação com base na autenticação.

O acesso ao login e cadastro é feito por meio de solicitações HTTP a um serviço fictício chamado "https://reqres.in/".

# Acesso ao Login & Cadastro

O site "https://reqres.in/" é um serviço online que fornece uma API pública de exemplo para fins de desenvolvimento e testes. Ele não é um serviço real de produção, mas sim um serviço fictício usado para demonstrar e testar solicitações HTTP e interações com uma API. O objetivo principal do Reqres é permitir que os desenvolvedores pratiquem e testem chamadas de API em uma variedade de métodos (GET, POST, PUT, DELETE) e verifiquem como as respostas são manipuladas. Dessa forma, fornece exemplos de endpoints para simular as operações de login e cadastro.

## Registro (Cadastro):

Para simular um processo de registro (cadastro), é feito uma solicitação POST para o endpoint "https://reqres.in/api/register" fornecendo um objeto JSON com os dados do usuário, com e-mail e senha:

`POST https://reqres.in/api/register`
```Json
{
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}
```
A API responderá com uma resposta JSON simulada, indicando se o registro foi bem-sucedido ou não. Para ser "bem-sucedido" basta inserir as informações acima, qualquer outra informação não será possível para simular o cadastro.

## Login:

Para simular um processo de login, você pode fazer uma solicitação POST para o endpoint "https://reqres.in/api/login" fornecendo um objeto JSON com os dados de login, como email e senha:

`POST https://reqres.in/api/login`
```Json
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```
Da mesma forma, a API responderá com uma resposta JSON simulada, indicando se o login foi bem-sucedido ou não. E também segue a mesma ideia, só é possível fazer login com as informações acima, qualquer outra informação não será possível para simular o login.

# 🎲 Rodando o código

```bash
# Clone este repositório
$ git clone <https://github.com/maycon-mdrs/login-react>

# Acesse a pasta do projeto
$ cd login-react

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Acesse <http://localhost:3000>
```

# 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [AntDesign](https://ant.design/)
- [BootStrap](https://getbootstrap.com/)

# Autor

<a href="https://github.com/maycon-mdrs" style= "float: left">
    <div style="display: flex; flex-direction: column; align-items
    : center">
        <img style="width: 150px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/81583731?v=4" alt=""/>
        <br />
        <strong>Maycon Douglas Rêgo Santos 🚀</strong>
    </div>
</a>
