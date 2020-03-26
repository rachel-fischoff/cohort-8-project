import React, { Component} from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart'
import { connect } from "react-redux";
import * as actions from '../actions';     
            
class PieChartTodo extends Component { 
    constructor (props) {
        super(props)

        this.state = {
            num_tasks: 0,
            num_completed: 0
        }
    }
    
    componentDidMount () {
       let num_tasks = this.props.group.todos.reduce(
            function(total, todo){ return total + todo.tasks.length }
            , 0);
            console.log(num_tasks)
       let num_completed = this.props.group.todos.reduce(
        function(total, todo){ return total + todo.num_completed }
        , 0);
            console.log(num_completed)
        this.setState({num_tasks: num_tasks, num_completed: num_completed})
    }
    
    
    render() {
        console.log(this.state.num_completed)
        return (
        <div>
        
        <ReactMinimalPieChart
            animate={false}
              cx={50}
              cy={50}
              data={[
            {
              color: '#2E8B57',
              title: 'One',
              value: `${this.state.num_completed}`
            }, {
              color: '#98FB98',
              title: 'Two',
              value: `${this.state.num_tasks - this.state.num_completed}` 
            }
            ]}
            label={false}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={100}
            totalValue = {`${this.state.num_tasks}`}
            paddingAngle={0}
            radius={15}
            rounded={false}
            startAngle={100}
            style={{
              height: '75px',
              width: '75px'
            }}
            viewBoxSize={[
             10,
             10
            ]}
          />

          <h5>{this.state.num_completed}/{this.state.num_tasks}</h5>
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
          
export default connect(
    mapStateToProps,
    actions
    )(PieChartTodo);
          
          