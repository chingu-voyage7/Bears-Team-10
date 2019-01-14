import React from 'react';
import PropTypes from 'prop-types';
import ProjectPosts from './ProjectPosts';
import NewPost from './NewPost';
// import { posts } from '../../posts';

const CommunityPosts = ({
  allPosts,
  onClickPosts,
  projectId,
  // user,
  title,
  desc,
}) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div
        className="projectTitle"
        role="presentation"
        onClick={() => {
          onClickPosts(projectId, title, desc);
        }}
      >
        <span>Click to hide posts</span>
      </div>
      <div className="projectTitle">{title}</div>
      <div className="projectDescription">{desc}</div>
      <div className="postList">
        {allPosts.map(post => (
          <ProjectPosts
            key={post.post_id}
            id={post.post_id}
            name={post.post_creator_user_id}
            message={post.post_content}
            date={post.creation_timestamp}
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
  // eslint-disable-next-line react/forbid-prop-types
  allPosts: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  // user: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CommunityPosts;
