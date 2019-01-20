import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './CommunityProjects.css';
import { Card } from 'antd';

const gridStyle = {
  width: '98vw',
  textAlign: 'left',
  margin: '2px'
};

const CommunityProjects = ({
  allProjects,
}) => (
  <div className="contentContainer">
    <div className="contentAndTitles">
      <div className="allCardsTitle">
        <h1>Community Projects</h1>
      </div>
      <div className="projectList">
          {
            allProjects.length
            ? allProjects.map(project => (
              <div className="cardItem">
                            <Link to={`/project/${project.project_id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <Card title={(() => (
                <div className="cardTitle">
                <div><h2>{project.project_title.toUpperCase()}</h2></div>
                <div>{project.creation_timestamp.substring(0,10)}</div>
                </div>
              ))()}
              bordered={true}
              style={gridStyle}>

                <div className="cardDescription">{project.project_description}</div>

            </Card>
                        </Link>
            </div>
              ))
            : 'Nothing here'}

      </div>
    </div>
  </div>
);

CommunityProjects.propTypes = {
  allProjects: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    allProjects: state.projects.allProjects,
  };
}

export default connect(
  mapStateToProps,
  null
)(CommunityProjects);
