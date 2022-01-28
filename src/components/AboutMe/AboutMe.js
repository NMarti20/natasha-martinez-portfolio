import "./_aboutMe.scss";
import gradPic from "../../assets/Home/grad-pic.jpg";

import React from "react";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about__pic-container">
        <img className="about__grad-pic" src={gradPic} alt="My graduation" />
      </div>

      <div className="about__description-container">
        <h2 className="about__title"> About Me </h2>
        <p className="about__desc">
          <span className="about__span"> Hello!</span> I am a San Francisco Bay
          Area native who graduated from San Jose State University with a
          Bachelor of Science degree in Economics. During my time in college, I
          developed a new passion for coding when I took my first Java course,
          and it was then that I realized I wanted to get into full-stack
          development. After graduating, I have been actively involved in
          creating scalable projects and collaborating with fellow full-stack
          developers. Not only do I revel in building scalable websites, but in
          my free time, I enjoy playing basketball, going on hikes, and finding
          new activities to experience.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
