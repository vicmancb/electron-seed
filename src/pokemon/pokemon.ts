/**
 * Created by vicman on 10/30/16.
 */

import {module as ngMogule} from 'angular';
import detail from './detail/detail';
import list from './list/list';


export default ngMogule('app.pokemons',[detail, list]).name;