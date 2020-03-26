import React from 'react';
import { connect } from "react-redux";
import $ from 'jquery';
import * as actions from '../actions';
import SingleReactCalendar from './calendar/singleCalendar'
import './calendar/calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.toggleHide= this.toggleHide.bind(this)
  }

  componentDidMount() {
    $( '.calendar' ).toggle();
  }

  handleSubmit(e){
    e.preventDefault()
    //create new task
    //this.toggleHide()
  }

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

  render(){

    const { title, completed , assigned_to} = this.props;

    return (
      <div className='tool-form' id={`todo-id`}>
        <div className="row" >
          <div class="custom-control custom-checkbox">
            <div className="row" >
              <div className="col">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                <label class="custom-control-label" for="defaultUnchecked"></label><span>Todo Title</span>
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className='input-fields'>

            <div className="row" >
                <label>Assigned to</label>
                <input type='text' placeholder='Type names to assign...'
                onChange={this.update('assigned_to')} value={assigned_to}/>
            </div>
              <div>
              <label>Due on</label>
                <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      value="noDueDate"
                      checked={this.state.due_date === "noDueDate"}
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
                      checked={this.state.due_date === "specificDate"}
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
                      checked={this.state.due_date === "dateRange"}
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
            <input type='submit' value='Add this to-do'
              className='btn btn-submit' onClick={this.handleSubmit}/>
            <input type='submit' value='Cancel'
              className='btn btn-cancel' onClick={this.handleCancel}/>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(TaskForm);
