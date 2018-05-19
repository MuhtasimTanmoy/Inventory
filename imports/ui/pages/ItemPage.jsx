import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/Layout.jsx';
import ItemPageContent from '/imports/ui/components/ItemPageContent.jsx';

export default class ItemPage extends Component{

  render(){
    console.log("ItemPage being rendered");

      return(
        <Layout content={<ItemPageContent id={this.props.id}/>}/>
      );
  }
}
