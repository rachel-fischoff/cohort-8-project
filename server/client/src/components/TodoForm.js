import React from 'react';
import $ from 'jquery';
import SingleReactCalendar from './calendar/singleCalendar'
import './calendar/calendar.css';

class TodoForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      assigned_to: '',
      completed: '',
      date_created: '',
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
    const newTask = {
      name: this.state.name,
      description: this.state.description,
      title: this.state.name,
      assigned_to: '',
      completed: '',
      date_created: '',
      due_date: '',
    };
    //this.toggleHide()
  }

  toggleHide(){
    $('.calendar').removeClass('hidden')
    $('.calendar').addClass('hidden')
  }

  handleCancel(e){
    e.preventDefault()
    this.setState( {
        name: '',
        description: '', 
        assigned_to: '',
        completed: '',
        date_created:'',
        due_date: '',
    } )
    this.toggleHide()
  }

  update(field){
    return (e) => {
      let value = e.target.value
      // if( field === 'assigned_to' ){
      //   value = value.split(',')
      // }
      this.setState({ [field]: value })
    }
  }

  render(){
    return (
      <div className='tool-form' id={`todo-id`}>
      <div>Todo title</div>
        <form>
          <div className='input-fields'>
            <div className="row" >
            <label></label>
              <input type='text' id='title' placeholder='Describe this to-do...'
                onChange={this.update('title')} value={this.state.title} />
            </div>
            <div className="row" >
                <label>Assigned to</label>
                <input type='text' placeholder='Type names to assign...'
                onChange={this.update('assigned_to')} value={this.state.assigned_to}/>
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
            <input type='text' placeholder='Add extra details...'
              onChange={this.update('description')} value={this.state.description} />
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

export default TodoForm
