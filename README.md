<!-- @format -->

<h1>
<img src=".github/logo_happy.svg" alt="Logo Happy">
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/vitorsemidio-dev/happy-nlw3?color=%2304D361&style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/vitorsemidio-dev/happy-nlw3?style=for-the-badge">
  
  <a href="https://github.com/vitorsemidio-dev/happy-nlw3/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/vitorsemidio-dev/happy-nlw3?style=for-the-badge">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge">
</p>
</h1>

## 🏁 Tópicos

<p>
    👉<a href="#-sobre-o-projeto" style="text-decoration: none; "> Sobre</a> <br/>
    👉<a href="#-desafios" style="text-decoration: none; "> Desafios</a> <br/>
    👉<a href="#-funcionalidades" style="text-decoration: none; "> Funcionalidades</a> <br/>
    👉<a href="#-layout" style="text-decoration: none"> Layout</a> <br/>
    👉<a href="#-como-executar-o-projeto" style="text-decoration: none"> Como executar</a> <br/>
    👉<a href="#-tecnologias" style="text-decoration: none"> Tecnologias</a> <br/>
    👉<a href="#-autor" style="text-decoration: none"> Autor</a> <br/>
</p>

## 💻 Sobre o projeto

Happy - é uma plataforma online para encontrar e facilitar visitas em orfanatos.

Projeto desenvolvido durante a **3º edição da NLW - Next Level Week** oferecida pela [Rocketseat](https://blog.rocketseat.com.br).

<a name="-desafios"></a>

## 😎 Desafios

Link [Notion Desafios](https://www.notion.so/Vers-o-2-0-do-Happy-c754db7a4d41469e8c2d00fcf75392c4)

- [ ] Layout da aplicação
- [ ] Acesso restrito
- [ ] Recuperação de senhas
- [ ] Cadastro de orfanatos
- [ ] Splash Screen no react Native com Expo
- [ ] Onboarding no usuário
- [ ] Localização real do usuário
- [ ] Cadastro em múltiplas etapas
- [ ] Logout da aplicação
- [ ] Deploy da aplicação

---

<a name="-funcionalidades"></a>

## ⚙️ Funcionalidades

- [x] Back-end ✔️
- [x] Front-end ✔️
- [x] Mobile ✔️

---

## 🎨 Layout

### Web

<p align="center">
    <img width="100%" src=".github/Web-Landing.png" alt="Landing" />
    <img width="100%" src=".github/Web-Mapa.png" alt="Mapa" />
    <img width="100%" src=".github/Web-Cadastro.png" alt="Cadastro" />
    <img width="100%" src=".github/Web-Detalhe.png" alt="Detalhe" />
</p>

### Mobile

<p align="center">
    <img src=".github/mobile/Cadastro-orfanato-1.png" alt="Landing" />
    <img src=".github/mobile/Cadastro-orfanato-2.png" alt="Mapa" />
    <img src=".github/mobile/Cadastro-orfanato-3.png" alt="Cadastro" />
    <img src=".github/mobile/Mapa.png" alt="Mapa" />
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:

1. Backend (pasta server)
2. Frontend (pasta web)
3. Mobile (pasta mobile)

> 💡 O Frontend e o Mobile precisam que o Backend esteja sendo executado para funcionar.

### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/vitorsemidio-dev/happy-nlw3.git

# Acesse a pasta do projeto no terminal/cmd
$ cd happy-nlw3

# Vá para a pasta backend
$ cd server

# Instale as dependências com yarn
$ yarn

# Crie o banco de dados do sistema, caso não tenha
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333

```

### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/vitorsemidio-dev/happy-nlw3.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd happy-nlw3

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

### 📱 Rodando a aplicação mobile (App)

```bash

# Clone este repositório
$ git clone https://github.com/vitorsemidio-dev/happy-nlw3.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd happy-nlw3

# Vá para a pasta da aplicação Mobile
$ cd mobile

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Web** ([React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Leaflet](https://leafletjs.com/)**
- **[React-Leaflet](https://react-leaflet.js.org/)**
- **[Axios](https://github.com/axios/axios)**
- **[Styled Components](https://styled-components.com/)**

> Veja o arquivo [package.json](https://github.com/vitorsemidio-dev/happy-nlw3/blob/master/web/package.json)

#### **Server** ([NodeJS](https://nodejs.org/en/) + [TypeScript](https://www.typescriptlang.org/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[TypeORM](https://typeorm.io/#/)**
- **[SQLite](https://github.com/mapbox/node-sqlite3)**
- **[Multer](https://github.com/expressjs/multer)**
- **[Yup](https://github.com/jquense/yup)**

> Veja o arquivo [package.json](https://github.com/vitorsemidio-dev/happy-nlw3/blob/master/backend/package.json)

#### **Mobile** ([React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/))

- **[Expo](https://expo.io/)**
- **[React Native Maps](https://github.com/react-native-maps/react-native-maps)**
- **[Styled Components](https://styled-components.com/)**
- **[React Navigation](https://reactnavigation.org/)**
- **[Expo Google Fonts](https://github.com/expo/google-fonts)**

> Veja o arquivo [package.json](https://github.com/vitorsemidio-dev/happy-nlw3/blob/master/mobile/package.json)

---

<a name="-autor"></a>

## 🦸‍♂️ **Autor**

<p>
<kbd>
 <img  src="https://avatars2.githubusercontent.com/u/52754546?s=460&u=beb81a6de4cfbea7677783e3ab2527e30582478d&v=4" width="150px;" alt=""/>
 </kbd>
 <br />
 <sub><strong>🌟 Vitor Emídio 🌟</strong></sub>
</p>

[![Linkedin Badge](https://img.shields.io/badge/Vitor-Emidio-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://https://www.linkedin.com/in/vitorsemidio/)](https://www.linkedin.com/in/vitorsemidio/)
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/vitorsemidio-dev)](https://github.com/vitorsemidio-dev)
