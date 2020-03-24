import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';
import Backdrop from '../components/backdrop/backdrop';
import Modal from '../components/modal/modal';



class Groups extends Component {  

    

    render() {
  
      return (
          
<div>
            <Backdrop />
          <h1>hi</h1>
          <h1>hi</h1>
            <Modal>
                
            <p>This is MODAL</p>
            <p>This is MODAL</p>
            <p>This is MODAL</p>
            <p>This is MODAL</p>
            </Modal>
    </div>
        
      
      );
}
}


function mapStateToProps () {
    return {  }
  };
  
  export default Groups;

//   return (
//     <div>
//         <div>
//            <h1>test</h1>
//       <h1>NAV bar is covering top of the page</h1>
//      <Link to="/calendar"><button>
//        Calendar 
//      </button></Link>
//      </div>
//   <React.Fragment>
//   {(this.state.viewingToDos ) && <Backdrop />}
//   {this.state.viewingToDos && (
//     <Modal
//       title="To Do"
//       canCancel
//       onCancel={this.modalCancelHandler}
//       >
//           <div className="modal__header">
//      <h1 className="modal__header">NAV bar is covering top of the page</h1>
//      <h1>NAV bar is covering top of the page</h1>
//      <h1>NAV bar is covering top of the page</h1>
//      <h1>NAV bar is covering top of the page</h1>
//      <p>A core feature of basecamp is the ability to hold discussion of items in your system. So at the bottom of to-dos, we want you to build out a commenting feature. Each comment should have a date created value and the person who made the comment. Basecamp has fully integrated HTML in the comments, for us, we'll just have text (unless you want to use a markdown library in react like https://github.com/rexxars/react-markdown).

//       </p>
//       </div>
//     </Modal>
//   )}
//   {(
//     <div className="events-control">
//       <p>View To-Do's!</p>
//       <button className="btn" onClick={this.viewToDoList}>
//         To-Do's
//       </button>
//     </div>
//   )}
  
  
// </React.Fragment>
// </div>
// );


// state = {
//     viewingToDos: false,
//     events: [],
//     isLoading: false,
//     selectedEvent: null
//   };

//   viewToDoList = () => {
//     this.setState({ viewingToDos: true });
//   };

//   modalConfirmHandler = () => {
//     this.setState({ viewingToDos: false });
//   }