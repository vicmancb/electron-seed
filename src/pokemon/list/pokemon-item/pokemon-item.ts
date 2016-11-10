/**
 * Created by vicman on 10/30/16.
 */
import {module as ngMogule} from 'angular';
import pokemonItem from './pokemon-item.component';

export default ngMogule('app.pokemons.list.pokemonItem',[])
    .component('pokemonItem', pokemonItem).name;