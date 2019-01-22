import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPaw } from 'react-icons/fa';
import { Button, Menu, Layout } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../redux/auth';
import { clearProjectData } from '../../redux/projects';
import './Header.css';

const { Header: HeaderAntd } = Layout;

class Header extends Component {
  state = {};

  render() {
    const { user } = this.props;
    return (
      <HeaderAntd>
        <h2 className="logo">
          <Link to="/">
            <span className="home-title">BT10</span>
            <FaPaw />
          </Link>
        </h2>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item id="auth-menu">
            <div>
              <span>Welcome! </span>
              {user && user.isLoggedIn ? (
                <span>
                  <span className="username">{user.user.username}</span>
                  <Button
                    ghost
                    href="#"
                    onClick={async e => {
                      e.preventDefault();
                      await this.props.logout();
                      this.props.clearProjectData();
                      this.props.history.push('/');
                    }}
                  >
                    <span>Logout</span>
                  </Button>
                </span>
              ) : (
                <Link to="/login">Sign In</Link>
              )}
            </div>
          </Menu.Item>
        </Menu>
      </HeaderAntd>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

Header.propTypes = {
  clearProjectData: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout, clearProjectData }
  )(Header)
);
