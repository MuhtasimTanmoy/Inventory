import React, { Component } from "react";
import {withTracker} from 'meteor/react-meteor-data';
import {Product} from '/imports/api/product/Product.js';



class ItemPageContent extends Component {


  renderInfo(){

    let returnIt;
    console.log(this.props.product);

    if(this.props.product){

      returnIt=<div>
      <h1>Item {this.props.product.name}
  <br/>
      {this.props.product.text}
      </h1>


      <div className="ui segment">
      <img className="ui image" src={this.props.product.dataPath}>
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


    render() {

        return (


            <div className="ui container">

            {this.renderInfo()}
            </div>



        )
    }
}


export default withTracker((props) => {
  console.log(props.id);
  Meteor.subscribe('oneProduct',props.id);
  return {
    user:Meteor.user(),
    product: Product.findOne(props.id),
  };
})(ItemPageContent);
