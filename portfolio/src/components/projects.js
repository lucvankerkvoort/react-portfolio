import React from "react";
import { projectList } from "./projectList";

function Projects() {
  return (
    <div className="projects">
      {projectList.map(element, (i) => {
        <div>
          <h2>{element.name}</h2>
        </div>;
      })}
    </div>
  );
}

export default Projects;
