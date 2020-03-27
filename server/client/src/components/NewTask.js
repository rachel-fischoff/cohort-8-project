import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Button, Accordion, Card } from 'react-bootstrap';

class NewTask extends React.Component {
    //constructs a new state for the List 
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            assigned_to: '',
            due_date: '',
        }
        //binds the functions
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //called when user hits submit
    handleSubmit() {

        //sets the details for the new list
        const NewTask = {
            title: this.state.name,
            assigned_to: this.state.description,
            due_date: this.state.due_date,
        };
        //if no name is enter gives a warning
        if (!this.state.title) {
            alert('You must enter the List Name.')
        //else send fetch to actions to create new list, need to send GroupID, TodoID too!!!!!!
        } else {
           
            this.props.createNewTask(NewTask, this.props.groupId)
            this.setState({title: ''})
            this.setState({assigned_to: ''})
            this.setState({due_date: ''})
        }
    }

    render() {
        console.log('newlist props', this.props)
        return (
            <div className='row'>
                <div className="col">
                <form>
                    <input
                        placeholder="Title"
                        className='form-control'
                        type='text'
                        onChange={event => this.setState({title: event.target.value})}/>
                    <input
                        type='text'
                        className='form-control'
                        placeholder="Assigned To:"
                        onChange={event => this.setState({assigned_to: event.target.value})}/>
                    <input
                        type='text'
                        className='form-control'
                        placeholder="Due Date:"
                        onChange={event => this.setState({due_date: event.target.value})}/>
                    <Accordion.Toggle as={Button} className="btn-success" onClick={this.handleSubmit} variant="link" eventKey="1">
                    Add This Task
                    </Accordion.Toggle>
                </form>
                </div>
            </div>
        )
    }
}


  export default connect(
    null,
    actions
  )(NewTask);