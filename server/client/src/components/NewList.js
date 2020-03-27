import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Button, Accordion, Card } from 'react-bootstrap';

class NewList extends React.Component {
    //constructs a new state for the List 
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            description: '',
        }
        //binds the functions
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //called when user hits submit
    handleSubmit() {

        //sets the details for the new list
        const NewList = {
            name: this.state.name,
            description: this.state.description,
            num_tasks: 0,
            num_completed: 0
        };
        //if no name is enter gives a warning
        if (!this.state.name) {
            alert('You must enter the List Name.')
        //else send fetch to actions to create new list, need to send GroupID, TodoID too!!!!!!
        } else {
           
            this.props.createNewTodo(NewList, this.props.groupId)
            this.setState({name: ''})
            this.setState({description: ''})
            this.props.fetchGroupDetails(this.props.groupId)
        }
    }

    render() {
        return (
            <div className='row'>
                <div className="col">
                <form>
                    <input
                        placeholder="Name This List..."
                        className='form-control'
                        type='text'
                        onChange={event => this.setState({name: event.target.value})}/>
                    <input
                        type='text'
                        className='form-control'
                        placeholder="Add Extra Details..."
                        onChange={event => this.setState({description: event.target.value})}/>
                    <Accordion.Toggle as={Button} className="btn-success" onClick={this.handleSubmit} variant="link" eventKey="1">
                    Add This List
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
  )(NewList);