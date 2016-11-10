/**
 * Created by vicman on 10/28/16.
 */
import Pokemon from '../models/pokemon';
import PokemonApi from '../../shared/api/pokemon/pokemon.service';

export default class listService {
    http: any;
    pokemonApi: PokemonApi;

    constructor($http: any, pokemonService: PokemonApi) {
        this.http = $http;
        this.pokemonApi = pokemonService;
    }

    protected getNumber(url: string): any {
        var arr = url.split('/');
        return arr[arr.length - 2];
    }

    public getPokemonList(): any {
        let pokemonListReturn: Array<Pokemon> = [];
        return this.pokemonApi.getPokemonList()
            .then((pokemonList : any) => {
                angular.forEach(pokemonList.results, (pokemon) => {
                    var pokemonObj = new Pokemon(this.getNumber(pokemon.url), pokemon.name);
                    pokemonListReturn.push(pokemonObj);
                });
                return pokemonListReturn;
            });

    }
}