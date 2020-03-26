import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import './modal.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import TodoForm from '../TodoForm';
  
  function SingleToDoModal() {
      //state for modal
      const [show, setShow] = useState(false);
      
      //when a sing todo list is clicked on it changes the state to see modal
      //also event value to know which one was clicked
      //did not write event.value info without data
      const clickOnATodoList = function(e){
          setShow(true)
      }

      //loop through todos
      const renderSingleTodoLists = function(){
        return(
          <h5 variant="primary" value='ID' onClick={clickOnATodoList}>
          </h5>
        )
      }

      //need to add map function when data is avaliable where render function is
      return (
        <>
          <Modal className="modal-background-color"
              backdrop="true"
              size="xl"
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton >
              <Modal.Title id="modal-title"  >
                To-Do's header
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              <TodoForm />
              </p>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  
    function mapStateToProps(state) {
      return {state};
    }
  
    export default connect(
      mapStateToProps,
      actions
    )(SingleToDoModal);