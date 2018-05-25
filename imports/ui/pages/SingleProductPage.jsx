import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/Layout.jsx';
import SingleProductPageContent from '/imports/ui/components/SingleProductPageContent.jsx';

export default class ItemPage extends Component{

  render(){
    console.log("ItemPage being rendered");

      return(
        <Layout content={<SingleProductPageContent id={this.props.id}/>}/>
      );
  }
}
