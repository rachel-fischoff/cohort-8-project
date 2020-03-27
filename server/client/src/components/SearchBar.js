import React from 'react';
import {Component} from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';

//this component is for the search bar
class SearchBar extends Component {

    constructor(props) {
        super(props);
        //sets state to empty 
        this.state = {term: ''}
    
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
      }
      //updates state to the input in the search bar
      onInputChange(event) {
        this.setState({ term: event.target.value });
      }
    
      //when you submit your form you fetch groups based on the term submitted
      onFormSubmit(event) {
        event.preventDefault();
        
        let term = this.state.term

        this.props.fetchSearchByGroups(term);
  
      }


    render () {
        console.log('am i being rendered')
        return (

 
          <form onSubmit={this.onFormSubmit} className="input-group col-sm-4" >
              <input 
                placeholder="Search for a product"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </span>
            </form> 
  
          );
    }
}




function mapStateToProps(state) {
return state;
}

export default connect(mapStateToProps, actions)(SearchBar);
