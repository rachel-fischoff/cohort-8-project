import React, { Fragment } from 'react'
import { connect } from "react-redux";
import * as actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import './TodoList.css'
import ReactMinimalPieChart from 'react-minimal-pie-chart'
// import { Link } from 'react-router-dom'
// import CommentsContainer from '../comments/comments_container'


class TodoList extends React.Component {

  async componentDidMount() {
    console.log(this.props)
    console.log(this.props.group.todos)
  }

renderTodos() {
  if (this.props.group.todos === undefined) {
    return (
      <div>Loading ... </div>
    )
  } else {
    return(
      this.props.group.todos.map(todo => (
        <div>
          <ReactMinimalPieChart
              animate={false}
              cx={50}
              cy={50}
              data={[
            {
              color: '#2E8B57',
              title: 'One',
              value: `${todo.num_completed}`
            }, {
              color: '#98FB98',
              title: 'Two',
              value: `${todo.tasks.length - todo.num_completed}` 
            }
            ]}
            label={false}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={100}
            totalValue = {`${todo.tasks.length}`}
            paddingAngle={0}
            radius={25}
            rounded={false}
            startAngle={100}
            style={{
              height: '100px'
            }}
            viewBoxSize={[
             20,
             20
            ]}
          />
          <h5>Tasks Completed: {todo.num_completed}/{todo.tasks.length}</h5>
          <h2>{todo.name}</h2>
          {
         todo.tasks.map(task => (
          <div className="todo-tasks">
           <input type="checkbox" className="custom-control-input" id="defaultUnchecked"></input>
           <label className="custom-control-label" for="defaultUnchecked">{task.title}</label>
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
      <div>{this.renderTodos()}</div>
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

export default connect(mapStateToProps, actions)(TodoList);