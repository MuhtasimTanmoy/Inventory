import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class StartPage extends Component {

  constructor() {
    super();
    this.state = {
      pic: "/images/placeholder.png"
    }

  }

  changePic() {

    this.setState({pic: '/images/upload.jpg'});

  }

  resetPic() {
    this.setState({pic: '/images/placeholder.png'});

  }

  handleSubmit() {



    var file = $("input[type=file]").get(0).files[0];
    var files = []
    files.push(file)
    console.log("files is here:"+files);
      console.log(data);


    let data = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
       price: ReactDOM.findDOMNode(this.refs.price).value,
      category: ReactDOM.findDOMNode(this.refs.category).value,
      subCategory: ReactDOM.findDOMNode(this.refs.subCategory).value,
      color: ReactDOM.findDOMNode(this.refs.color).value,
      size: ReactDOM.findDOMNode(this.refs.size).value,
      quantity: ReactDOM.findDOMNode(this.refs.quantity).value,
      suppliedBy: ReactDOM.findDOMNode(this.refs.supplyBy).value,
      purchasePrice: ReactDOM.findDOMNode(this.refs.purchasePrice).value,
      sellingPrice: ReactDOM.findDOMNode(this.refs.sellingPrice).value,
      commission: ReactDOM.findDOMNode(this.refs.commission).value
    };

    console.log(data);




    if(file){
      Cloudinary.upload(files, function(err, res) {
                  console.log("Upload Error: " + err);
                  console.log(res);
                  data['filePath'] = res.secure_url;

                  Meteor.call("product.insert",data,function(error,result){
                    if(error){
                      console.log("error", error);
                      window.alert(error.message)
                    }
                    if(result){
                      console.log("Success");
                      console.log(result);
                        FlowRouter.go("/");
                   }
                 }.bind(this));



              }.bind(this));
    }

    else{

      data['filePath'] = "/images/upload.jpg";

      //
      Meteor.call("product.insert",data,(error)=>{
        if(error)window.alert("Error.");
        else{
          console.log("Success");
          FlowRouter.go("/");

        }
      });

    }






  }

  uploadPic(){
    console.log("Upload");
     var t=document.getElementById("fileUpload");
    // console.log(t);
    t.click();

  }

  render() {
    return (<div className="ui container" style={{
        marginTop: '40px'
      }}>

      <div className="ui segment" style={{
          padding: "50px"
        }}>
        <form className="ui form">
          <h2 className="ui dividing header">
            Product Info
          </h2>

          <div className="ui grid">

            <div className="ui twelve wide column" style={{
                paddingLeft: "60px"
              }}>

              <div className="fields">

                <div className="field">
                  <label>Name</label>
                  <input type="text" ref="name" placeholder="Name"></input>
                </div>

                <div className="field">
                  <label>Price</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="price" placeholder="Price"></input>
                    <div className="ui label" style={{
                        background: "grey",
                        color: "white"
                      }}>
                      bdt
                    </div>
                  </div>
                </div>

              </div>

              <div className="fields">

                <div className="field">
                  <label>Category</label>
                  <input type="text" ref="category" placeholder="Category"></input>
                </div>

                <div className="field">
                  <label>Sub Category</label>
                  <input type="text" ref="subCategory" placeholder="Sub Category"></input>
                </div>

              </div>

              <div className="fields">

                <div className="field">
                  <label>Color</label>
                  <input type="text" ref="color" placeholder="Color"></input>
                </div>

                <div className="field">
                  <label>Size</label>
                  <input type="text" ref="size" placeholder="Size"></input>
                </div>

                <div className="field">
                  <label>Quantity</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="quantity" placeholder="Quantity"></input>
                    <div className="ui label" style={{
                        background: "grey",
                        color: "white"
                      }}>
                      unit
                    </div>
                  </div>
                </div>

              </div>
              <div className="field">
                <label>Supplied By</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input type="text" ref="supplyBy" placeholder="Supplied By"></input>
                  </div>
                </div>
              </div>

              <div className="fields">

                <div className="field">
                  <label>Purchase Price</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="purchasePrice" placeholder="Purchase Price"></input>
                    <div className="ui label" style={{
                        background: "grey",
                        color: "white"
                      }}>
                      bdt
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Selling Price</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="sellingPrice" placeholder="Selling Price"></input>
                    <div className="ui label" style={{
                        background: "grey",
                        color: "white"
                      }}>
                      bdt
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label>Commission</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="commission" placeholder="Commission"></input>
                    <div className="ui label" style={{
                        background: "grey",
                        color: "white"
                      }}>
                      %
                    </div>
                  </div>                </div>

              </div>
            </div>
            <div className="ui four wide column" style={{
                textAlign: "center",
                padding: "40px"
              }}>

              <img className="ui medium image" onClick={this.uploadPic.bind(this)} src={this.state.pic} onMouseOver={this.changePic.bind(this)} onMouseLeave={this.resetPic.bind(this)} alt="" style={{
                  width: "150px",
                  height: "200px"
                }}></img>

                <input type="file" id="fileUpload" style={{display:"none"}}/>
            </div>
          </div>

        </form>
        <div style={{
            paddingLeft: "40%",
            marginTop:"40px"
          }}>
          <div className="ui basic grey big button" onClick={this.handleSubmit.bind(this)}>Submit</div>
        </div>
      </div>
    </div>)
  }
}
