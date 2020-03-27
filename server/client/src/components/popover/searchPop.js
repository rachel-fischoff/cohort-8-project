import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal,  ModalBody, ModalFooter, NavLink } from 'reactstrap';

import ReactCalendar from '../calendar/calendar';

class SearchPop extends React.Component {



render() {
  return (

 
    <MDBContainer>
      <div  className="m-0" id="searchP">

        <MDBPopover
          placement="right"
          popover
          clickable
          id="popper2"
        >
          <MDBBtn><NavLink to="/home"><FontAwesomeIcon icon={faSearch}/> Find</NavLink></MDBBtn>
          
            
            <MDBPopoverBody>
              <form >
              <input placeholder='Search' onChange={event => this.props.fetchTermSearch(event.target.value)} />
                  <div>
                  <button className="btn-success" ><Link to ='/search' >Search</Link></button> &nbsp;
                  </div>
              </form>
            </MDBPopoverBody>
          
        </MDBPopover>

        
      </div>
    </MDBContainer>
  );
}
}

  
  export default connect(null, actions)(SearchPop);
