import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

// eslint-disable-next-line react/prefer-stateless-function
class Projects extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.onClickPosts = this.onClickPosts.bind(this);
  // }

  // onClickPosts() {
  //   // const index = parseInt(this.index, 10);
  //   this.setState({
  //     displayPosts: true
  //   });
  // }

  render() {
    const { title, desc } = this.props;
    return (
      <div className="project">
        <div
          className="projectText"
          role="presentation"
          // onClick={onClickPosts}
          // onClick={this.setRedirect}
        >
          <div className="projectTitle">
            <span>{title}</span>
          </div>
          <div className="projectDescription">
            <span>{desc}</span>
          </div>
          Click to show posts
        </div>
      </div>
    );
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  // onClickPosts: PropTypes.func.isRequired,
};

export default Projects;
