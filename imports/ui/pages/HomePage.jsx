import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/Layout.jsx';
import HomePageContent from '/imports/ui/components/HomePageContent.jsx';

export default class HomePage extends Component{


  renderContent(){
    
  }

  render(){
    console.log("SamplePage being rendered");

      return(
        <Layout content={<HomePageContent/>}/>
      );
  }
}
