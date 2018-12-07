import React from 'react';
import "./Projects.css";
import ProjectPosts from "../ProjectPosts/ProjectPosts"

class Projects extends React.Component {

  render() {

    return (
      <div className="project">
        <div className="projectText" >
          <div className="projectTitle" >
            <span > {this.props.title} </span>
          </div>
          <div className="projectDescription" >
            <span > {this.props.desc} </span>
          </div>
          <div class="projectList" > {
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
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
