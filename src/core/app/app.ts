import {module as ngMogule} from 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';


// modules
import footer from '../footer/footer';
import header from '../header/header';
import pokemon from '../../pokemon/pokemon';

//api
import pokeApi from '../../shared/api/pokemon/poke.api'

import AppCtrl from './app.controller'
import appComponent from './app.component'

/**************************************************/
/*the next array definitions are the list of modules
to load as dependencies of main app module*/
/**************************************************/
const libList : Array<string> = [
    'ui.router'
];

const apiList : Array<string> = [
    pokeApi
];

const modulesList:Array<string> = [
    footer,
    header,
    pokemon
];
/************************************************/

let dependencies = libList
                    .concat(apiList)
                    .concat(modulesList);

export default ngMogule('app', dependencies)
    .controller('AppCtrl', AppCtrl)
    .component('app', appComponent)
    .config(function ($stateProvider:any, $urlRouterProvider:any, $locationProvider:any) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('main', {
                url: '/',
                template : '<app></app>'
            });

        $locationProvider.html5Mode(true);
    }).name;