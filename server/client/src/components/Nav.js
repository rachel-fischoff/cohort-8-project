import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";
import * as actions from '../actions';

const Nav = ({ authenticated, email, signout }) => {
  const handleSignOutClick = () => {
    signout();
  };

  return (
    <NavContainer>
      <div id="logo">
      <NavUl>
        <NavLink to="/">
          Home
        </NavLink>
        <li>Pings</li>
        <li>Hey!</li>
        <li>Activity</li>
        <li>My Stuff</li>
        <li>Find</li>
        <li><a href="#" onClick={handleSignOutClick}>Sign Out</a></li>
      </NavUl>
      </div>
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
  width: 50%;
  margin:auto;
`;

const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
`;