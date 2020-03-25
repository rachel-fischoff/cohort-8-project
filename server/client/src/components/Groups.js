import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';
import ToDoModal from './modal/toDoModalodal';
import CalendarModal from '../components/modal/calendarModal';
import MessageBoardModal from '../components/modal/messageBoardModal';
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
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className="card-inner">
                    <CalendarModal><p>Calendar</p></CalendarModal>
                    <hr />
                    <div className="card-body">
                    <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-inner">
                    <ToDoModal />
                      <hr />
                    <div className="card-body">
                    <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-inner">
                    <MessageBoardModal></MessageBoardModal>
                    <hr />
                    <div className="card-body">
                    <p className="card-text">It's a broader card with text below as a natural lead-in to extra content. This content is a little longer.</p>
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