import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import queryString from "query-string";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css';
import PopoverPage from './popover/newTeamPop';
import ProjectPop from './popover/newProjectPop'

class Home extends Component {  
  //fetches current user nad home page
  componentDidMount() {
      this.props.fetchUser()
      this.props.home()
   }
   
   //Create a new team
  clickHandlerNewTeam = () => {
    console.log('click')
    PopoverPage()
  }

  //create new project
  clickHandlerNewProject = () => {
    console.log('clicked new project')
  }

  renderPerson = (p) => {
    return(
      <img src = {p.profile_pic_url}></img>
    )
  }

  //renders individual card
  //Still need to sort!!
  renderTeam = (t) =>{
    console.log("props", this.props.homePage)
    return(
    <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
    <div className="card-body">
    <h5 className="card-title">{t.group_name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{t.group_type}</h6>
    {t.people.map(this.renderPerson)}
    <p className="card-text">{t.group_description}</p>
    <a href={`/groups/${t._id}`} className="card-link">Card link</a>
   </div>
  </div>
    )
  }

  render() {
// if (this.props.authenticated){

    return (
        <div className="home-page">
           <div className="projects-row">
             <PopoverPage></PopoverPage>
               <div className="col-md-8-offset-3 text-center">
                <h1>Teams</h1>
                  <br></br>
                  {this.props.homePage.map(this.renderTeam)}
                </div>
              </div>
              
              <div className="projects-row">
                <div className="col justify-content-left">
               <ProjectPop></ProjectPop>
               </div>
                <div className="col-md-8-offset-3 text-center">
                 <h1>Projects</h1>
                  <br></br>
                   <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/groups" className="card-link">Card link</a>
                   </div>
                  </div>
                </div>
            </div>
        </div>
    );
// }else{
//    return <Redirect push to="/" />;
//   }
}
}

function mapStateToProps(state) {
  return ({
    homePage: state.home
  })
}

export default connect(
  mapStateToProps,
  actions
)(Home);

