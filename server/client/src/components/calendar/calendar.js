import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import SingleCalendar from './singleCalendar'
import './calendar.css';
import { Button, Modal,  ModalBody, ModalFooter, NavLink } from 'reactstrap';
import { Image } from 'react-bootstrap'



class ReactCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          nestedModal: false,
          closeAll: false
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      toggleNested() {
        console.log('click')
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false
        });
      }
    
      toggleAll() {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: true
        });
      }

    async componentDidMount() {
        console.log(this.props)

        let todos = this.props.group.todos;
        console.log(todos.task)
        todos.map(task => (
            console.log('map ', task.tasks)
        ))
    }

    renderTodos() {
        if (this.props.group.todos === undefined) {
            return (
                <div>Loading ... </div>
            )
        } else {
            return (
                this.props.group.todos.map(todo => (
                    <div className=" row">
                        <div className="col fixed-center" id="calendarCenter">
                        {
                            todo.tasks.map(task => (
                                <div className="todo-tasks fixed-center">
                                    <input className="d-flex position-left form-check-input" type="checkbox"  id="defaultCheck1"></input>
                                    <NavLink onClick={this.toggleNested} className="position-absolute float-left form-check-label" for="defaultCheck1">{task.due_date.split('T')[0]}&nbsp;&nbsp;{task.title}</NavLink>
                                        <Modal
                                        isOpen={this.state.nestedModal}
                                        toggle={this.toggleNested}
                                        onClosed={this.state.closeAll ? this.toggle : undefined}
                                        >
              
                                        <ModalBody><div>Stuff and things</div>
                                        
                                                <div id="taskLeft" className="todo-tasks">
                                                <div className="row">
                                                <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                                <label  class="form-check-label" for="defaultCheck1">{task.title}</label>
                                                <span></span>
                                                <p id="insideCal" className="profile-name">Assigned To: {task.assigned_to.profile_name}</p>
                                                <span><Image src={task.assigned_to.profile_pic_url} alt="user avatar" roundedCircle fluid width="25px" height='25px'/></span>
                                                </div>
                                                </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="primary" onClick={this.toggleNested}>
                                            Done
                                            </Button>{' '}
                                            <Button color="secondary" onClick={this.toggleAll}>
                                            All Done
                                            </Button>
                                        </ModalFooter>
                                        </Modal>
                                    <br></br>
                                </div>

                            ))
                        }
                        <br></br>
                        </div>
                    </div>
                ))
            )
        }
    }

    render() {
        return (
            <div>
                <SingleCalendar

                />
                <div>{this.renderTodos()}</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return ({
        homePage: state.home,
        user: state.user,
        group: state.group
    })
}

export default connect(mapStateToProps)(ReactCalendar);
