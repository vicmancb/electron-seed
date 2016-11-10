/**
 * Created by vicman on 10/30/16.
 */

import {module as ngMogule} from 'angular';
import pokemonService from './pokemon.service'

export default ngMogule('app.api.pokemon',[])
    .service('pokemonService', pokemonService)
    .name;