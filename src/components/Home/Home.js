import React from "react";
import Typical from "react-typical";
import "./_home.scss";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home__details">
        <div className="home__icons">
          <a href="https://github.com/NMarti20" className="home__icons-icon">
            <i className="fab fa-github "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/natasha-a-martinez/"
            className="home__icons-icon"
          >
            <i className="fab fa-linkedin "></i>
          </a>
        </div>

        <div className="home__details-name">Natasha Martinez</div>

        <div className="home__details-role">
          <p className="home__details-text">
            <h1>
              I'm &nbsp;
              <Typical
                loop={Infinity}
                steps={[
                  "a Full-Stack Developer",
                  1000,
                  "a Motivated Individual",
                  1000,
                  "a Basketball Enthusiast",
                  1000,
                ]}
              />
            </h1>

            <p className="home__details-tagline">
              {" "}
              With a passion for developing scalable <b>client</b> and{" "}
              <b>server</b> side applications.
            </p>
          </p>
        </div>

        <div className="home__btn-container">
          <a
            href="MartinezNatashaResume.pdf"
            download="MartinezNatashaResume.pdf"
          >
            <button className="home__btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}
