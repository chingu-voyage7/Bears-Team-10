import React from 'react';
import "./Projects.css";

class Projects extends React.Component {

  render() {

    return(
      <div className = "project">
        <div className="projectText" >
          <div className="projectTitle" >
            <span > {this.props.title} </span>
          </div>
          <div className="projectDescription" >
            <span > {this.props.desc} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
