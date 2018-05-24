import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Item} from '../Item.js';

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('items', function () {
    //console.log(this.userId);
    return Item.find({createdBy:this.userId});
  });

  //
  // Meteor.publish('oneItem', function (itemId) {
  //   console.log(itemId);
  //   return Item.find({"_id":itemId});
  // });

}
