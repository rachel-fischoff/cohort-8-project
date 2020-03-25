  import React, { Component, Fragment, useState } from 'react';
  import Modal from 'react-bootstrap/Modal'
  import './modal.css';
  
  function SingleToDoModal() {
      const [show, setShow] = useState(false);
    
      return (
        <>
          <h5 variant="primary" onClick={() => setShow(true)}>
           Single To-Do Header
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
              <p>
                This is ONE single lonely To-DO
              </p>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  
    export default SingleToDoModal;