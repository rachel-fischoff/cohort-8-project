import React from "react";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'

class ProjectPop extends React.Component {
  
  //constructs a new state for the Team 
  constructor(props) {
      super(props)

  
      this.state = {
          name: '',
          type:'',
          description: '',
      }
      //binds the functions
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCancel = this.handleCancel.bind(this)
  }
  //called when user hits submit
  handleSubmit(event) {

    console.log(this.state, 'handle submit is working') 
    const newProject= {}
    newProject.group_name = this.state.name
    newProject.group_type = 'project'
    // newProject.group_description = this.state.description
    newProject.date_created = new Date ()
    newProject.todos = []
    newProject.comments = []
    newProject.people = []

    this.props.createNewGroup (newProject)
  }


    handleCancel = (e) => {
        e.preventDefault();
        this.setState({name: ''})
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
          <MDBBtn><button id="but-pop" className="btn btn-success new-button" data-toggle="popover"
              >+ New</button></MDBBtn>
          
            
            <MDBPopoverBody>
              <form >
              <input type="newName" id="newGroupN" onChange={event => this.setState({name: event.target.value})}  />
                  <div>
                  <button className="btn-success" type="onSubmit" onClick={this.handleSubmit}>Save</button> &nbsp;
                  <button className="btn-danger" type="onSubmit" onClick={this.handleCancel}>Cancel</button>
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
)(ProjectPop);