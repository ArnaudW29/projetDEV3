# 2T-projet-devgames
Voici le repository de notre projet de Développement Informatique 3.

2020 - 2021 Développement Informatique 3 (web)

 ![Image de l'ephec](https://i.imgur.com/k1pB47i.png?1)
## Présentation :  
Nous sommes des eleves en 2TI de l'[Ephec](https://www.ephec.be/)
* [WAETERMANS Arnaud](https://github.com/ArnaudW29)
* [BOTTY Sébastien](https://github.com/sebastienbotty)
* [DELANNOIT Grégoire](https://github.com/thegregouze)
* [DAXHELET Nicolas](https://github.com/nicodax)
## Description :
Site de jeu simple en ligne


# DEPENDENCIES

```
REM set up Angular Material : use Indigo/Pink, default settings
ng add @angular/material 
REM set up Angular Flex-Layout
npm install --save @angular/flex-layout @angular/cdk
REM install express, path, mongoose, cors, body-parser
npm i --save express path mongoose cors body-parser socket.io socket.io-client
```

## run local app

```
REM build static angular files
ng build
REM run express server  
node server
```

## unit tests

```
REM mocha is used to test express apps
npm install mocha nyc --save-dev
REM SuperTest is used to test HTTP calls
npm i supertest --save-dev
npm i --save-dev chai
```

Test front end (angular) : 
```
ng test
```

Test back end (express) :
```
npm test
```
