import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';
import Backdrop from '../components/backdrop/backdrop';
import ModalWindow from '../components/modal/modal';
import './groups.css';


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
          <div className="groups-page">
            <div className="row">
              <br></br>
               <div className="card-groups col-md-10 mx-auto">
               <h1 className="card-title-groups text-center">Team/Project Name</h1>
               <div className="card-body">
                <div class="row text-center">
                  <div class="col-md-4">
                    <div class="card-inner">
                    <Link to="/calendar"><h5 className="card-title">Calendar</h5></Link>
                    <hr />
                    <div class="card-body">
                    <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-inner">
                    <ModalWindow></ModalWindow>
                      <hr />
                    <div class="card-body">
                    <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card-inner">
                    <Link to="/message-board"><h5 className="card-title">Message Board</h5></Link>
                    <hr />
                    <div class="card-body">
                    <p class="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


function mapStateToProps () {
    return {  }
  };
  
  export default Groups;

