import React from 'react';
import PropTypes from 'prop-types';
import ProjectPosts from './ProjectPosts';
import NewPost from './NewPost';
import { posts } from '../../posts';

const CommunityPosts = ({ onClickPosts, projectId }) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="projectTitle" role="presentation" onClick={onClickPosts}>
        <span>Click to hide posts</span>
      </div>
      <div className="projectTitle">{posts[0].title}</div>
      <div className="projectDescription">{posts[0].desc}</div>
      <div className="postList">
        {posts[0].posts.map(post => (
          <ProjectPosts
            key={post.id}
            id={post.id}
            name={post.name}
            message={post.message}
            date={post.date}
          />
        ))}
        <NewPost projectId={projectId} />
      </div>
    </div>
  </div>
);

CommunityPosts.propTypes = {
  onClickPosts: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

export default CommunityPosts;
