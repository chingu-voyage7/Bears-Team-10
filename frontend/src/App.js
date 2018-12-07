import React, { Component } from 'react';
import './App.css';
import CommunityProjects from './Components/CommunityProjects/CommunityProjects';
import { projectList } from './projectList';
import { posts } from './posts';
import Header from './Components/Header/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <CommunityProjects
          projectList={projectList}
          posts={posts}
        />
        <p>
          Chingu Voyage-7 Bears Team 10 lets build something Awesome!
          </p>
      </div>
    );
  }
}

export default App;
