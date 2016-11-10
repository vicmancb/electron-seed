/**
 * Created by vicman on 10/27/16.
 */
import {module as ngMogule} from 'angular';
import footerComponent from './footer.component'

export default ngMogule('app.footer',[])
    .component('footer', footerComponent).name;