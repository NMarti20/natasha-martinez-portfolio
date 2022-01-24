import React from "react";
import { Link } from "react-router-dom";
import projectImg from "../../assets/Home/projectImg.jpeg";
import "./_projectItem.scss";

function ProjectItem() {
  return (
    <div>
      {/* fix link issue */}
      {/* <Link to="/projects" className="projectItem__img"> */}
      <img src={projectImg} alt="project" className="projectItem__img" />
      {/* </Link> */}
      <div className="projectItem__info">
        {/* <Link to = '#'> */}
        <h3 className="projectItem__title">Project 1</h3>
        {/* </Link> */}
        <p className="projectItem__desc">
          loren ipusim is the way to go when needing a temporary placeholder.
        </p>
      </div>
    </div>
  );
}

export default ProjectItem;
