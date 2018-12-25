import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import { fetchProjects } from './redux/projects';

import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import CreateProject from './Components/Projects/CreateProject';

class App extends Component {
  async componentDidMount() {
    await this.props.fetchUser();
    this.props.fetchProjects();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-project" component={CreateProject} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser, fetchProjects }
)(App);
