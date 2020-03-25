import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import Badge from 'react-bootstrap/Badge'
import './pop.css'

const PopoverPage = () => {
    
    const createdGroupName = '';
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('click')
        
        console.log('created group name: ', createdGroupName)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        console.log('clicked cancel', e)
        
       
    }

  return (
    <MDBContainer>
      <div  >

        <MDBPopover id="qwe"
          placement="right"
          popover
          clickable
          id="popper3"
        >
          <MDBBtn><button id="but-pop" className="btn btn-success new-button" data-toggle="popover"
              >+ New</button></MDBBtn>
          
            
            <MDBPopoverBody>
              <form  onSubmit={handleSubmit}>
              <input type="newName" id="newGroupN"  />
                  <div>
                  <button className="btn-success" type="onSubmit" >Save</button> &nbsp;
                  <button className="btn-danger" type="onSubmit" onClick={handleCancel}>Cancel</button>
                  </div>
              </form>
            </MDBPopoverBody>
          
        </MDBPopover>

        
      </div>
    </MDBContainer>
  );
}

export default PopoverPage;