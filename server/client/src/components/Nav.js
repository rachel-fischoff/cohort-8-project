import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from 'react-redux';
import styled from "styled-components";
import * as actions from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faCommentAlt, faInbox, faChartPie, faSmile, faSearch } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';


const Nav = ({ authenticated, email, signout }) => {
  const handleSignOutClick = () => {
    signout();
  };
  

  const renderLinks = () => {

   //if(authenticated){
      return (
        <React.Fragment>
          <li>{email}</li>
          <li><a href="#" onClick={handleSignOutClick}><Link to="/signin">Sign Out</Link></a></li>
      
          <li><Link to="/"><FontAwesomeIcon icon={faCampground} /> Home</Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faCommentAlt}/> Pings</Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faInbox}/> Hey!</Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faChartPie}/> Activity</Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faSmile}/> My Stuff</Link></li>
          <li><Link to="/"><FontAwesomeIcon icon={faSearch}/> Find</Link></li>
        </React.Fragment>
      ) 
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
  background: #f6f2ef;
  color: #283c46
  margin: 0;
  width: 100%;
  height: auto;
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
`;