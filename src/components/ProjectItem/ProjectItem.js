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
    <div className="projectItem">
      <img src={img} alt="project" className="projectItem__img" />

      <div className="projectItem__info">
        <h3 className="projectItem__title">{title}</h3>

        <p className="projectItem__desc">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
