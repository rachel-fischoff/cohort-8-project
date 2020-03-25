import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import * as actions from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCampground, faCommentAlt, faInbox, faChartPie, faSmile, faSearch } from "@fortawesome/free-solid-svg-icons";
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {

  const handleLogoutClick = () => {
    // Logout using Google passport api
    // Set authenticated state to false in the HomePage
    window.open('http://localhost:5000/logout', "_self");
  };

  const renderLinks = () => {

      return (
        <React.Fragment>
          <li onClick={handleLogoutClick}>Sign Out</li>
          <li><Link to="/home"><FontAwesomeIcon icon={faCampground} /> Home</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faCommentAlt}/> Pings</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faInbox}/> Hey!</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faChartPie}/> Activity</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faSmile}/> My Stuff</Link></li>
          <li><Link to="/home"><FontAwesomeIcon icon={faSearch}/> Find</Link></li>

        </React.Fragment>

      );
  }


  return (
    <NavContainer>
      <div id="logo">
        <NavLink to="/home" >
        <h1 className="h3">HomeBase</h1>
        
        </NavLink>
        
      </div>
    
      <NavUl>
        {renderLinks()}
      </NavUl>
    </NavContainer>
  );
};


export default Nav;

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