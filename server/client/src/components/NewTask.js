import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Button, Accordion,  FormControl, FormGroup, Form, InputGroup } from 'react-bootstrap';


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

    onInputChanged = (changedText) => {
        console.log('This is the changed text: ', changedText);
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
            alert('You must enter the Task Title.')
        //else send fetch to actions to create new list, need to send GroupID, TodoID too!!!!!!
        } else {
            this.refs.titleInput.getValue();
            this.props.createNewTask(NewTask, this.props.groupId)
            this.setState({title: ''})
            this.setState({assigned_to: ''})
            this.setState({due_date: ''})
        }
    }


    render() {
        console.log('newtask props', this.props)
        return (
            <div className='row'>
                <div className="col">
                <InputGroup 
             
             onChangeText={(changedText) => this.props.onInputChanged(changedText)} >
 
                    <FormControl 
                        placeholder="Title"
                        className='form-control'
                        value = {this.state.title}
                        type='text'
                        ref = "titleInput"
                        onChange={event => this.setState({title: event.target.value})}/>
                </InputGroup>
                <InputGroup>
                    <FormControl
                        type='text'
                        className='form-control'
                        placeholder="Assigned To:"
                        value = {this.state.assigned_to}
                        onChange={event => this.setState({assigned_to: event.target.value})}/>
                        </InputGroup>
                        <InputGroup>
                    <FormControl
                        type='text'
                        className='form-control'
                        placeholder="Due Date:"
                        value = {this.state.due_date}
                        onChange={event => this.setState({due_date: event.target.value})}/>
                        </InputGroup>

                    <Accordion.Toggle as={Button} className="btn-success" type = "submit" onClick={this.handleSubmit} variant="link" eventKey="1">
                    Add This Task
                    </Accordion.Toggle>

                
                </div>
            </div>
        )
    }
}


  export default connect(
    null,
    actions
  )(NewTask);