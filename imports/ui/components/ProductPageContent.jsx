import React, { Component } from "react";
import {withTracker} from 'meteor/react-meteor-data';
import {Product} from '/imports/api/product/Product.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import ProductItem from './card/ProductItem';




class ProductPageContent extends Component {



addProduct(){
  FlowRouter.go('/addproduct');
}
 test(){
   // <ProductItem image="/images/upload.jpg" name="tanmoy" quantity="10" />
   // <ProductItem image="/images/upload.jpg" name="tanmoy" quantity="10" />
   //
   // <ProductItem image="/images/upload.jpg" name="tanmoy" quantity="10" />
   //
   // <ProductItem image="/images/upload.jpg" name="tanmoy" quantity="10" />

 }



renderProducts(){
  return this.props.products.map((task) => (
    <ProductItem key={task._id} id={task._id} createdAt={task.createdAt} image={task.dataPath} quantity={task.price}  name={task.name} />
  ));
}




    render() {

        return (


            <div className="ui container">
    <div className="circular ui icon grey button  complainAddBtn"  onClick={this.addProduct.bind(this)}>
      <i className="icon add"></i>
    </div>

    <div style={{paddingTop:"40px"}}>

  {this.renderProducts()}
    </div>






            </div>



        )
    }
}


export default withTracker((props) => {
  Meteor.subscribe('products');
  return {
    user:Meteor.user(),
    products: Product.find({},{ sort: { createdAt: -1 } }).fetch(),
  };
})(ProductPageContent);
