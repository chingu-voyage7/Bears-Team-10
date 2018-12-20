import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import { fetchUser } from './redux/auth';

import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

class App extends Component {
  componentDidMount() {
    fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
