import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ItemCollection extends Mongo.Collection {
    insert(doc, callback) {

        let now = new Date();

        doc.createdAt = now;
        doc.createdBy = Meteor.userId();

        return super.insert(doc, callback);
    }

    update(selector, modifier) {
        return super.update(selector, modifier);
    }

    remove(selector) {
        return super.remove(selector);
    }
}

export const Item = new ItemCollection('Item');

Item.schema = new SimpleSchema({
    title:{type:String},
    text:{type:String},
    createdAt: { type: Date },
    createdBy: { type: String },
});
