import React from 'react';
import ProjectPosts from "../ProjectPosts/ProjectPosts";
import NewPost from "../NewPost/NewPost";
import "./CommunityPosts.css"
import { posts } from '../../posts';

const CommunityPosts = ({ onRouteChange, index, projectList }) => {
  return (
    <div className="contentContainer">
      <div className = "contentAndTitles" >
      <div className="projectText" onClick={() => onRouteChange('home', index)}>
          <div className="projectTitle" >

            <span > { posts[0].title } </span>
          </div>
          <div className="projectDescription" >
            <span > { posts[0].title } </span>
          </div>
          Click to hide posts
        </div>
        <div className="postList" >
          {
            posts[0].posts.map((post, i) => {
                return (
                  <ProjectPosts key={i}
                    id={post.id}
                    name={post.name}
                    message={post.message}
                    date={post.date}
                  />
                );
              })
            }
          <NewPost />
        </div>
      </div>
    </div>
  );
}

export default CommunityPosts;
