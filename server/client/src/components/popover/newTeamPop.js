import React from "react";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'



class PopoverPage extends React.Component {
  
  //constructs a new state for the Team 
  constructor(props) {
      super(props)

  
      this.state = {
          name: '',
          type:'',
          description: '',
          isVisible: false
      }
      //binds the functions
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCancel = this.handleCancel.bind(this)
      this.setVisibility = this.setVisibility.bind(this) 
      this.setVisible = this.setVisible.bind(this)
  }
  //called when user hits submit
  handleSubmit(event) {
    console.log(this.state, 'handle submit is working') 
    const newTeam= {}
    newTeam.group_name = this.state.name
    newTeam.group_type = 'team'
    // newTeam.group_description = this.state.description
    newTeam.date_created = new Date ()
    newTeam.todos = []
    newTeam.comments = []
    newTeam.people = []

    this.props.createNewGroup (newTeam)
    this.setVisibility()
    this.refreshPage()
  }

  refreshPage =() => {
    window.location.reload(true);
  }

  setVisibility = () => {
    console.log('CLICK')
    this.setState({isVisible: false})
  }

  setVisible = () => {
    console.log('CLICK')
    this.setState({isVisible: true})
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({name: ''})
     }

  render() {
      return (
        <MDBContainer>
             <div  >
        
              <MDBPopover 
                placement="right"
                isVisible={this.state.isVisible}
                popover
                clickable
                id="popper3"
              >
                <MDBBtn><button id="but-pop" className="btn btn-success new-button" data-toggle="popover" onClick={this.setVisible }
                    >+ New</button></MDBBtn>
                
                  
                  <MDBPopoverBody>
                    <form  >
                    <input type="newName" id="newGroupN"
                    onChange={event => this.setState({name: event.target.value})}  />
                        <div>
                        <button className="btn-success" type="button" onClick={this.handleSubmit} >Save</button> &nbsp;
                        <button className="btn-danger" type="button" onClick={this.setVisibility }>Cancel</button>
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
)(PopoverPage);

