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
  
  constructor(props) {
    super(props);
    //sets state to empty 
    this.state = {term: ''}


    this.onFormSubmit = this.onFormSubmit.bind(this);
  }



  //when you submit your form you fetch groups based on the term submitted
  onFormSubmit(event) {
    event.preventDefault();
    
    let term = this.state.term


    this.props.fetchGroupSearch(term);
    this.props.fetchUserSearch(term);


  }

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
              <input placeholder='Search' onChange={event => this.setState({term: event.target.value})} value={this.state.term} />
                  <div>
                  <Link to='/search'><button className="btn-success" type="onSubmit" onClick={this.onFormSubmit}>Search</button> </Link>&nbsp;
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
