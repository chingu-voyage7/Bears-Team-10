import React from 'react';
import Projects from '../Projects/Projects';
import "./CommunityProjects.css"

const CommunityProjects = ({ projectList }) => {
  return (
    <div class="contentContainer">
      <div class = "contentAndTitles" >
        <div class="projectsTitle">
          <span > Project List </span>
        </div>
        <div class="projectList" > {
          projectList.map((project, i) => {
            return (
              <Projects key={i}
                id={projectList[i].id}
                title={projectList[i].title}
                desc={projectList[i].desc}
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
