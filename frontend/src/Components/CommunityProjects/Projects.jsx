import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

// eslint-disable-next-line react/prefer-stateless-function
class Projects extends React.Component {
  render() {
    const { title, desc, onClickPosts, projectId } = this.props;
    return (
      <div className="project">
        <div
          className="projectText"
          role="presentation"
          onClick={() => {
            onClickPosts(projectId, title, desc);
          }}
        >
          <div className="projectTitle">
            <span>{title}</span>
          </div>
          <div className="projectDescription">
            <span>{desc}</span>
          </div>
          Click to show posts
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClickPosts: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default Projects;
