import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SingleToDoModal from './singleToDoModal';
import { Button, Accordion, Card } from 'react-bootstrap';
import './modal.css';
import NewList from '../NewList'

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
          aria-labelledby="example-custom-modal-styling-title" >
          <Modal.Header closeButton >
            <Modal.Title id="modal-title" className="col" >
              To-Do's header

              <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    New List
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <NewList />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>


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