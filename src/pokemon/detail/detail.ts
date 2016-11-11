/**
 * Created by vicman on 10/30/16.
 */

import {module as ngMogule} from 'angular';
import detailComponent from './detail.component';

const config = function ($stateProvider:any) {
    "ngInject";
    $stateProvider
        .state('detail', {
            url: '/detail/:pokemonId',
            template : '<detail-component></detail-component>'
        });
};
config.$inject = ['$stateProvider'];

export default ngMogule('app.pokemons.detail',[])
    .component('detailComponent', detailComponent)
    .config(config).name;