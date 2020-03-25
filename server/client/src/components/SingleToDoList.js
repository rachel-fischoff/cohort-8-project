import React from 'react'
import { connect } from "react-redux";
import * as actions from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom'
// import CommentsContainer from '../comments/comments_container'


class SingleTodoList extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = { loading: false }
  }

  componentDidMount(){
    this.setState({loading: true})
    this.props.fetchUser()
    console.log(this.state)
  }

  render(){
    if(this.state.loading = false) {
      return (<div> Loading... </div>)
    } else {
      return (
        <div className="row">
          <div className="todo-title">
            <p>num_completed/num_tasks</p>
            <h2>Name Todos</h2>
            <div class="custom-control custom-checkbox">
              <div className="row" styles="margin-left: 20px">
                <input type="checkbox" class="custom-control-input" id="defaultUnchecked"></input>
                <label class="custom-control-label" for="defaultUnchecked">Task1</label>
              </div>
            </div>
          </div>
         </div>
      )
    }
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(SingleTodoList);