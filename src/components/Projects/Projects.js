import "./_projects.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../../assets/data/projects";
import ProjectItem from "../ProjectItem/ProjectItem";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const Projects = () => {
  return (
    <div className="projects">
      <h3 className="projects__title">Projects</h3>

      <div className="projects__allItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },

            768: { slidesPerView: 2 },

            1280: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => {
            if (index >= 5) return;
            return (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  title={project.name}
                  img={project.img}
                  desc={project.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
