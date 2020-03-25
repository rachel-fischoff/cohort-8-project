import {React, useState}  from 'react';
import Modal from 'react-bootstrap/Modal'
import './modal.css';

function TasksModal() {
    const [show, setShow] = useState(false);
  
    return (
      <>
        <h5 variant="primary" onClick={() => setShow(true)}>
         Tasks
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
              Tasks header
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Im overriding default bootstrap size of the Modal window. Normally it will look more like a card. Check out components/modal/modal.css if you need to do any changes.
              right now view height is on 85% and width on 90%
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  export default TasksModal;