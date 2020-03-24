import React, { Component, Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Link } from "react-router-dom";
import { render } from 'react-dom';



const Groups = (props) => {
    return (
        <div>
          <Link to="/calendar"><button>
            Calendar 
          </button>
          </Link>
        </div>
    );
}

export default Groups;
