import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Projects from './Projects';
// import './CommunityProjects.css';

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

const CommunityProjects = ({
  // user,
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
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // user: PropTypes.object.isRequired,
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
