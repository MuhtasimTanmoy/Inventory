import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Product} from './Product.js';
import controller from './controller';


Meteor.methods({

    'product.insert'( data ){

        //pass data to this method as:  {patientId, reportId, dataEntryId}
        // if (!this.userId) {
        //     throw new Meteor.Error('not-authorized');
        // }

        // console.log(this);

        let usr = Meteor.user();
        let ret = controller.insert(data);

        return {
          statusCode: 1,
          statusId: ret,
        }

    },
    'product.update'( data ){
      console.log(data);


      let ret=Product.update(data.id, {
                $set: {
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
                },
            });

        // if ( Meteor.user() != null) {


        // }
        //  else {
        //     throw new Meteor.Error('not-authorized');
        // }
        return {
            statusCode: 1,
            statusId:ret
        }
    },
    'product.delete'( data ){
      console.log(data.id);

        Product.remove(data.id);

        // if ( Meteor.user() != null ) {

        // } else {
        //     throw new Meteor.Error('not-authorized');
        // }
        return {
            statusCode: 1,
        }

    }

});
