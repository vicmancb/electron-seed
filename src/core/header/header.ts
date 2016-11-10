/**
 * Created by vicman on 10/27/16.
 */
import {module as ngMogule} from 'angular';
import headerComponent from './header.component'

export default ngMogule('app.header',[])
    .component('header', headerComponent).name;