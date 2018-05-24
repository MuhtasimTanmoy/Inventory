import React,{Component} from "react";
import {withTracker} from 'meteor/react-meteor-data';
import Login from '/imports/ui/components/auth/Login.jsx';
import { FlowRouter } from 'meteor/kadira:flow-router';



class Header extends Component {

  componentDidMount() {
	    $('.ui.basic.button')
	            .popup({
	                inline: true
	            })
	            ;
	    $('.ui.label')
	            .popup({
	                inline: true
	            })
	            ;

              $('.ui.dropdown')
                      .dropdown()
                      ;
	}
  constructor() {
    super();
  }
  logOut(){
        Meteor.logout(function(){
          FlowRouter.go('/');
        });


        $("#goHome").click();

    }
  renderLogin(){
      $('.ui.page.dimmer')
      .dimmer('show');

    }




    loggedInDiv(){


      let loggedIn=<div className="ui simple dropdown item">
        <i className="user icon"></i> {this.props.user.username} <i className="dropdown icon"></i>
        <div className="menu">
          <a className="item" href="/profile">My profile</a>
          <a className="item">Feedback</a>
          <a className="item" onClick={this.logOut}>Log out</a>
        </div>
      </div>;
      return loggedIn;
    }



    notLoggedInDiv(){
      let notLoggedIn= <a className="item" onClick={this.renderLogin}>Login</a>
      return notLoggedIn;

    }
  render(){


    return (

      <div className="ui large top fixed menu" >

        <div className="ui page dimmer">
          <div className="content">
            <div className="center">
                <Login/>
            </div>
          </div>
        </div>



          <div className="left menu">

            <a href="/" className="item"><h2>Inventory</h2></a>


          </div>

  				<div className="right menu">


            <a className="item" href="/help"><h3>Help</h3></a>

            {this.props.user?this.loggedInDiv():this.notLoggedInDiv()}


  					<span className="item"></span>
  				</div>
  			</div>
    )
  }
}

export default withTracker(  (props) => {

    return{

        user: Meteor.user(),
    };
})(Header);
