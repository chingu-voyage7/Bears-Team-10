import React from 'react';
import "./ProjectPosts.css";

class ProjectPosts extends React.Component {

  render() {
    return (
      <div className="project">
        <div className="projectText" >
          <div className="postName" >
            <span > {this.props.name} </span>
          </div>
          <div className="postMessage" >
            <span > {this.props.message} </span>
          </div>
          <div className="postDate" >
            <span > {this.props.date} </span>
          </div>
        </div>
      </div>
    );
  }
}


export default ProjectPosts;
