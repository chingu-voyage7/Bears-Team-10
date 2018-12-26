import React, { Component } from 'react';
import { FaPaw } from 'react-icons/fa';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../redux/auth';
import { clearProjectData } from '../../redux/projects';

class Header extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <div className="header-div">
        <div className="logo">
          <FaPaw />
          <Link to="/">
            <h1 className="header-title">Bairs</h1>
          </Link>
        </div>
        <p>
          <span>Welcome! </span>
          {user && user.isLoggedIn ? (
            <span>
              {user.user.username}
              <Button
                className=""
                href="#"
                onClick={async e => {
                  e.preventDefault();
                  await this.props.logout();
                  this.props.clearProjectData();
                  this.props.history.push('/');
                }}
              >
                <span> Logout?</span>
              </Button>
            </span>
          ) : (
            <Link to="/login">Sign In</Link>
          )}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    { logout, clearProjectData }
  )(Header)
);
