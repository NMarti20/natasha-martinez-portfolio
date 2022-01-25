import React from "react";
import { Link } from "react-router-dom";
import projectImg from "../../assets/Home/projectImg.jpeg";
import "./_projectItem.scss";

function ProjectItem({
  img = projectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
}) {
  return (
    <div>
      {/* fix link issue */}
      {/* <Link to="/projects" className="projectItem__img"> */}
      <img src={img} alt="project" className="projectItem__img" />
      {/* </Link> */}
      <div className="projectItem__info">
        {/* <Link to = '#'> */}
        <h3 className="projectItem__title">{title}</h3>
        {/* </Link> */}
        <p className="projectItem__desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
