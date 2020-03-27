import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../actions';
import queryString from "query-string";
import _ from "lodash";
import {Image, Row, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css';
import SearchPop from './popover/searchPop'


//this component is for the renders the search results
class SearchResults extends Component { 

    componentDidMount() {
   
      }

    //sorts teams and renders card
    sortTeam = (p) => {
    if (p.group_type === 'team'){
      return (
      this.renderGroup(p)
      )
  }
}
  //sorts Projects and renders card
  sortProject = (p) => {
    if (p.group_type === 'project'){
      return (
        this.renderGroup(p)
      )
    }
  }
  
//loops through users
  renderPerson = (p) => {
    return(
      <Image src={p.profile_pic_url} roundedCircle fluid width="30px" height='30px'/>
    )
  }

  //renders individual card
  renderGroup = (t) =>{
    return(
    
    <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
    <Link to={`/groups/${t._id}`}>
    <div className="card-body">
    <h5 className="card-title">{t.group_name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{t.group_type}</h6>
    <Container>
    <Row>
    {t.people.map(this.renderPerson)}
    </Row>
    </Container>
    <p className="card-text">{t.group_description}</p>
    {/* <a href={`/groups/${t._id}`} className="card-link" alt="click on groups page"></a> */}
   </div>
   </Link>
  </div>

    )
    }

  render() {


    return (
        <div className="home-page">
           <div className="projects-row">
        
               <div className="col-md-8-offset-3 text-center">

                <h1>Teams</h1>
                  <br></br>
                  {this.props.searchResults.map(this.sortTeam)}
                </div>
              </div>
              
              <div className="projects-row">
                <div className="col justify-content-left">
      
               </div>
                <div className="col-md-8-offset-3 text-center">
                 <h1>Projects</h1>
                  <br></br>
                  {this.props.searchResults.map(this.sortProject)}
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
    
    console.log(state.search)
    return ({
    searchResults: state.search,
  
     
    })
   
  }
    
export default connect(mapStateToProps, actions)(SearchResults);