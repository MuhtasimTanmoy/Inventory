import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';


export default class ProfilePageContent extends Component {
  constructor() {
    super();
    this.state={
      editable:false
    }
  }


    handleSubmit(){

      console.log("Here");
      let data={
        username : ReactDOM.findDOMNode(this.refs.username).value
      };

      console.log(data);

      //
      Meteor.call("user.update",data,(error)=>{
        if(error)window.alert("Error.");
        else{
          console.log("Success");
          this.setState({
            editable:false
          })

        }
      });



    }

    renderInfo(){

      let info=Meteor.user();
      let returnIt;

      console.log(this.state.editable);

      if(this.state.editable){
        returnIt=<div className="ui">
        <div className="ui input">
            <input type="text" ref="username" defaultValue={info.username} >
            </input>
        </div>

        <br/>

        <div className="ui blue button" onClick={this.handleSubmit.bind(this)}>Submit</div>
        </div>

      }
      else{
        returnIt=<div>
        <h1>{info.username}</h1>
        </div>
      }

      return returnIt;
    }

    changeEditState(){
      this.setState({
        editable:true
      })
    }



  render() {
  //  console.log(Meteor.user());
    return (

      <div className="ui container" style={{marginTop:'100px'}}>
      <div className="ui segment">

      <i className="big edit icon"
      style={{position:'absolute',right:'15px',top:'30px',cursor:'pointer'}}
      onClick={this.changeEditState.bind(this)}
      >
      </i>

      <h1>ProfileContent</h1>

      {this.renderInfo()}


      </div>
      </div>

    )
  }
}
