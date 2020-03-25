import React from 'react'
import { connect } from "react-redux";
import * as actions from '../actions'
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
    console.log(this.props)
    this.props.fetchTodos()
  }

  render(){
    if(this.state.loading = true) {
      return (<div> Loading... </div>)
    } else {
      return (
        <div className='col'>
          hello
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, actions)(SingleTodoList);