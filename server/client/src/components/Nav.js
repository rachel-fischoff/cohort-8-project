import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";
import * as actions from '../actions';
import 'font-awesome/css/font-awesome.min.css';

const Nav = ({ authenticated, email, signout }) => {
  const handleSignOutClick = () => {
    signout();
  };
  

  const renderLinks = () => {
  
      return (
        <React.Fragment>
          <li>{email}</li>
          <li><a href="#" onClick={handleSignOutClick}><Link to="/signin">Sign Out</Link></a></li>
        </React.Fragment>
      );


    }
  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/" >
        <h1 className="h3">HomeBase</h1>
        </NavLink>
      </div>
    
      <NavUl>
        {renderLinks()}
      </NavUl>
    </NavContainer>
  );
};

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    email: state.auth.email
  };
}

export default connect(mapStateToProps, actions)(Nav);

const NavContainer = styled.div`

  position: fixed;
  z-index: 999;
  background: #f6f2ef;
  color: #283c46
  margin: 0;
  width: 100%;
  height: auto;
  #logo {
    position: relative;
    float: left;
    width: 150px;
    height: auto;
  }
  a {
    color: #283c46;
  }
  width: 100%;
  margin:auto;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  list-style: none;
  li:first-child {
    float: left;
  }
  li {
    margin-left: 0.8em;
    padding: 0.5em;
  }
  li a {
    color: black;
  }
`;