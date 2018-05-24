import { Product } from './Product';

class ProductController {
    constructor() {

    }
    printHello(){
        console.log("printed hello");
    }
    insert(data){
        this.printHello();
        let usr = Meteor.user();

        // let usr = Meteor.user();
        let ret = Product.insert({
            dataPath:data.filePath,
            name:data.name,
            category:data.category,
            subCategory:data.subCategory,
            color:data.color,
            size:data.size,
            style:data.style,
            price:data.price,
            quantity:data.quantity,
            uploadedBy:data.uploadedBy,
            suppliedBy:data.suppliedBy,
            purchasePrice:data.purchasePrice,
            sellingPrice:data.sellingPrice,
            commission:data.commission,
        });
        return ret;
    }

}

export default new ProductController();
