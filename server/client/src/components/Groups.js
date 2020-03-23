import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';



class Groups extends Component {  

    render() {
  
      return (
        <div>
            <h1>test</h1>
            <h1>NAV bar is covering top of the page</h1>
          <Link to="/calendar"><button>
            Calendar 
          </button>
          </Link>
        </div>
      );
}
}


function mapStateToProps () {
    return {  }
  };
  
  export default Groups;
