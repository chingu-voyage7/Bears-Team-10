import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';
import { connect } from 'react-redux';
import './CommunityProjects.css';

// for calling component use
// <CommunityProjects allProjects={allProjects} />
//  add:     allProjects: state.projects.allProjects
//  to mapStateToProps

class CommunityProjects extends Component {
  render() {
    const { allProjects } = this.props;
    return (
      <div className="contentContainer">
        <div className="contentAndTitles">
          <div className="projectsTitle">
            <span> Project List </span>
          </div>
          <div className="projectList">
            {allProjects.length
              ? allProjects.map(project => (
                  <Projects
                    key={project.project_id}
                    id={project.project_id}
                    title={project.project_title}
                    desc={project.project_description}
                    setRedirect={this.setRedirect}
                  />
                ))
              : 'Nothing here'}
          </div>
        </div>
      </div>
    );
  }
}

CommunityProjects.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    allProjects: state.projects.allProjects,
  };
}

export default connect(
  mapStateToProps,
  null
)(CommunityProjects);
