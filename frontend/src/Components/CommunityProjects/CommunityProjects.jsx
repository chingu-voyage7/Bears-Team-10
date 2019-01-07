import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';
import './CommunityProjects.css';

// for calling component use
// <CommunityProjects allProjects={allProjects} />
//  add:     allProjects: state.projects.allProjects
//  to mapStateToProps

const CommunityProjects = ({ allProjects }) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectsTitle">
        <span> Project List </span>
      </div>
      <div className="projectList">
        {allProjects.map(project => (
          <Projects
            key={project.project_id}
            id={project.project_id}
            title={project.project_title}
            desc={project.project_description}
          />
        ))}
      </div>
    </div>
  </div>
);

CommunityProjects.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
};

export default CommunityProjects;
