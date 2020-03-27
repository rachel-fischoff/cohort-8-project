import React from "react";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal,  ModalBody, ModalFooter, NavLink } from 'reactstrap';

class SearchPop extends React.Component {
  
  //constructs a new state for the Team 
  constructor(props) {
      super(props)

  
      this.state = {
          searchValue: ''
      }
      //binds the functions
      this.handleSubmit = this.handleSubmit.bind(this)
      
  }
  //called when user hits submit
  handleSubmit(event) {

    console.log(this.state, 'handle submit is working') 
    
  }

render() {
  return (
    <MDBContainer>
      <div  className="m-0">

        <MDBPopover
          placement="right"
          popover
          clickable
          id="popper2"
        >
          <MDBBtn><NavLink to="/home"><FontAwesomeIcon icon={faSearch}/> Find</NavLink></MDBBtn>
          
            
            <MDBPopoverBody>
              <form >
              <input type="newName" id="newGroupN" onChange={event => this.setState({name: event.target.value})}  />
                  <div>
                  <button className="btn-success" type="onSubmit" onClick={this.handleSubmit}>Search</button> &nbsp;
                  </div>
              </form>
            </MDBPopoverBody>
          
        </MDBPopover>

        
      </div>
    </MDBContainer>
  );
}
}
export default connect(
  null,
  actions
)(SearchPop);