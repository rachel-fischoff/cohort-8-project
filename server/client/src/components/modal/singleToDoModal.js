  import React, { Component, Fragment, useState } from 'react';
  import * as actions from '../../actions'
  import Modal from 'react-bootstrap/Modal'
  import SingleTodoList from '../SingleToDoList'
  import './modal.css';
  
  
  function SingleToDoModal() {

      const [show, setShow] = useState(false);
    
      return (
        <>
          <h5 variant="primary" onClick={() => setShow(true)}>
          <SingleTodoList />
          </h5>
    
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
            </Modal.Body>
          </Modal>
        </>
      );
    }
  
    export default SingleToDoModal;