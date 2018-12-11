import React from 'react';
import Projects from '../Projects/Projects';
import "./CommunityProjects.css"

// Currently using dummy file for projectList eventually each user will have a unique list of projects? that will be retrieved from database. Also using a dummy file for posts this will also be retrieved from the database and will be unique for each project.

// Presumably after login the screen will include the list of projects, which when clicked on will open up the posts for that project including a textarea box for submitting a new post. I have not yet done the functionality for saving a post. I assume we want to store info on who made the post and when. Right now I just have a date but again I assume we will want date and time.

const CommunityProjects = ({ projectList, onRouteChange }) => {
  return (
    <div className="contentContainer">
      <div className = "contentAndTitles" >
        <div className="projectsTitle">
          <span > Project List </span>
        </div>
        <div className="projectList" > {
          projectList.map((project, i) => {
            return (
              <Projects key={i}
                id={projectList[i].id}
                title={projectList[i].title}
                desc={projectList[i].desc}
                onRouteChange={onRouteChange}
              />
            );
          })
        }

        </div>
      </div>
    </div>
  );
}

export default CommunityProjects;
