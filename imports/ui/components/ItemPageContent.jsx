import React, { Component } from "react";
import {withTracker} from 'meteor/react-meteor-data';
import {Item} from '/imports/api/item/Item.js';



class ItemPageContent extends Component {


  renderInfo(){

    let returnIt;

    if(this.props.item){
      returnIt=<div>
      <h1>Item {this.props.item.title}
  <br/>
      {this.props.item.text}
      </h1>

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


            <div className="ui startPage">

            {this.renderInfo()}
            </div>



        )
    }
}


export default withTracker((props) => {
  Meteor.subscribe('oneItem',props.id);
  return {
    user:Meteor.user(),
    item: Item.findOne(props.id),
  };
})(ItemPageContent);
