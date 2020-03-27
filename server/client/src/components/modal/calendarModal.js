import React, { Component, Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import ReactCalendar from '../calendar/calendar'
import './modal.css';
import SingleCalendar from '../calendar/singleCalendar'

function CalendarModal({groupId, dates}) {
    const [show, setShow] = useState(false);

    return (
      <div className="row">
          <div className="col">
        <h5 variant="primary" onClick={() => setShow(true)}>
         Calendar
        </h5>
        <ReactCalendar groupId={groupId} />
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
          <SingleCalendar/>
          <ReactCalendar groupId={groupId} />
          </Modal.Body>
        </Modal>
        </div>
      </div>
    );
  }
  
  
  
  export default CalendarModal;