import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Product} from '../Product.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('products', function () {
    //console.log(this.userId);
    return Product.find({createdBy:this.userId});
  });

  //
  // Meteor.publish('oneProduct', function (itemId) {
  //   console.log(itemId);
  //   return Product.find({"_id":itemId});
  // });

}
