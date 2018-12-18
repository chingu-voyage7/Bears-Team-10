import React from 'react';
import PropTypes from 'prop-types';
import ProjectPosts from '../ProjectPosts/ProjectPosts';
import NewPost from '../NewPost/NewPost';
import './CommunityPosts.css';
import { posts } from '../../posts';

const CommunityPosts = ({ onRouteChange, index }) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectText" role="presentation" onClick={() => onRouteChange('projects', index)}>
        <div className="projectTitle">
          <span>
            { posts[0].title }
          </span>
        </div>
        <div className="projectDescription">
          <span>
            { posts[0].desc }
          </span>
        </div>
          Click to hide posts
      </div>
      <div className="postList">
        {
          posts[0].posts.map(post => (
            <ProjectPosts
              key={post.id}
              id={post.id}
              name={post.name}
              message={post.message}
              date={post.date}
            />
          ))
        }
        <NewPost />
      </div>
    </div>
  </div>
);

CommunityPosts.propTypes = {
  onRouteChange: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
};

export default CommunityPosts;
