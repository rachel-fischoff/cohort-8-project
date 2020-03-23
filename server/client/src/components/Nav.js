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
    if (authenticated) {
      return (
        <React.Fragment>
          <li>{email}</li>
          <li><a href="#" onClick={handleSignOutClick}>Sign Out</a></li>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i className="fa fa-search"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search"></input>
          </form>
        </React.Fragment>
      );
    }
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
  padding: 1.5em;
  #logo {
    position: relative;
    float: left;
    width: 150px;
    height: auto;
  }
  a {
    color: #283c46;
  }
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

