/**
 * Created by vicman on 10/28/16.
 */

import {module as ngMogule} from 'angular';
import listComponent from './list.component';
import listService from './list.service'

import pokemonItemModule from './pokemon-item/pokemon-item';

export default ngMogule('app.pokemons.list',[pokemonItemModule])
    .component('listComponent', listComponent)
    .service('listService', listService)
    .config(function ($stateProvider:any) {
        $stateProvider
            .state('list', {
                url: '/list',
                template : '<list-component></list-component>'
            });
    }).name;