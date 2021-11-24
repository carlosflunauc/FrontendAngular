# FrontendAngular

Instalar Angular

    1. Visitar https://angular.io/guide/setup-local

    2. Instalar en visual studio code:
        npm install -g @angular/cli

    3. Crear la Aplicacion con el Nombre "FrontendAngular"
        ng new FrontendAngular

    4. Para Ejecutar:
        ng serve -open
        ng s -o

    4. Crear Modulos
        ng generate module modulos/seguridad --routing
        ng generate module modulos/administracion --routing
        ng generate module modulos/pedidos --routing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
