import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import CommunityProjects from './Components/CommunityProjects/CommunityProjects';
import CommunityPosts from './Components/CommunityPosts/CommunityPosts';
import { projectList } from './projectList';
import { posts } from './posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'projects',
      // user: '',
    };
  }

  componentDidMount() {
    fetchUser();
  }

  onRouteChange = (route) => {
    if (route === 'projects') {
      this.setState({ route: 'projects' });
    } else if (route === 'posts') {
      this.setState({ route });
    }
  }

  render() {
    const { route } = this.state;
    return (
      <div className="App">
        {(() => {
          switch (route) {
            case 'projects': return (
              <CommunityProjects
                projectList={projectList}
                posts={posts}
                onRouteChange={this.onRouteChange}
              />);
            case 'posts': return (
              <CommunityPosts
                projectList={projectList}
                posts={posts}
                onRouteChange={this.onRouteChange}
                index={this.index}
              />);
            default: return <Header />;
          }
        })()}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser },
)(App);
