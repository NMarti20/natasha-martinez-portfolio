import "./_skills.scss";
import Html from "../../assets/Home/html5.png";
import Css from "../../assets/Home/css3.png";
import Js from "../../assets/Home/js.png";
import Sass from "../../assets/Home/sass.svg";
import Node from "../../assets/Home/node.png";
import React from "../../assets/Home/react.png";
import Express from "../../assets/Home/express.png";
import Npm from "../../assets/Home/npm.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title-container">
        <h2 className="skills__title">Skills</h2>
      </div>

      <div className="skills__skills-container">
        <div className="skills__img-container">
          <img className="skills__img" src={Html} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Css} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Js} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Sass} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={React} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Node} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Express} />
        </div>

        <div className="skills__img-container">
          <img className="skills__img" src={Npm} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
