<h1 align="center"><b>Rick and Morty Web </b></h1>

This project was created for a challenge test for the company Mottu. The objective of the test is to create a web page where you can search for your favorite characters from Rick And Morty. Here you can:

- See all characters of Rick And Morty
- Search by name one or more characters
- Build your favorite list of characters

 [Live Review](https://rickmorty-web.vercel.app/characters)


## Dependencies

- Angular 18
- RxJS 7.8
- Angular font Awesome 0.15
  

## Project Folder Architecture

    rickmorty.web
    ├── src
    │   ├── app
    │   │   ├── core
    │   │   │   ├── data-access
    │   │   │   ├── models
    │   │   │   └── view-models
    │   │   ├── modules
    │   │   │   └── characters
    │   │   │       ├── pages
    │   │   │       │   ├── characters-favorites
    │   │   │       │   │   └── layout
    │   │   │       │   └── characters-list
    │   │   │       │       └── layout
    │   │   │       └── shared
    │   │   │           ├── components
    │   │   │           │   ├── characters-card
    │   │   │           │   ├── characters-list-grid
    │   │   │           │   ├── feedback-info
    │   │   │           └── services
    │   │   │               ├── adapters
    │   │   │               │   └── characters
    │   │   │               └── providers
    │   │   │                   ├── characters
    │   │   ├── shared
    │   │   │   ├── components
    │   │   │   │   ├── button
    │   │   │   │   ├── button-icon
    │   │   │   │   ├── font
    │   │   │   │   ├── header
    │   │   │   │   │   ├── interfaces
    │   │   │   │   │   └── layout
    │   │   │   │   └── loader
    │   │   │   ├── directives
    │   │   │   │   └── infinite-scroll
    │   │   │   ├── enums
    │   │   │   ├── interfaces
    │   │   │   │   └── contracts
    │   │   │   ├── mocks
    │   │   │   │   ├── characters
    │   │   │   │   └── services
    │   │   │   │       ├── http
    │   │   │   └── services
    │   │   │       └── providers
    │   │   │           ├── favorites
    │   │   │           ├── http
    │   │   └── styles
    │   │       └── scss
    │   ├── environments  

## Coverage

This application has 100% coverage in their unit tests.

![Captura de tela de 2024-06-16 19-23-48](https://github.com/EduardoDrozda/rickmorty.web/assets/26945693/98f487a9-f35c-4198-a2eb-3cdd2a34a396)


## How to run the project

Install the project dependencies running on terminal `npm i`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/)

## Things I wish I had done

- Better experience to `infinitescroll directive`
- A better loading of page (some more similar to Rick and Morty)
- E2E Tests
- Docker image for deploy

<br />
<br />

<footer align="center">
  <p><b>Created By</b></p>
  <a href="https://eduardodrozda.com">Eduardo Drozda</a>
</footer>
