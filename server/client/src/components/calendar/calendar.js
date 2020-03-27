import React from "react";
import { connect } from "react-redux";
import './calendar.css';
import moment from 'moment'

import * as actions from '../../actions';
import _ from 'lodash';

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

    componentDidMount() {
        //fetches the tasks
        this.props.fetchSchedule(this.props.groupId)
    }


  sortAndRenderDates=()=>{
    //orders the due dates
    let tasks = []
    let sortedDates = []
    _.map(this.props.tasks, function(task){sortedDates.push(task.due_date)})
    sortedDates.sort()


  
    //ugly loop to match the order dates array to the whole task
    for (let i = 0; i< sortedDates.length; i++){
        for (let j=0; j< this.props.tasks.length; j++){
            if (sortedDates[i] == this.props.tasks[j].due_date){
                tasks.push(this.props.tasks[j])
            }
        }
    }
 
            return (
                    <div>
                        {tasks.map(task => {
                            return(
                                <div className="cal-tasks">
                                    <NavLink onClick={this.toggleNested} className="" for="defaultCheck1">{moment(task.due_date).format("MMM Do")}&nbsp;&nbsp;{task.title}</NavLink>
                                        <Modal
                                        isOpen={this.state.nestedModal}
                                        toggle={this.toggleNested}
                                        onClosed={this.state.closeAll ? this.toggle : undefined}
                                        >
              
                                        <ModalBody><div>{task.title}</div>
                                                <div id="taskLeft" className="todo-tasks">
                                                <div className="row">
                                                <input  class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
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
                                    <br></br>
                                </div>

                        )})}
        </div>
            )
}
    
  
    render() {
        return (
            <div className="row">
            <div className="col">
                <div>{this.sortAndRenderDates()}</div>
            </div>
            <br></br>
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