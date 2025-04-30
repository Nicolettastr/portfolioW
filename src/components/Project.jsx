import React from "react";
import "../styles/project.css";
import MoreBtn from "./MoreBtn";

const Project = () => {
  const projects = [
    {
      name: "New portfolio web",
      link: "",
    },
    {
      name: "Airbnb clone",
      link: "https://airclone-two.vercel.app/",
    },
    {
      name: "First Portfolio web",
      link: "https://portfolio-beryl-three-51.vercel.app/",
    },
    {
      name: "Netflix clone",
      link: "https://netclone-seven.vercel.app/",
    },

    {
      name: "Pethouse",
      link: "https://sample-service-name-f7fr.onrender.com/",
    },
    {
      name: "game project",
      link: "https://javascript-game-project.vercel.app/",
    },
    {
      name: "3D solar system",
      link: "https://solar-system-chi-ochre.vercel.app/",
    },
    {
      name: "3D ball",
      link: "https://3d-ball.vercel.app/",
    },
    {
      name: "Star wars api",
      link: "https://starwars-kappa-five.vercel.app/",
    },
    {
      name: "Dragon ball api",
      link: "https://dragon-ball-api-neon.vercel.app/",
    },
    {
      name: "Todo list",
      link: "https://to-do-list-react-v2-aiq43pp6l-nicolettastr.vercel.app/",
    },
    {
      name: "Calculator",
      link: "https://calculator-coder-byte.vercel.app/",
    },
  ];

  return (
    <section className="projects vw-100">
      <h3 className="gl-title projects-title">Learning through projects</h3>
      <div className="project-container">
        {projects.map((project, index) => {
          while (index <= 5) {
            return (
              <div
                key={project.name}
                className="project-wrapper flex justify-center align-center w-100"
              >
                <a
                  className="project-link d-flex justify-center align-center w-100"
                  href={project.link}
                  target="_blank"
                >
                  {project.name.toUpperCase()}
                </a>
              </div>
            );
          }
        })}
      </div>
      <div className="more_btn_wrapper">
        <MoreBtn />
      </div>
    </section>
  );
};

export default Project;
