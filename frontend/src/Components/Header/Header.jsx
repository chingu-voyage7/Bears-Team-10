import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPaw } from 'react-icons/fa';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../redux/auth';
import { clearProjectData } from '../../redux/projects';
import CommunityPosts from '../CommunityPosts/CommunityPosts';
import CommunityProjects from '../CommunityProjects/CommunityProjects';

class Header extends Component {
  state = {};

  render() {
    const {
      user,
      displayPosts,
      onClickPosts,
      allProjects,
      projectId,
    } = this.props;
    return (
      <div className="header-div">
        <div className="logo">
          <FaPaw />
          <Link to="/">
            <h1 className="header-title">Bairs</h1>
          </Link>
        </div>
        {/* <p> */}
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
            {(() => {
              switch (displayPosts) {
                case true:
                  return (
                    <CommunityPosts
                      displayPosts={displayPosts}
                      onClickPosts={onClickPosts}
                      projectId={projectId}
                    />
                  );
                default:
                  return (
                    <CommunityProjects
                      allProjects={allProjects}
                      displayPosts={displayPosts}
                      onClickPosts={onClickPosts}
                      user={user}
                    />
                  );
              }
            })()}
          </span>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
        {/* </p> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    allProjects: state.projects.allProjects,
  };
}

Header.propTypes = {
  clearProjectData: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  displayPosts: PropTypes.bool.isRequired,
  onClickPosts: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    { logout, clearProjectData }
  )(Header)
);
