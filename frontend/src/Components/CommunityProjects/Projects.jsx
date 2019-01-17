import React from 'react';
import { connect } from 'react-redux';
import { fetchProjectCollaborators } from '../../redux/collaborators';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './Projects.css';
import WrappedAddCollaborator from './AddCollaborator';
import NewPost from '../CommunityPosts/NewPost';

// eslint-disable-next-line react/prefer-stateless-function
class Projects extends React.Component {

  render() {
    const project_id =
      this.props.project_id || this.props.match.params.project_id;
    const parentSource = this.props.project_id ? 'community' : 'individual';
    const thisProject = this.props.allProjects.filter(
      project => project.project_id === project_id
    );
    const collaborator = this.props.collaborators.filter(
      project =>
        project.project_id === project_id &&
        project.user_id === this.props.user.user.id
    );
    return (
      <div className="project">
        <div className="projectText" role="presentation">
          <div className="projectTitle">
            <span>
              {thisProject.length ? thisProject[0].project_title : ''}
            </span>
          </div>
          <div className="projectDescription">
            <span>
              {thisProject.length ? thisProject[0].project_description : ''}
            </span>
          </div>
          {parentSource === 'individual' ? (
            <div>
              <ul className="posts">
                {this.props.allPosts
                  .filter(post => post.project_id === project_id)
                  .map(post => (
                    <li>{post.post_content}</li>
                  ))}
              </ul>
              {thisProject.length &&
              this.props.user.user.id ===
                thisProject[0].project_owner_user_id 
                ? <NewPost projectId={project_id} />
                : [
                  thisProject.length && collaborator.length
                  ? <NewPost projectId={project_id} />
                  : (
                    ''
                  ),
                ]
              }
            </div>
          ) : (
            ''
          )}
        </div>
        {thisProject.length &&
        this.props.user.user.id === thisProject[0].project_owner_user_id ? (
          <WrappedAddCollaborator projectId={project_id} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allPosts: state.posts.allPosts,
    allProjects: state.projects.allProjects,
    collaborators: state.collaborators.collaborators,
    user: state.auth.user,
  };
}

export default connect(
  mapStateToProps,
  { fetchProjectCollaborators }
)(Projects);
