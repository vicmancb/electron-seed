/**
 * Created by vicman on 10/30/16.
 */

import {module as ngMogule} from 'angular';
import detailComponent from './detail.component';

export default ngMogule('app.pokemons.detail',[])
    .component('detailComponent', detailComponent)
    .config(function ($stateProvider:any) {
        $stateProvider
            .state('detail', {
                url: '/detail/:pokemonId',
                template : '<detail-component></detail-component>'
            });
    }).name;