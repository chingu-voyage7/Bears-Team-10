import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Projects from './Projects';
import './CommunityProjects.css';

const CommunityProjects = ({
  allProjects,
}) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectsTitle">
        <span> Project List </span>
      </div>
      <div className="projectList">
        {allProjects.length
          ? allProjects.map(project => (
              <Link to={`/project/${project.project_id}`}>
                <Projects project_id={project.project_id} />
              </Link>
            ))
          : 'Nothing here'}
      </div>
    </div>
  </div>
);

CommunityProjects.propTypes = {
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
