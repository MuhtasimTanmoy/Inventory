import React, { Component } from "react";

export default class StartPage extends Component {


  handleSubmit(){
    console.log("Error");
  }


    render() {
        return (


            <div className="ui container" style={{marginTop:'40px'}}>
              <div className="ui segment">
              <div className="ui input">
                  <input type="text" ref="username" >
                  </input>
              </div>

              <br/>

              <div className="ui blue button" onClick={this.handleSubmit.bind(this)}>Submit</div>
              </div>



              </div>


        )
    }
}
