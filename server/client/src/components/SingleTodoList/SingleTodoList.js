import React, { Fragment } from 'react'
import { connect } from "react-redux";
import * as actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactMinimalPieChart from 'react-minimal-pie-chart'
import { Image } from 'react-bootstrap'
//import singleToDoModal from '../modal/singleToDoModal';
//import Modal from 'react-bootstrap/Modal'
import { Modal,  ModalBody, ModalFooter } from 'reactstrap';
import { Button, Accordion, Card } from 'react-bootstrap';
import TaskForm from '../TaskForm'
import './SingleTodoList.css'
import NewTask from '../NewTask'
import Nav from '../Nav'
// import { Link } from 'react-router-dom'
// import CommentsContainer from '../comments/comments_container'

class SingleTodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          nestedModal: false,
          closeAll: false,
          todoId: this.props.match.params.todoId
        };
    
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.clickCheckBox = this.clickCheckBox.bind(this)
        this.renderSingleTodoList = this.renderSingleTodoList.bind(this)
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      toggleNested() {
        console.log('click')
        this.setState({
          nestedModal: !this.state.nestedModal,
          
          closeAll: false
        });
      }
    
      toggleAll() {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: true
        });
      }

      clickCheckBox(todo, task, value) {
        this.props.toggleCompleted(this.props.group._id, todo._id, task._id, value)
      }

componentDidMount() {
    this.props.fetchGroupDetails(this.props.match.params.groupId)

    let newTodo = this.props.group.todos.filter(function(t){
      return t._id === this.props.match.params.todoId
    })
    
  }

renderSingleTodoList() {
  if (this.props.group.todos === undefined) {
    return (
      <div>Loading ... </div>
    )
  } else {
    let newTodo = this.props.group.todos.filter(t => {
      return t._id === this.state.todoId
    })

    return(
      newTodo.map(todo => (
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
            radius={40}
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
      
          <p className="todo-completed text-center">{todo.num_completed}/{todo.tasks.length} completed</p>
          <h2 className='text-center'>{todo.name}</h2>
          <br></br>
          {
         todo.tasks.map(task => (
          <div className="todo-tasks">
          <div className="row">
          <input class="form-check-input" type="checkbox" checked={task.completed} id="defaultCheck1" onClick={(e) => {this.clickCheckBox(todo, task, e.target.checked)}}></input>
          <label class="form-check-label" id="task" for="defaultCheck1">{task.title}</label>
          <a href={`/groups/${this.props.group._id}/todo/${todo._id}/task/${task._id}`}><button className="btnlink"  id="btn" class="btn btn-secondary btn-sm float-right" value={task._id}>Assign/Schedule...</button></a>
          </div>
           <div className="row">
           <span><Image src={task.assigned_to.profile_pic_url} alt="user avatar" roundedCircle fluid width="25px" height='25px'/></span>
           <p className="profile-name">Assigned To: {task.assigned_to.profile_name}  </p>
           </div>

           <br></br>
          </div>
                    
            ))  
          }
          <br></br>
          
          <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalBody>
                <TaskForm 
                  groupID={this.props.group._id}
                  todoID={todo._id}
                   />
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={this.toggleNested}>
                  Done
                </Button>{' '}
                </ModalFooter>
            </Modal>
        </div>
        
      ))
    )
  }
}
  


  render() {
    console.log('I render')
      return (
      <>

      <Nav />
      <div className="app_body">
      <div className="card-groups col-md-10 panel">
      <br></br>
      {this.renderSingleTodoList()}

      <Button color="success" href={`/groups/${this.props.match.params.groupId}`}>
                  Done
      </Button>{' '}
      </div>
      </div>
      </>
      )
  }
}


function mapStateToProps(state) {
  console.log(state)
  return ({
    homePage: state.home,
    user: state.user,
    group: state.group
  })
}

export default connect(mapStateToProps, actions)(SingleTodoList);