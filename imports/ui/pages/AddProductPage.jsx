import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/Layout.jsx';
import AddProductPageContent from '/imports/ui/components/AddProductPageContent.jsx';

export default class ProductPage extends Component{

  render(){
    console.log("ItemPage being rendered");

      return(
        <Layout content={<AddProductPageContent />}/>
      );
  }
}
