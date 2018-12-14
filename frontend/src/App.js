import React, { Component } from 'react';

import Header from './Components/Header/Header';

import './App.css';
import CommunityProjects from './Components/CommunityProjects/CommunityProjects';
import CommunityPosts from './Components/CommunityPosts/CommunityPosts';
import { projectList } from './projectList';
import { posts } from './posts';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      user: '',
      projectList: projectList,
      posts: posts,
    }
  }

  onRouteChange = (route, index) => {
    if (route === 'home') {
      this.setState({ route: 'home' })
    } else if (route === 'posts') {
      this.setState({ route: route, index: index });
    }
  }

  render() {
    return (
      <div className="App">

        <Header />

        {
          this.state.route === 'home'
          ? <CommunityProjects
              projectList={projectList}
              posts={posts}
              onRouteChange={this.onRouteChange}
            />
          : (
            this.state.route === 'posts'
            ? <CommunityPosts
              projectList={projectList}
              posts={posts}
              onRouteChange={this.onRouteChange}
              index={this.index}
              
              />
            : null
          )

        }

      </div>
    );
  }
}

export default App;
