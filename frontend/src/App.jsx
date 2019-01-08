import React, { Component } from 'react';
// needed to fix props validation
import PropTypes from 'prop-types';
//
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import { fetchProjects } from './redux/projects';

import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import CreateProject from './Components/Projects/CreateProject';
import Profile from './Components/UserProfile/Profile';
import CommunityProjects from './Component/CommunityProjects/CommunityProjects';
import Dashboard from './Components/Dashboard/Dashboard';

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
            <Dashboard />
            <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/communityprojects" component={CommunityProjects}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// needed to fix props validation
App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchProjects: PropTypes.func.isRequired,
};
//

export default connect(
  null,
  { fetchUser, fetchProjects }
)(App);
