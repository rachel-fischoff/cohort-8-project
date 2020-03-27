import React from "react";
import { connect } from "react-redux";
import SingleCalendar from './singleCalendar'
import './calendar.css';
<<<<<<< HEAD
import * as actions from '../../actions';
import _ from 'lodash';
=======
import { Button, Modal,  ModalBody, ModalFooter, NavLink } from 'reactstrap';
import { Image } from 'react-bootstrap'

>>>>>>> 4acbf348cf242b27f33ab5e8cedc7de36d19373a


class ReactCalendar extends React.Component {

<<<<<<< HEAD
    componentDidMount() {
        //fetches the tasks
        this.props.fetchSchedule(this.props.groupId)
=======
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
>>>>>>> 4acbf348cf242b27f33ab5e8cedc7de36d19373a
    }


  sortAndRenderDates=()=>{
    //orders the due dates
    let tasks = []
    let sortedDates = []
    _.map(this.props.tasks, function(task){sortedDates.push(task.due_date)})
    sortedDates.sort()
    sortedDates.reverse()

  
    //ugly loop to match the order dates array to the whole task
    for (let i = 0; i< sortedDates.length; i++){
        for (let j=0; j< this.props.tasks.length; j++){
            if (sortedDates[i] == this.props.tasks[j].due_date){
                tasks.push(this.props.tasks[j])
            }
        }
    }
        if (this.props.tasks === undefined) {
            return (
                <div>Loading ... </div>
            )
        } else {
            return (
<<<<<<< HEAD
                    <div>
                        {
                            tasks.map(function(t){
                                return(
                                <div className="todo-tasks">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                    <label className="form-check-label" for="defaultCheck1">{t.due_date}&nbsp;&nbsp;{t.title}</label>
=======
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
>>>>>>> 4acbf348cf242b27f33ab5e8cedc7de36d19373a
                                    <br></br>
                                </div>

                                )
                            })
                        }
                        <br></br>
<<<<<<< HEAD
                </div>
=======
                        </div>
                    </div>
                ))
>>>>>>> 4acbf348cf242b27f33ab5e8cedc7de36d19373a
            )
        }
  }
  
    render() {
        return (
            <div>
                <div>{this.sortAndRenderDates()}</div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return ({
        tasks: state.schedule
    })
}

export default connect(mapStateToProps, actions)(ReactCalendar);
