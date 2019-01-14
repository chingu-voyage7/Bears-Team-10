import React from 'react';
import PropTypes from 'prop-types';
// import './ProjectPosts.css';

const ProjectPosts = ({ name, message, date }) => (
  <div className="project">
    <div className="postext">
      <div className="postName">
        <span>{name}</span>
      </div>
      <div className="postMessage">
        <span>{message}</span>
      </div>
      <div className="postDate">
        <span>{date}</span>
      </div>
    </div>
  </div>
);

ProjectPosts.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProjectPosts;
