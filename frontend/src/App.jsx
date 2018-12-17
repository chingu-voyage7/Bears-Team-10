import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';

class App extends Component {
  componentDidMount() {
    fetchUser();
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }

)(App);

