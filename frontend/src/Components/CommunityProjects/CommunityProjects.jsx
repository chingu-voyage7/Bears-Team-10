import React from 'react';
import Projects from '../Projects/Projects';
import './CommunityProjects.css';

const CommunityProjects = ({ projectList, onRouteChange }) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectsTitle">
        <span> Project List </span>
      </div>
      <div className="projectList">
        {
        projectList.map(project => (
          <Projects
            key={project.id}
            id={project.id}
            title={project.title}
            desc={project.desc}
            onRouteChange={onRouteChange}
          />
        ))
      }

      </div>
    </div>
  </div>
);

export default CommunityProjects;
