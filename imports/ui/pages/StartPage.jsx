import React, { Component } from 'react';

import Layout from '/imports/ui/layouts/FullLayout.jsx';
import HomePageContent from '/imports/ui/components/StartPageContent.jsx';

export default class HomePage extends Component{

  render(){
    console.log("SamplePage being rendered");

      return(
        <Layout content={<HomePageContent/>}/>
      );
  }
}
