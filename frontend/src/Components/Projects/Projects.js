import React from 'react';
import "./Projects.css";
import ProjectPosts from "../ProjectPosts/ProjectPosts";
import NewPost from "../NewPost/NewPost";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      postsVisible: false
    }
  }

  onClick() {
    this.setState(prevState => ({ postsVisible: !prevState.postsVisible }));
  }

  render() {

    return (
      <div className="project">
        <div className="projectText" onClick={() => this.onClick()}>
          <div className="projectTitle" >
            <span > {this.props.title} </span>
          </div>
          <div className="projectDescription" >
            <span > {this.props.desc} </span>
          </div>
          Click to show /hide posts
        </div>
        {
          this.state.postsVisible
            ? <div className="postList" >
              {
                this.props.posts.map((post, i) => {
                  return (
                    <ProjectPosts key={i}
                      id={this.props.posts[i].id}
                      name={this.props.posts[i].name}
                      message={this.props.posts[i].message}
                    />
                  );
                })
              }
              <NewPost />
            </div>
            : null
        }
      </div>
    );
  }
}

export default Projects;
