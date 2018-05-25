import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
// import {Item} from '/imports/api/item/Item.js';
//
// import {Picker} from 'meteor/meteorhacks:picker';
//
// Picker.route('/item/:_id', function(params, req, res, next) {
//   var post = Item.findOne(params._id);
//   res.end(post.content);
// });

import HomePage from '/imports/ui/pages/HomePage.jsx';
import RegisterPage from '/imports/ui/pages/RegisterPage';
import TestPage from '/imports/ui/pages/TestPage';
import StartPage from '/imports/ui/pages/StartPage';
import ProfilePage from '/imports/ui/pages/ProfilePage';
import ItemPage from '/imports/ui/pages/ItemPage';
import ProductPage from '/imports/ui/pages/ProductPage';
import AddProductPage from '/imports/ui/pages/AddProductPage';
import SingleProductPage from '/imports/ui/pages/SingleProductPage';









FlowRouter.route('/', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      Meteor.userId() ? mount(HomePage) : mount(StartPage);
      // mount(StartPage);
  }
});

FlowRouter.route('/dashboard', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      Meteor.userId() ? mount(HomePage) : mount(StartPage);
      //mount(HomePage);
  }
});

FlowRouter.route('/help', {
  name: 'Homepage' ,
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(HomePage) : mount(LoginPage);
     mount(TestPage);

  }
});

FlowRouter.route('/register', {
  name: 'RegisterPage',
  action(params, queryParams) {
      console.log("home route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(RegisterPage);
  }
});

FlowRouter.route('/profile', {
  name: 'ProfilePage',
  action(params, queryParams) {
      console.log("profile route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(ProfilePage);
  }
});

FlowRouter.route('/product', {
  name: 'ProductPage',
  action(params, queryParams) {
      console.log("product route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(ProductPage);
  }
});

FlowRouter.route('/addproduct', {
  name: 'AddProductPage',
  action(params, queryParams) {
      console.log("addproduct route is being called...");
      // Meteor.userId() ? mount(Dashboard) : mount(Login);
      mount(AddProductPage);
  }
});




FlowRouter.route("/item/:id", {
  action(params) {
    console.log(params);
    mount(ItemPage, {id:params.id} );
  }
});


FlowRouter.route("/product/:id", {
  action(params) {
    console.log(params);
    mount(SingleProductPage, {id:params.id} );
  }
});
