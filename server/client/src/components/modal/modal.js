import React from 'react';

import './modal.css';

const modal = props => (
    <div className="modal">
      <header className="modal__header">
          
        <h1>Placeholder text for MODAL</h1>
        <h1>Placeholder text for MODAL</h1>
        <h1>Placeholder text for MODAL</h1>
      </header>
      <section className="modal__content">placeholder text for modal section</section>
      <section className="modal__actions">
      
          <button className="btn" >
            Cancel
          </button>
          <button className="btn" >
            Confirm
          </button>
     
        
      </section>
    </div>
  );
  
  export default modal;