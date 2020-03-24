import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

const Nav = () => {

  const renderLinks = () => {

      return (
        <React.Fragment>
          <li><Link to="/api/logout">Sign Out</Link></li>
          <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i className="fa fa-search"></i>
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search"></input>
          </form>
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


export default Nav;

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

