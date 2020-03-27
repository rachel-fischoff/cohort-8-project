
import "./App.css";
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "react-dom";
import Nav from "./components/Nav";
import App from './components/App';
import Home from './components/Home';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import LandingPage from './components/LandingPage';
//import TaskForm from './components/TaskForm';
import Groups from './components/Groups';
import ReactCalendar from './components/calendar/calendar';
import SearchResults from './components/SearchResults'


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router  >
      <Fragment>
        <App>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path={`/groups/:groupId`} component={Groups} />
            <Route exact path="/calendar" component={ReactCalendar} />
            <Route exact path = "/search" component = {SearchResults} />
          </Switch>
        </App>
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

