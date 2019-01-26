import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import { fetchUserProfile } from './redux/profile';
import { fetchProjects } from './redux/projects';
import { fetchPosts } from './redux/posts';
import { fetchProjectCollaborators } from './redux/collaborators';
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import CreateProject from './Components/Projects/CreateProject';
import NewPost from './Components/CommunityPosts/NewPost';
import Profile from './Components/UserProfile/Profile';
import CommunityProjects from './Components/CommunityProjects/CommunityProjects';
import CommunityPosts from './Components/CommunityPosts/CommunityPosts';
import Projects from './Components/CommunityProjects/Projects';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute';

const { Content } = Layout;

const WelcomePage = () => (
  <div className="welcomePage">
    <h1>Welcome to BT10's Project collaboration platform</h1>
    <h2>
      <span>Please </span>
      <Link to="/login">Log In </Link>
      <span>to continue or </span>
      <Link to="/register">Register </Link>
      <span>if you are new here</span>
    </h2>
  </div>
);
class App extends Component {
  state = { isLoading: true };

  async componentDidMount() {
    await this.props.fetchUser();
    if (!this.props.user.isLoggedIn) {
      return;
    }
    this.props.fetchUserProfile();
    this.setState({ isLoading: false });
    this.props.fetchProjects();
    this.props.fetchPosts();
    this.props.fetchProjectCollaborators();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Layout className="layout">
              <Header />
              <Content>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Switch>
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/create-project"
                    component={CreateProject}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/new-post"
                    component={NewPost}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/profile"
                    component={Profile}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/project/:project_id"
                    component={Projects}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/community-projects"
                    component={CommunityProjects}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/community-posts"
                    component={CommunityPosts}
                  />
                  <PrivateRoute
                    exact
                    isLoggedIn={this.props.user.isLoggedIn}
                    isLoading={this.state.isLoading}
                    path="/user-projects"
                    component={CommunityProjects}
                  />
                  <Route
                    exact
                    path="/"
                    component={() =>
                      this.props.user.isLoggedIn ? (
                        <Dashboard />
                      ) : (
                        <WelcomePage />
                      )
                    }
                  />
                </Switch>
              </Content>
            </Layout>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  fetchUserProfile: PropTypes.func.isRequired,
  fetchProjects: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchProjectCollaborators: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { user: state.auth.user };
}

export default connect(
  mapStateToProps,
  {
    fetchUser,
    fetchUserProfile,
    fetchProjects,
    fetchPosts,
    fetchProjectCollaborators,
  }
)(App);
