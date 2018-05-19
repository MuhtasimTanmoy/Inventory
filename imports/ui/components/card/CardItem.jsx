import React, { Component } from 'react';
export default class CardItem extends Component {

  delete(){
    let data={
      id:this.props.id
    }
    Meteor.call("item.delete",data,(error)=>{
      if(error){
        console.log(error);
      }
      else{
        console.log("Success");
      }
    })
  }

  render(){


    return (
      <div className="ui segment">

      <a href={'/item/'+ this.props.id} style={{position:'absolute',right:'80px',top:'15px',cursor:'pointer'}}>
      Details
      </a>
      <div className="left floated">  
      <div className="ui text">
      {this.props.title} - {this.props.text}

      </div>
</div>
      <i className="trash icon big"    onClick={this.delete.bind(this)}   style={{position:'absolute',right:'15px',top:'10px',cursor:'pointer'}}></i>



    </div>
  )
  }

}
