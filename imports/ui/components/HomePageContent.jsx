import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import {Item} from '/imports/api/item/Item.js';
import CardItem from './card/CardItem';

class HomePageContent extends Component {
  constructor() {
    super();
  }

  handleSubmit(event){
  event.preventDefault();
  let data = {
   title : ReactDOM.findDOMNode(this.refs.title).value.trim(),
   text : ReactDOM.findDOMNode(this.refs.text).value.trim(),
};
  console.log(data);

  Meteor.call("item.insert",data,function(error,result){
    if(error){
      console.log("error", error);
      window.alert(error.message)
    }
    if(result){
      console.log("Success");
      console.log(result);
   }
  });


  title=ReactDOM.findDOMNode(this.refs.title).value="";
  text=ReactDOM.findDOMNode(this.refs.text).value="";


  var title=document.getElementById("title");
  title.placeholder="Take a note......."



}

renderItems(){
  return this.props.items.map((task) => (
    <CardItem key={task._id} id={task._id} createdAt={task.createdAt} text={task.text} title={task.title} />
  ));
}

  render() {
    return (

      <div className="ui container" style={{paddingTop:"50px"}}>
      <form className="ui form" >
          <div className="field">
            <div className="ui large icon fluid input">

              <input type="text" id="title" ref="title" placeholder="Take a note......."></input>

            </div>
          </div>

          <div className="field" >
            <textarea ref="text" placeholder="Content"  rows="5"></textarea>
          </div>
          <div className="ui blue fluid button" style={{width:"30%",marginLeft:"35%"}} onClick={this.handleSubmit.bind(this)}>Save</div>
        </form>

        {this.renderItems()}


      </div>

    )
  }
}


export default withTracker(() => {
  Meteor.subscribe('items');
  return {
    user:Meteor.user(),
    items: Item.find({},{ sort: { createdAt: -1 } }).fetch(),
  };
})(HomePageContent);
