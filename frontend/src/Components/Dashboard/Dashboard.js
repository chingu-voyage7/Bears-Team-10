import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { FaPlus } from 'react-icons/fa'

class Dashboard extends Component {
  state = {};

  render() {

    return (
      <div className="Dashboard">
          <div>
            <Link to="/create-project">New Project</Link>
          </div>
          <div>
            <Link to="/profile">Profile</Link>
            </div>
            <div>
            <Link to="/communityprojects">Community Projects</Link>
            </div>
            <div>
            <Link to="/">Your Projects</Link>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}

Dashboard.propTypes = {
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
  )(Dashboard)
);
