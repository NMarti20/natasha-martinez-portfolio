import { v4 as uuidv4 } from "uuid";
import projectImg from "../../assets/Home/projectImg.jpeg";

const projects = [
  {
    id: uuidv4(),
    name: "Natasha Martinez Portfolio",
    desc: "Built my personal portfolio website, leveraging React, JS, HTML, CSS/SASS, Flexbox",
    img: projectImg,
  },

  {
    id: uuidv4(),
    name: "BrainFlix",
    desc: "Created a prototype for a new video streaming platform, leveraging React, JS, HTML, CSS/SASS, Flexbox, API, Postman, Axios, React Router, NodeJs, Express, Heroku",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "Simultaneous Timers",
    desc: "Built an app where you can set multiple timers at the same time, using React, JS, HTML, CSS/SASS",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "The Universe",
    desc: "Built an app using NASA's APOD API, using React, JS, HTML, CSS/SASS",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "BandSite",
    desc: "Built a website for an 'up-and-coming' band, leveraging, JS, HTML, CSS/SASS, Flexbox, DOM manipulation, API, Heroku ",
    img: projectImg,
  },
  {
    id: uuidv4(),
    name: "TravelSite",
    desc: "Created a travel destination website, leveraging HTML, CSS, and component thinking",
    img: projectImg,
  },
];

export default projects;
