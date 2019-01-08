import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../redux/auth';
import { clearProjectData } from '../../redux/projects';

class Dashboard extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <div className="Dashboard">

            <Link to="/create-project">Create New</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/communityprojects">Community Projects</Link>
            <Link to="/">Your Projects</Link>


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
