import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import SingleToDoModal from './singleToDoModal'
import './modal.css';

function ToDoModal() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <h5 variant="primary" onClick={() => setShow(true)}>
         To-Do's
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
              To-Do's header ToDo Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SingleToDoModal></SingleToDoModal>
            <p>
              To-Do  list
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  
  
  export default ToDoModal;