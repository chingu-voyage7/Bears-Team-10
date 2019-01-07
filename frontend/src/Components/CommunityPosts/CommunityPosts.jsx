import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectPosts from './ProjectPosts';
import NewPost from './NewPost';
import { posts } from '../../posts';

// eslint-disable-next-line react/prefer-stateless-function
class CommunityPosts extends Component {
  render() {
    const { onClickPosts } = this.props;
    return (
      <div className="contentContainer">
        <div className="contentAndTitles">
          <div
            className="projectTitle"
            role="presentation"
            onClick={onClickPosts}
          >
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
            <NewPost />
          </div>
        </div>
      </div>
    );
  }
}

CommunityPosts.propTypes = {
  onClickPosts: PropTypes.func.isRequired,
};

export default CommunityPosts;
