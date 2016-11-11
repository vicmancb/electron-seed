/**
 * Created by vicman on 10/30/16.
 */
import Pokemon from '../../../pokemon/models/pokemon';

export default class PokemonService {
    pokemonList : any;
    http : any;
    static $inject = ['$http'];
    constructor($http:any) {
        // "ngInject";
        this.pokemonList = [];
        this.http = $http;

    }
    getPokemonList() {
        return this.http({
            method: 'GET',
            url: "https://udem.herokuapp.com/parcial"
        }).then((response:any) => {
            return response.data;
        });
    }
}