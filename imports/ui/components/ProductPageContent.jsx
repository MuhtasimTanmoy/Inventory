import React, { Component } from "react";
import {withTracker} from 'meteor/react-meteor-data';
import {Product} from '/imports/api/product/Product.js';
import { FlowRouter } from 'meteor/kadira:flow-router';




export default class ProductPageContent extends Component {


  renderInfo(){

    let returnIt;
    console.log(this.props.item);

    if(this.props.item){

      returnIt=<div>
      <h1>Product {this.props.item.title}
  <br/>
      {this.props.item.text}
      </h1>


      <div className="ui segment">
      <img className="ui image" src={this.props.item.dataPath}>
      </img>

      </div>

      </div>
  }
  else{
    returnIt=<div className="ui segment">
      Loading
    </div>
  }

  return returnIt;

}

addProduct(){
  FlowRouter.go('/addproduct');

}

    render() {

        return (


            <div className="ui container">



    <div className="circular ui icon grey button  complainAddBtn"  onClick={this.addProduct.bind(this)}>
      <i className="icon add"></i>
    </div>


            </div>



        )
    }
}


// export default withTracker((props) => {
//   Meteor.subscribe('oneProduct',props.id);
//   return {
//     user:Meteor.user(),
//     item: Product.findOne(props.id),
//   };
// })(ProductPageContent);
