import React from "react";
import { connect } from "react-redux";
import SingleCalendar from './singleCalendar'
import './calendar.css';
import * as actions from '../../actions';
import _ from 'lodash';


class ReactCalendar extends React.Component {

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
                    <div>
                        {
                            tasks.map(function(t){
                                return(
                                <div className="todo-tasks">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                    <label className="form-check-label" for="defaultCheck1">{t.due_date}&nbsp;&nbsp;{t.title}</label>
                                    <br></br>
                                </div>

                                )
                            })
                        }
                        <br></br>
                </div>
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
