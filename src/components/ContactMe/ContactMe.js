import React from "react";
import "./_contactMe.scss";

function ContactMe() {
  return (
    <div className="contactMe">
      <h2 className="contactMe__title">Contact Me</h2>
      <div className="contactMe__info-container">
        <h3 className="contactMe__desc">
          I am currently looking for new opportunities! If you have requests or
          questions, don't hesitate to reach out to me, and I'll try my best to
          get back to you in a timely manner.
        </h3>
        <div className="contactMe__icons">
          <a href="https://github.com/NMarti20" className="home__icons-icon">
            <i className="fab fa-github "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/natasha-a-martinez/"
            className="home__icons-icon"
          >
            <i className="fab fa-linkedin "></i>
          </a>
          <a
            href="mailto:natasha.martinez1117@gmail.com"
            className="home__icons-icon"
          >
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
