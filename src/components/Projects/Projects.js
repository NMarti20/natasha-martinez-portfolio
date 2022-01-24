import "./_projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import projects from "../../assets/data/projects";

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__title">Projects</h3>

      <div className="projects__allItems">
        <Swiper>
          {projects.map((project, index) => {
            if (index >= 5) return;
            return <div>This is my project</div>;
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
