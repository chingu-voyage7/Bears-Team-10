import React from 'react';
import "./Projects.css";
// import CommunityPosts from '../CommunityPost/CommunityPosts';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.onClickPosts = this.onClickPosts.bind(this);
    }
  

    onClickPosts() {
    var index = parseInt(this.props.index, 10);
    this.props.onRouteChange('posts', index)
  }
 
  render() {

    return (
      <div className="project">
        <div className="projectText" onClick={ this.onClickPosts }>
          <div className="projectTitle" >
            <span > {this.props.title} </span>
          </div>
          <div className="projectDescription" >
            <span > {this.props.desc} </span>
          </div>
          Click to show posts
          </div>
      </div>
    );
  }
}

export default Projects;
