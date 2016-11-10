/**
 * Created by vicman on 10/30/16.
 */
export default class detailController {
    pokemonId : number;
    constructor($stateParams : any) {
        this.pokemonId = $stateParams.pokemonId;
    }
}