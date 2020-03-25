import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from '../actions';
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css';
import GoogleLoginButton from './GoogleLoginButton';

class LandingPage extends Component {  



    renderPage = () => {
        console.log('props auth from landing page: ', this.props.auth)
        // switch (this.props.auth) {
        //   case null:
        //     return;
          // case true:
            return (
              <React.Fragment>
                <div className="home-page">
                <div className="projects-row">
                    <div className="col-md-8-offset-3 text-center">
                        <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
                        <div className="card-body">
                            <GoogleLoginButton />
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
              </React.Fragment>
            )
          // default:
          //   return (
          //       //redirect to Home Page
          //       <Redirect to="/auth" component={Home}/>
          //   );
        // }
    }

    render() {
        return(
            <div>{this.renderPage()}</div>
        )
    }
}

function mapStateToProps({auth}) {
    return { auth };
}

export default connect(mapStateToProps, actions)(LandingPage);