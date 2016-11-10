/**
 * Created by vicman on 10/27/16.
 */
import './footer.less';

class controller {
    url : string;
    constructor() {
        this.url = "https://github.com/vicmancb";
    }
}

const footerComponent =  {
    template : require('./footer.html'),
    controller
};

export default footerComponent;