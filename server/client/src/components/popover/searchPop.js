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
              <input type="newName" id="newGroupN" onChange={event => this.setState({term: event.target.value})}  />
                  <div>
                  <button className="btn-success" type="onSubmit" onClick={this.onFormSubmit}>Search</button> &nbsp;
                  </div>
              </form>
            </MDBPopoverBody>
          
        </MDBPopover>

        
      </div>
    </MDBContainer>
  );
}
}
function mapStateToProps(state) {
  return state;
  }
  
  export default connect(mapStateToProps, actions)(SearchPop);
