import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';
import Backdrop from '../components/backdrop/backdrop';
import ModalWindow from '../components/modal/modal';




class Groups extends Component {  

    state = {
    viewingToDos: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  };

  viewToDoList = () => {
    this.setState({ viewingToDos: true });
  };

  modalConfirmHandler = () => {
    this.setState({ viewingToDos: false });
  }
    

    render() {
  
        return (
    <div>
        <div>
           <h1>test</h1>
            <h1>NAV bar is covering top of the page</h1>
            <Link to="/calendar"><button>
            Calendar 
            </button></Link>
        </div>
            <React.Fragment>
            <ModalWindow><p>hello!</p></ModalWindow>
    
        
        
        </React.Fragment>
</div>
);
}
}


function mapStateToProps () {
    return {  }
  };
  
  export default Groups;

