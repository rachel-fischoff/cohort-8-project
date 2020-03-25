import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ReactCalendar from '../calendar/calendar'
import './modal.css';

function CalendarModal() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <h5 variant="primary" onClick={() => setShow(true)}>
         Calendar
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
              Calendar
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ReactCalendar />
            <p>
              Calendar feature
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  
  
  export default CalendarModal;