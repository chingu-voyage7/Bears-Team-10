import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CommunityProjects.css';
import { Card, Row, Col } from 'antd';

const CommunityProjects = props => {
  const {
    allProjects,
    match: { path },
  } = props;

  const indCommunityPersonal =
    path === '/community-projects' ? 'community' : 'personal';

  return (
    <div className="contentContainer">
      <div className="contentAndTitles">
        <div className="allCardsTitle">
          {indCommunityPersonal === 'community' ? (
            <h1>Community Projects</h1>
          ) : (
            <h1>Personal Projects</h1>
          )}
        </div>
        <Row>
          <Col offset={4} span={16}>
            <div className="projectList">
              {allProjects.length
                ? allProjects
                    .filter(
                      project =>
                        indCommunityPersonal === 'community' ||
                        (indCommunityPersonal === 'personal' &&
                          project.project_owner_user_id === props.user.user.id)
                    )
                    .map(project => (
                      <div className="cardItem" key={project.project_id}>
                        <Link
                          to={`/project/${project.project_id}`}
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          <Card
                            hoverable
                            title={(() => (
                              <div className="cardTitle">
                                <div>
                                  <h2>{project.project_title.toUpperCase()}</h2>
                                </div>
                                <div>
                                  {project.creation_timestamp.substring(0, 10)}
                                </div>
                              </div>
                            ))()}
                            bordered
                          >
                            <div className="cardDescription">
                              {project.project_description}
                            </div>
                          </Card>
                        </Link>
                      </div>
                    ))
                : '<(^_^<) Nothing here (>^_^)>'}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

CommunityProjects.propTypes = {
  allProjects: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    allProjects: state.projects.allProjects,
    user: state.auth.user,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CommunityProjects)
);
