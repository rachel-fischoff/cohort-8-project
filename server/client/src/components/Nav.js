import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faCommentAlt, faInbox, faChartPie, faSmile, faSearch } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';

class Nav extends Component { 


  handleLogoutClick = () => {
    // Logout using Google passport api
    // Set authenticated state to false in the HomePage

    window.open('http://localhost:5000/logout', "_self");
  };

  renderLinks = () => {

      return (
        <React.Fragment>
          <li onClick={this.handleLogoutClick}>Sign Out</li>
          <li><Link to="/home"><FontAwesomeIcon icon={faCampground} /> Home</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faCommentAlt}/> Pings</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faInbox}/> Hey!</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faChartPie}/> Activity</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faSmile}/> My Stuff</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faSearch}/> Find</Link></li>

        </React.Fragment>

      );
  }

  render() {
    //User logged in render links 
  if(this.props.auth.user._id  || this.props.auth.group.people.length > 0){
  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/home" >
        <h1 className="h3">HomeBase</h1>
        
        </NavLink>
        
      </div>
    
      <NavUl>
        {this.renderLinks()}
      </NavUl>
    </NavContainer>
  )
  }

  return (
    <NavContainer>
      <div id="logo">
        <h1 className="h3">HomeBase</h1>
      </div>
    </NavContainer>
  )
};
}

function mapStateToProps(state) {
console.log(state, "nav")
  return ({
    auth: state
  })

}

export default connect(
  mapStateToProps
)(Nav);



const NavContainer = styled.div`
  position: fixed;
  background-color: #f6f2ef;
  display: block;
  color: #283c46
  margin: 0;
  width: 100%;
  height: auto;
  z-index: 6;
  #logo {
    float: left;
    width: 50px;
    height: auto;
  }
  a {
    color: #283c46;
  }
  width: 100%;
  margin:auto;
`;

const NavUl = styled.ul`
  background-color: rgba(246,242,239,0.9);
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  list-style: none;
  li:first-child {
    float: right;
  }
  li {
    padding: 10px;
  }
  li a {
    color: #283c46;
  }
  }
`;