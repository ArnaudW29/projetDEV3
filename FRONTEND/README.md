# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## BUILD

```
ng add @angular/material :: install angular material
REM install angular-highcharts and highcharts
npm install --save highcharts-angular highcharts
REM install Angular Flex-Layout
npm install --save @angular/flex-layout @angular/cdk
REM install socket.io
npm install socket.io-client @types/socket.io --save
REM enable custom scrollbars
npm install --save ngx-textarea-autosize
```
## dev steps

```
REM create new Angular project
ng new demo :: don't use strict type check, add Angular Routing, use SCSS
cd demo
REM set up Angular Material
ng add @angular/material :: Indigo/Pink, default settings
REM set up highcharts
npm install --save highcharts-angular highcharts
REM set up Angular Flex-Layout
npm install --save @angular/flex-layout @angular/cdk
REM install socket.io
npm install socket.io-client @types/socket.io --save
REM enable custom scrollbars
npm install --save ngx-textarea-autosize
REM create components
ng generate component modules/dashboard
ng g c modules/game-screen
ng g c modules/ingame-sidebar
ng g c modules/admin
ng g c modules/profile
ng g c modules/about
ng g c shared/header
ng g c shared/sidebar
ng g c widgets/game-icon
ng g c widgets/game-expanded
ng g c widgets/game-chat-room
ng g c widgets/profile-card
ng g c widgets/leaderboard
ng g c widgets/admin-logs
ng g module modules
ng g m shared
ng g m widgets
ng g m angular-material
ng g service chat
ng g s user
ng g s active-game
ng g s admin
```
