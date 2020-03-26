import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SingleToDoModal from './singleToDoModal';
import { Button, Accordion, Card } from 'react-bootstrap';
import './modal.css';
import NewList from '../NewList'
import TodoList from '../TodoList/TodoList'

function ToDoModal({groupId}) {
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

              <Accordion>
              
                <Card.Header>
                  <Accordion.Toggle as={Button} className="btn-success" variant="link" eventKey="1">
                    + New List
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <NewList groupId={groupId}/>
                  </Card.Body>
                </Accordion.Collapse>
            
            </Accordion>
            </Modal.Title>
          </Modal.Header>
          <TodoList />
          <Modal.Body>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  
  
  export default ToDoModal;