import React, { useState } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import SingleCalendar from './singleCalendar'
import './calendar.css';


class ReactCalendar extends React.Component {

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
                    <div>
                        {
                            todo.tasks.map(task => (
                                <div className="todo-tasks">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                    <label class="form-check-label" for="defaultCheck1">{task.due_date.split('T')[0]}&nbsp;&nbsp;{task.title}</label>
                                    <br></br>
                                </div>

                            ))
                        }
                        <br></br>
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
