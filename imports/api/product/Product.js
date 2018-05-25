import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ProductCollection extends Mongo.Collection {
    insert(doc, callback) {

        let now = new Date();

        doc.createdAt = now;
        doc.createdBy = Meteor.userId();
        doc.uploadedBy=Meteor.userId();

        return super.insert(doc, callback);
    }

    update(selector, modifier) {
        return super.update(selector, modifier);
    }

    remove(selector) {
        return super.remove(selector);
    }
}

export const Product = new ProductCollection('Product');

Product.schema = new SimpleSchema({
    name:{type:String},
    category:{type:String},
    subCategory:{type:String},
    color:{type:String},
    size:{type:String},
    style:{type:String},
    price:{type:String},
    quantity:{type:String},
    uploadedBy:{type:String},
    suppliedBy:{type:String},
    purchasePrice:{type:String},
    sellingPrice:{type:String},
    commission:{type:String},
    filePath:{type:String,optional:true},
    createdAt: { type: Date },
    createdBy: { type: String },
});
