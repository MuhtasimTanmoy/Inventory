import React, {Component} from "react";
// import { createContainer } from 'meteor/react-meteor-data';

export default class ProductItem extends Component {

  render() {
     console.log(this.props);
    return (<div className="cardItem">
      <div className="cardGoogle">

        <a href={'/product/' + this.props.id}>

          <div style={{
              textAlign: "center"
            }}>
            <div className="ui image" style={{
                width: "100%",
                height: "auto",
                margin: "0px"
              }}>
              <img src={this.props.image}/>

            </div>
          </div>

          <div className="ui segment" style={{
              margin: "0px"
            }}>

            <div className="ui grid">
              <div className="ui twelve wide column">
                <div className="ui text" style={{fontSize:"24px",color:"#000"}}>
                  {this.props.name}
                </div>
              </div>
              <div className="ui four wide column">


                <a className="ui small tag label">
                {this.props.quantity}
                ‎৳
  </a>
              </div>

            </div>
          </div>

        </a>

      </div>

    </div>)
  }
}
