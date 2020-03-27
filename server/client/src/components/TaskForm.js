import React from 'react';
import { connect } from "react-redux";
import $ from 'jquery';
import * as actions from '../actions';
import SingleReactCalendar from './calendar/singleCalendar'
import './calendar/calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './groups.css'

class TaskForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      assigned_to: '',
      completed: '',
      due_date: '',
    }
    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.update = this.update.bind(this)
    this.handleDueDateChange = this.handleDueDateChange.bind(this)
    this.getAssigneeName = this.getAssigneeName.bind(this)
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.toggleHide= this.toggleHide.bind(this)
  }
  //groupID, todosID, taskID should be passed from the todoList
  //not working
  componentDidMount() {
    //fetch is working with hardcoded values
    let groupID = '5e7d1070603a8140d3ae27ba';
    let todoID = '5e7d1064603a8140d3ae27b7';
    let taskID = '5e7d1055603a8140d3ae2796';

    this.props.fetchTask(groupID, todoID, taskID)
    
    $( '.calendar' ).toggle();

  }

  handleSubmit(e){
    e.preventDefault()
    //update the task
    const updatedTask = {
      assigned_to: this.state.assigned_to,
      completed: false, //checkbox 
      due_date: this.state.due_date, //calendar value or nothing
    }
      //will need groupID, todosID, taskID to pass
      //not working yet; server side api missing too
      this.props.updateTask(updatedTask, this.props.groupId, this.props.todosID, this.props.task._id)
      this.setState( {
        assigned_to: '',
        completed: '',
        due_date: '',
      } )
    this.toggleHide()
  };

  toggleHide(){
    $('.calendar').removeClass('hidden')
    $('.calendar').addClass('hidden')
  }

  handleCancel(e){
    e.preventDefault()
    this.setState( {
        assigned_to: '',
        completed: '',
        due_date: '',
    } )
    this.toggleHide()
  }

  update(field){
    return (e) => {
      let value = e.target.value
      this.setState({ [field]: value })
    }
  }

  handleDueDateChange(e) {
    e.preventDefault();
    let dueDate = e.target.value //will need to capture date from the calendar or nothing
    
    this.setState({
      due_date: dueDate
    })
  }

  handleCheckBoxChange(e) {

  }

  // need to  etch people of the group to get name of the person by id
  getAssigneeName(value){
    // const { people } = this.props.match.params.people;
    // console.log('from people: ', people);
    return value
    //return people.filter((person) => person._id === value)
  }

  render(){

    const { title, completed , assigned_to, due_date} = this.props.task;

    console.log('task from task form: ', this.props.task)

    return (
      <div className='tasks' id={`todo-id`}>
        <div className="row" >
          <div class="custom-control custom-checkbox">
            <div className="row" >
              <div className="col">
                <input name="complete" type="checkbox" class="custom-control-input" id="defaultUnchecked" checked={completed} onChange={this.handleCheckBoxChange}></input>
                <label class="custom-control-label" for="defaultUnchecked"></label><span>{title}</span>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className='input-fields'>

            <div className="row" >
                <label>Assigned to</label>
                <input type='text' placeholder='Type names to assign...'
                onChange={this.update('assigned_to')} value={this.getAssigneeName(assigned_to)}/>
            </div>
              <div>
              <label>Due on</label>
                <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="noDueDate"
                      checked={due_date === "noDueDate"}
                      onChange={this.handleDueDateChange}
                    />
                    No due date
                  </label>
                </li>
                
                <li>
                  <label>
                    <input
                      type="radio"
                      value="specificDate"
                      checked={due_date === "specificDate"}
                      onChange={this.handleDueDateChange}
                    />
                    A specific day
                  </label>
                  <div className="calendar hidden"><SingleReactCalendar /></div>
                </li>
      
                <li>
                  <label>
                    <input
                      type="radio"
                      value="dateRange"
                      checked={due_date === "dateRange"}
                      onChange={this.handleDueDateChange}
                    />
                    Range of dates
                  </label>
                </li>
              </ul>
              </div>
              <div className="row" >
                <label>Notes</label>
                <input 
                  type='text' 
                  placeholder='Add extra details...'
                  value=""/>
              </div>
          </div>
          <div className='submit-buttons'>
            <input type='submit' value='Save changes'
              className='btn btn-submit' onClick={this.handleSubmit}/>
            <input type='submit' value='Discard changes'
              className='btn btn-cancel' onClick={this.handleCancel}/>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    task: state.task
  })
}

export default connect(mapStateToProps, actions)(TaskForm);
