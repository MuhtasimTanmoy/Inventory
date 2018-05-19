import { Item } from './Item';

class ItemController {
    constructor() {

    }
    printHello(){
        console.log("printed hello");
    }
    insert(data){
        this.printHello();
        let usr = Meteor.user();

        // let usr = Meteor.user();
        let ret = Item.insert({
            title:data.title,
            text:data.text,
        });
        return ret;
    }

}

export default new ItemController();
