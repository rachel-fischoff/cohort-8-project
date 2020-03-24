import React from 'react';
import { withRouter } from "react-router-dom";
import * as actions from '../actions';
import { connect } from "react-redux";
import styled from "styled-components";
import queryString from "query-string";

class App extends React.Component {  

  render() {
    return (
      <AppContainer>
        {this.props.children}
      </AppContainer>
    )
  }
}

export default withRouter(connect(
  null,
  actions
)(App));

const AppContainer = styled.div`
  padding-top: 90px;
`;

