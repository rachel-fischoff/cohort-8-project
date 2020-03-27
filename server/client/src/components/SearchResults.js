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
import Nav from './Nav'


//this component is for the renders the search results
class SearchResults extends Component { 

    componentDidMount() {
        this.props.fetchGroupSearch(this.props.term)
        this.props.fetchUserSearch(this.props.term)
       
      }

  render() {
    if(this.props.groupSearch.length == 0){
      return(
      <p>We could not find anything that match that search.</p>
      )
    }
  else{
    return (
        <div>
           <div className="projects-row">
            <Nav />
               <div className="col-md-8-offset-3 text-center">

                <h1>Teams & Projects</h1>
                  <br></br>
                  {_.map(this.props.groupSearch, function(t){return (    
    
                 <div className="card col-md-offset-3 text-center" styles="width: 18rem;">
                  <Link to={`/groups/${t._id}`}>
                  <div className="card-body">
                  <h5 className="card-title">{t.group_name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{t.group_type}</h6>
                  <Container>
                  <Row>
                  {t.people.map((p)=>{  return(
                  <Image src={p.profile_pic_url} roundedCircle fluid width="30px" height='30px'/>
    )})}
                  </Row>
                  </Container>
                  <p className="card-text">{t.group_description}</p>
                  <a href={`/groups/${t._id}`} className="card-link" alt="click on groups page"></a>
                </div>
                </Link>
                </div>

    )})}
                </div>
              </div>
              </div>
              
    );

}
}
}


function mapStateToProps(state) {
    
    console.log(state.search)

    return ({
    userSearch: state.search.users,
    groupSearch: state.search.groups,
    term: state.search.term
  
    })
   
  }
    
export default connect(mapStateToProps, actions)(SearchResults);