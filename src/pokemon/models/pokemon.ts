/**
 * Created by vicman on 10/28/16.
 */
export default class Pokemon {
    id : number;
    name : string;
    img : string;
    constructor(id :number, name : string, img : string = '') {
        this.id = id;
        this.name = name;
        this.img = img;
    }
}