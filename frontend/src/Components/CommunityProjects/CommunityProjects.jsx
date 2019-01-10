import React from 'react';
import PropTypes from 'prop-types';
import Projects from './Projects';
import './CommunityProjects.css';

// for calling this component and the CommunityPosts (switching between
// them with onClick) use:
// {(() => {
//   switch (displayPosts) {
//     case true:
//       return (
//         <CommunityPosts
//           displayPosts={displayPosts}
//           onClickPosts={onClickPosts}
//           projectId={projectId}
//         />
//       );
//     default:
//       return (
//         <CommunityProjects
//           allProjects={allProjects}
//           displayPosts={displayPosts}
//           onClickPosts={onClickPosts}
//           user={user}
//         />
//       );
//   }
// })()}
// in Dashboard Component
//
//  add:     allProjects: state.projects.allProjects
//  to mapStateToProps
//  in Dashboard Component
//
// add:
// displayPosts={this.state.displayPosts}
// onClickPosts={this.onClickPosts}
// projectId={this.state.projectId}
// as props for Dashboard Component in App.jsx

const CommunityProjects = ({ allProjects, onClickPosts, displayPosts }) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectsTitle">
        <span> Project List </span>
      </div>
      <div className="projectList">
        {allProjects.map(project => (
          <Projects
            key={project.project_id}
            projectId={project.project_id}
            title={project.project_title}
            desc={project.project_description}
            onClickPosts={onClickPosts}
            displayPosts={displayPosts}
          />
        ))}
      </div>
    </div>
  </div>
);

CommunityProjects.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
  onClickPosts: PropTypes.func.isRequired,
  displayPosts: PropTypes.bool.isRequired,
};

export default CommunityProjects;
