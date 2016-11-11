/**
 * Created by vicman on 10/30/16.
 */

var dymo = require('dymo');
var fs = require("fs");
export default class detailController {
    pokemonId : number;
    static $inject = ['$stateParams'];
    constructor($stateParams : any) {
        // "ngInject";
        this.pokemonId = $stateParams.pokemonId;
        dymo.printers(null, function(err:any, printers:any){
            if (err) throw err;
            console.log(printers);
        });
    }
}