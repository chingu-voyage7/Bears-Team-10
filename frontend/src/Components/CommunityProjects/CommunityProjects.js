import React from 'react';
import Projects from '../Projects/Projects';
import "./CommunityProjects.css"

const CommunityProjects = ({ projectList, posts }) => {
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
                posts={posts}
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
