import React from 'react'
import * as actions from '../actions';
import { connect } from 'react-redux';

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
            this.props.createNewTodo(NewList, '5e7a56122dba0954b0df986f', '5e7a56032dba0954b0df9860')
            this.setState({name: ''})
            this.setState({description: ''})
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
                    <button type="button" onClick={this.handleSubmit}>Add This List</button>
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