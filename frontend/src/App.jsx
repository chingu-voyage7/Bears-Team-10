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
  async componentDidMount() {
    await this.props.fetchUser();
    if (!this.props.user.isLoggedIn) {
      return;
    }
    this.props.fetchUserProfile();
    this.props.fetchProjects();
    this.props.fetchPosts();
    this.props.fetchProjectCollaborators();
  }

  render() {
    const { isLoggedIn } = this.props.user;
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Layout className="layout">
              <Header />
              <Content>
                {!isLoggedIn ? (
                  <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route component={WelcomePage} />
                  </Switch>
                ) : (
                  <Switch>
                    <Route
                      exact
                      path="/create-project"
                      component={CreateProject}
                    />
                    <Route exact path="/new-post" component={NewPost} />
                    <Route exact path="/profile" component={Profile} />
                    <Route
                      exact
                      path="/project/:project_id"
                      component={Projects}
                    />
                    <Route
                      exact
                      path="/community-projects"
                      component={CommunityProjects}
                    />
                    <Route
                      exact
                      path="/community-posts"
                      component={CommunityPosts}
                    />
                    <Route
                      exact
                      path="/user-projects"
                      component={CommunityProjects}
                    />
                    <Route exact path="/" component={Dashboard} />
                  </Switch>
                )}
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
