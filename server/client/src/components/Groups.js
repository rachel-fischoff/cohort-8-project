import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';
import ToDoModal from './modal/toDoModalodal';
import CalendarModal from '../components/modal/calendarModal';
import MessageBoardModal from '../components/modal/messageBoardModal';
import './groups.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Image, Row, Container} from 'react-bootstrap'



class Groups extends Component {  
  constructor(props) {
    super(props)
    //for the modals
    this.state = {
    viewingToDos: false,
    events: [],
    isLoading: false,
    selectedEvent: null
  }

  //binds function to this state
  this.renderPerson = this.renderPerson.bind(this)
};
  //fetches data when loads
  componentDidMount(){
    this.props.fetchGroupDetails(this.props.match.params.groupId)
  
  }

  viewToDoList = () => {
    this.setState({ viewingToDos: true });
  };

  modalConfirmHandler = () => {
    this.setState({ viewingToDos: false });
  }


  renderPerson = (p) => {
      return(
        <Image src = {p.profile_pic_url} roundedCircle fluid width="50px" height='50px'/>
      )
    }


      render() {
  
        return (
          <div className="groups-page">
            <div className="row">
              <br></br>
               <div className="card-groups col-md-10 mx-auto">
               <h1 className="card-title-groups text-center">{this.props.groupName}</h1>
               <Container>
                <Row className="justify-content-md-center">
                  {this.props.people.map(this.renderPerson)}
                </Row>
              </Container>


              <div className="card-body ">
                <div className="row text-center ">

                  <div className="col-md-4 ">
                    <div className="card-inner">
                      <CalendarModal groupId={this.props.match.params.groupId}><p>Calendar</p></CalendarModal>
                      <hr />

                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card-inner">
                      <ToDoModal groupId={this.props.match.params.groupId}/>
                      <hr />
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card-inner">
                      <MessageBoardModal></MessageBoardModal>
                      <hr />
                    <div className="card-body">
                    <p className="card-text">Coming Soon!</p>
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


function mapStateToProps (state) {
    return ({
      people: state.group.people,
      comments: state.group.comments,
      todos: state.group.todos,
      groupName: state.group.group_name,
      groupDescription: state.group.group_description,
      groupId: state.group._id
    })};
  
  export default connect(
    mapStateToProps,
    actions
  )(Groups);
 