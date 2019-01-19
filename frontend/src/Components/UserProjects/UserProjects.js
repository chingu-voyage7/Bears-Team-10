import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Projects from '../CommunityProjects/Projects';
import './UserProjects.css';

const UserProjects = ({allProjects, user}) => {

  return (
    <div className="UserProjects">
        <div className="title">
           <h1>Your Projects</h1>
        </div>

       <div className="projectList">
       {
         allProjects.length ?
         allProjects.map(project => {
                        if(project.project_owner_user_id === user.id){
                          return (
                           <Link to={`/project/${project.project_id}`}>
                            <Projects project_id={project.project_id}
                              key={project.project_id}
                             />
                           </Link>
                         );
                        }
                      }
                     )
         : '<(^_^<) Nothing here (>^_^)>'
       }

       </div>

    </div>
  );
};


function mapStateToProps(state) {
  return {
    user: state.auth.user.user,
    allProjects: state.projects.allProjects,
  };
}

export default connect(
  mapStateToProps,
  null
)(UserProjects);
