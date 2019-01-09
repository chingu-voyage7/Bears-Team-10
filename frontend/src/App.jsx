import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import { fetchProjects } from './redux/projects';

import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import CreateProject from './Components/Projects/CreateProject';
import NewPost from './Components/CommunityPosts/NewPost';
import Profile from './Components/UserProfile/Profile';

import CommunityProjects from './Components/CommunityProjects/CommunityProjects';
import Dashboard from './Components/Dashboard/Dashboard';
import CommunityPosts from './Components/CommunityPosts/CommunityPosts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayPosts: false,
    };
    this.onClickPosts = this.onClickPosts.bind(this);
  }

  async componentDidMount() {
    await this.props.fetchUser();
    this.props.fetchProjects();
  }

  onClickPosts() {
    this.setState(prevState => ({
      displayPosts: !prevState.displayPosts,
    }));
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header
              displayPosts={this.state.displayPosts}
              onClickPosts={this.onClickPosts}
            />
            <Dashboard
              displayPosts={this.state.displayPosts}
              onClickPosts={this.onClickPosts}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create-project" component={CreateProject} />
            <Route exact path="/new-post" component={NewPost} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/community-projects"
              component={CommunityProjects}
            />
            <Route exact path="/community-posts" component={CommunityPosts} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchProjects: PropTypes.func.isRequired,
};

export default connect(
  null,
  { fetchUser, fetchProjects }
)(App);
