import React, {Component} from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Header from '../components/common/Header';
export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  goToProduct(){
    //  console.log("yes");
    FlowRouter.go("/product");
  }
  goToDash(){
    //  console.log("yes");
    FlowRouter.go("/");
  }
  render() {
    console.log("layout is being renderred...");
    return (<div className="ui grid">
      <div className='row firstRow'>
        <Header/>
      </div>
      <div className='row secondRow '>
      <div className='two wide column mainBody'></div>


        <div  className="mainBody" style={{
            background: "#fff",
            padding: "0px",
            margin: "0px",
            width:"150px",
            position: "fixed"
          }}>
          <div className="card" style={{
              width: '100%',
              height: '100vh'
            }}>
            <div className="ui middle aligned animated divided list" style={{
                paddingTop: "20px"
              }}>
              <div className="item">
                <div className="content" onClick={this.goToDash.bind(this)}style={{
                    cursor: "pointer",
                    textAlign: "center",
                    paddingBottom: "5px"
                  }}>
                  <div className="header">
                    <h3>Dashboard</h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content" onClick={this.goToProduct.bind(this)}style={{
                    cursor: "pointer",
                    textAlign: "center",
                    paddingBottom: "5px"
                  }}>
                  <div className="header" >
                    <h3>Product</h3>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="content" style={{
                    cursor: "pointer",
                    textAlign: "center",
                    paddingBottom: "5px"
                  }}>
                  <div className="header">
                    <h3>Statistics</h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='fourteen wide column mainBody' >
          {this.props.content}
        </div>

      </div>
    </div>);
  }
}
