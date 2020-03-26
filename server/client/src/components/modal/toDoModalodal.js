import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import SingleToDoModal from './singleToDoModal';
import { Button, Accordion, Card } from 'react-bootstrap';
import './modal.css';
import NewList from '../NewList'
import TodoList from '../TodoList/TodoList'
import PieChartTodo from '../PieChartTodo'

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
            <Modal.Title id="todo-title" className="text-center">
               <h2>To-Do's</h2>
               <span><PieChartTodo /></span>
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <Accordion>
                <Accordion.Toggle as={Button} className="btn-success accordian-btn" variant="link" eventKey="1">
                    + New List
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <NewList />
                  </Card.Body>
                  </Accordion.Collapse>
                </Accordion>   
                <br></br>
              <TodoList />
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  
  
  export default ToDoModal;