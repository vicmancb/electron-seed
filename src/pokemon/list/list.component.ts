/**
 * Created by vicman on 10/28/16.
 */
import './list.less';
import Pokemon from '../models/pokemon';
import listService from './list.service'

class controller {
    pokemonList: Pokemon[] = [];
    search : string;
    executeSearch : string;
    listService : listService;

    static $inject = ['listService'];
    constructor(listService:listService) {
        this.search = '';
        this.executeSearch = '';
        this.listService = listService;
        this.getPokemonList();
    }

    getPokemonList() {
        this.listService.getPokemonList()
            .then((pokemonList : any) => {
                angular.forEach(pokemonList, (pokemon : Pokemon) => {
                    pokemon.img = 'https://raw.githubusercontent.com/vicmancb/pokemon/master/'+ pokemon.id +'.png'
                });
                this.pokemonList = pokemonList;
            });
    }

    find () : void {
        this.executeSearch = this.search;
    }
}

const listComponent =  {
    template : require('./list.html'),
    controller
};

export default listComponent;