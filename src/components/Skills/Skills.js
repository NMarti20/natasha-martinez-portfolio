import "./_skills.scss";
import Html from "../../assets/Home/html5.png";
import Css from "../../assets/Home/css3.png";
import Js from "../../assets/Home/js.png";
import Sass from "../../assets/Home/sass.svg";
import Node from "../../assets/Home/node.png";
import React from "../../assets/Home/react.png";
import Express from "../../assets/Home/expressJS.png";
import Npm from "../../assets/Home/npm.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title-container">
        <h2 className="skills__title">Skills</h2>
      </div>

      <div className="services">
        <div className="services-cell">
          <img className="services-cell__img" src={Html} />
        </div>

        <img src={Css} />

        <img src={Js} />

        <img src={Sass} />

        <img src={React} />

        <img src={Node} />

        <img src={Express} />

        <img src={Npm} />
      </div>
    </div>
  );
};

export default Skills;
