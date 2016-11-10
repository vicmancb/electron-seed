/**
 * Created by vicman on 10/27/16.
 */
import './header.less';

class controller {
    headerText : string;
    constructor() {
        this.headerText = "this is the header";
    }
}

const headerComponent =  {
    template : require('./header.html'),
    controller
};

export default headerComponent;