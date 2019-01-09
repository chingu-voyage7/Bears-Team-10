import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import { FaPlus } from 'react-icons/fa';
import CommunityProjects from '../CommunityProjects/CommunityProjects';
import CommunityPosts from '../CommunityPosts/CommunityPosts';

class Dashboard extends Component {
  state = {};

  render() {
    const { displayPosts, allProjects, onClickPosts } = this.props;
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
        {(() => {
          switch (displayPosts) {
            case true:
              return (
                <CommunityPosts
                  displayPosts={displayPosts}
                  onClickPosts={onClickPosts}
                />
              );
            default:
              return (
                <CommunityProjects
                  allProjects={allProjects}
                  displayPosts={displayPosts}
                  onClickPosts={onClickPosts}
                />
              );
          }
        })()}
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

Dashboard.propTypes = {
  onClickPosts: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
  displayPosts: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Dashboard)
);
