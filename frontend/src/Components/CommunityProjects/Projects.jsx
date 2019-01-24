import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Timeline, Card } from 'antd';
import { connect } from 'react-redux';
import { fetchProjectCollaborators } from '../../redux/collaborators';
import './Projects.css';
import WrappedAddCollaborator from './AddCollaborator';
import NewPost from '../CommunityPosts/NewPost';

const { Item: TimelineItem } = Timeline;

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
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return (
      <div className="project">
        <Row>
          <div className="left-floating-description">
            <h3 className="projectDescription">
              <span>
                {thisProject.length ? thisProject[0].project_description : ''}
              </span>
            </h3>
          </div>
          <div className="collaborators">
            {thisProject.length &&
            this.props.user.user.id === thisProject[0].project_owner_user_id ? (
              <WrappedAddCollaborator projectId={project_id} />
            ) : (
              ''
            )}
          </div>
          <Col span={23} offset={1}>
            <div className="projectText" role="presentation">
              <h1 className="projectTitle">
                <span>
                  {thisProject.length ? thisProject[0].project_title : ''}
                </span>
              </h1>
            </div>

            {parentSource === 'individual' ? (
              <div>
                <ul className="posts">
                  <Timeline>
                    {this.props.allPosts
                      .filter(post => post.project_id === project_id)
                      .sort()
                      .reverse()
                      .map(post => (
                        <TimelineItem
                          key={post.post_id}
                          color={
                            post.post_creator_user_id ===
                            this.props.user.user.id
                              ? 'red'
                              : 'blue'
                          }
                        >
                          <Card
                            bordered={false}
                            bodyStyle={{ padding: '1em' }}
                            size="small"
                            title={(() => (
                              <div className="new-post-card-title">
                                <div>{post.username}</div>
                                <div>
                                  {new Date(
                                    post.creation_timestamp
                                  ).toLocaleString([], options)}
                                </div>
                              </div>
                            ))()}
                          >
                            <p>{post.post_content}</p>
                          </Card>
                        </TimelineItem>
                      ))}
                    <TimelineItem color="red">
                      <Card
                        style={{ padding: '10px' }}
                        bodyStyle={{ padding: '1em' }}
                        bordered={false}
                        size="small"
                        title={(() => (
                          <div className="new-post-card-title">
                            <div>{this.props.user.user.username}</div>
                          </div>
                        ))()}
                      >
                        {thisProject.length &&
                        this.props.user.user.id ===
                          thisProject[0].project_owner_user_id ? (
                            <NewPost projectId={project_id} />
                        ) : (
                          [
                            thisProject.length && collaborator.length ? (
                              <NewPost projectId={project_id} />
                            ) : (
                              ''
                            ),
                          ]
                        )}
                      </Card>
                    </TimelineItem>
                  </Timeline>
                </ul>
              </div>
            ) : (
              ''
            )}
          </Col>
        </Row>
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

Projects.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  allPosts: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  allProjects: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  collaborators: PropTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { fetchProjectCollaborators }
)(Projects);
