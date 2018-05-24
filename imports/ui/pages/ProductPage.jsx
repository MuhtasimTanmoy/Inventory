import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/Layout.jsx';
import ProductPageContent from '/imports/ui/components/ProductPageContent.jsx';

export default class ProductPage extends Component{

  render(){
    console.log("ItemPage being rendered");

      return(
        <Layout content={<ProductPageContent />}/>
      );
  }
}
