/**
 * Created by vicman on 10/30/16.
 */
import './pokemon-item.less'
import controller from './pokemon-item.controller';

const pokemonItem =  {
    template : require('./pokemon-item.html'),
    controller,
    bindings : {
        pokemon : '='
    }
};

export default pokemonItem;