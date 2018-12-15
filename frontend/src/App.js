import React, { Component } from 'react';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
