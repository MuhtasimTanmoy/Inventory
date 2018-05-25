import React, { Component } from "react";
import {withTracker} from 'meteor/react-meteor-data';
import {Product} from '/imports/api/product/Product.js';
import ReactDOM from 'react-dom';




class ItemPageContent extends Component {

  constructor(){
    super();
    this.state={
      editable:false
    };
  }

  handleSubmit(){
    console.log("Update");


    var file = $("input[type=file]").get(0).files[0];
    var files = []
    files.push(file)
    console.log("files is here:"+files);

    console.log(this.props.product);



    let data = {
      id: this.props.product._id,
      filePath:this.props.product.dataPath,
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
      console.log("File again input here");
      Cloudinary.upload(files, function(err, res) {
                  console.log("Upload Error: " + err);
                  console.log(res);
                  data['filePath'] = res.secure_url;

                  Meteor.call("product.update",data,function(error,result){
                    if(error){
                      console.log("error", error);
                      window.alert(error.message)
                    }
                    if(result){
                      console.log("Success");
                      console.log(result);
                        FlowRouter.go("/product/"+data.id);
                   }
                 }.bind(this));



              }.bind(this));
    }

    else{

      //
      Meteor.call("product.update",data,(error)=>{
        if(error)window.alert("Error.");
        else{
          console.log("Success");
          FlowRouter.go("/product/"+data.id);

        }
      });

    }


    this.setState({
      editable:false
    })







  }
  changePic() {

    this.setState({pic: '/images/upload.jpg'});

  }

  resetPic() {
    this.setState({pic: '/images/placeholder.png'});

  }

    uploadPic(){
      console.log("Upload");
       var t=document.getElementById("fileUpload");
      // console.log(t);
      t.click();

    }

    changeEditState(){
      this.setState({
        editable:true
      })
    }



  renderInfo(){

    let returnIt;
    console.log(this.props.product);

    if(this.props.product){

      data=this.props.product;


      if(!this.state.editable){

      returnIt=<div>


      <div className="ui segment" style={{
          padding: "50px"
        }}>

        <i className="big edit icon"
        style={{position:'absolute',right:'15px',top:'30px',cursor:'pointer'}}
        onClick={this.changeEditState.bind(this)}
        >
        </i>

        <form className="ui form">
          <h2 className="ui dividing header">
            Product Info
          </h2>

          <div className="ui grid">

            <div className="ui twelve wide column" style={{
                paddingLeft: "60px"
              }}>

              <div className="fields">

                <div className="field" style={{width:"120px"}}>
                  <label>Name</label>
                  {data.name}

                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Price</label>
                  <div className="ui right labeled input">
                      {data.price} bdt

                  </div>
                </div>

              </div>

              <div className="fields">

                <div className="field" style={{width:"120px"}}>
                  <label>Category</label>
                  {data.category}
                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Sub Category</label>
                  {data.subCategory}
                </div>

              </div>

              <div className="fields">

                <div className="field" style={{width:"120px"}}>
                  <label>Color</label>
                  {data.color}
                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Size</label>
{data.size}                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Quantity</label>
                  <div className="ui right labeled input">
                  {data.quantity} unit

                  </div>
                </div>

              </div>
              <div className="field" style={{width:"120px"}}>
                <label>Supplied By</label>
                <div className="fields">
                  <div className="twelve wide field">
                  {data.suppliedBy}
                  </div>
                </div>
              </div>

              <div className="fields">

                <div className="field" style={{width:"120px"}}>
                  <label>Purchase Price</label>
                  <div className="ui right labeled input">
                  {data.purchasePrice} bdt

                  </div>
                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Selling Price</label>
                  <div className="ui right labeled input">
                  {data.sellingPrice} bdt

                  </div>
                </div>

                <div className="field" style={{width:"120px"}}>
                  <label>Commission</label>
                  <div className="ui right labeled input">
                  {data.commission} %

                  </div>                </div>

              </div>
            </div>
            <div className="ui four wide column" style={{
                textAlign: "center",
                padding: "40px"
              }}>

              <img className="ui medium image" onClick={this.uploadPic.bind(this)} src={data.dataPath} onMouseOver={this.changePic.bind(this)} onMouseLeave={this.resetPic.bind(this)} alt="" style={{
                  width: "150px",
                  height: "200px"
                }}></img>

                <input type="file" id="fileUpload" style={{display:"none"}}/>
            </div>
          </div>

        </form>
      </div>

      </div>
    }
    else{


      returnIt=<div>


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
                  <input type="text" ref="name" placeholder="Name" defaultValue={data.name}></input>
                </div>

                <div className="field">
                  <label>Price</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="price" placeholder="Price" defaultValue={data.price}></input>
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
                  <input type="text" ref="category" placeholder="Category" defaultValue={data.category}></input>
                </div>

                <div className="field">
                  <label>Sub Category</label>
                  <input type="text" ref="subCategory" placeholder="Sub Category" defaultValue={data.subCategory}></input>
                </div>

              </div>

              <div className="fields">

                <div className="field">
                  <label>Color</label>
                  <input type="text" ref="color" placeholder="Color" defaultValue={data.color}></input>
                </div>

                <div className="field">
                  <label>Size</label>
                  <input type="text" ref="size" placeholder="Size" defaultValue={data.size}></input>
                </div>

                <div className="field">
                  <label>Quantity</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="quantity" placeholder="Quantity" defaultValue={data.quantity}></input>
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
                    <input type="text" ref="supplyBy" placeholder="Supplied By" defaultValue={data.suppliedBy}></input>
                  </div>
                </div>
              </div>

              <div className="fields">

                <div className="field">
                  <label>Purchase Price</label>
                  <div className="ui right labeled input">
                    <input type="number" ref="purchasePrice" placeholder="Purchase Price" defaultValue={data.purchasePrice}></input>
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
                    <input type="number" ref="sellingPrice" placeholder="Selling Price" defaultValue={data.sellingPrice}></input>
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
                    <input type="number" ref="commission" placeholder="Commission" defaultValue={data.commission}></input>
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

              <img className="ui medium image" onClick={this.uploadPic.bind(this)} src={data.dataPath} onMouseOver={this.changePic.bind(this)} onMouseLeave={this.resetPic.bind(this)} alt="" style={{
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

      </div>

    }
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


            <div className="ui container"  style={{paddingTop:"50px"}}>

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
