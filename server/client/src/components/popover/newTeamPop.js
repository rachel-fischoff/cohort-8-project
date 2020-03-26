import React from "react";
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'



class PopoverPage extends React.Component {
  
  //constructs a new state for the List 
  constructor(props) {
      super(props)

      
      this.state = {
          name: '',
          description: '',
      }
      //binds the functions
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  //called when user hits submit
  handleSubmit() {
    
  }

  render() {
      return (
        <MDBContainer>
             <div  >
        
              <MDBPopover 
                placement="right"
                popover
                clickable
                id="popper3"
              >
                <MDBBtn><button id="but-pop" className="btn btn-success new-button" data-toggle="popover"
                    >+ New</button></MDBBtn>
                
                  
                  <MDBPopoverBody>
                    <form  >
                    <input type="newName" id="newGroupN"
                    onChange={event => this.setState({name: event.target.value})}  />
                        <div>
                        <button className="btn-success" type="onSubmit" onClick={this.handleSubmit} >Save</button> &nbsp;
                        <button className="btn-danger" type="onSubmit" >Cancel</button>
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

