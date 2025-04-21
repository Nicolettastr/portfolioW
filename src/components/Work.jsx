import React from "react";
import "../styles/work.css";
import { SiLinkedin } from "react-icons/si";
import { MdOutlinePhonelink } from "react-icons/md";
import MoreBtn from "./MoreBtn";

const Work = () => {
  const companies = [
    {
      name: "babel group",
      img: "/babel.png",
      link: "https://babelgroup.com/",
      linkedin: "https://www.linkedin.com/company/babel/posts/?feedView=all",
      description:
        "Global tech consultancy specializing in digital transformation through AI, cybersecurity, and cloud solutions",
    },
    {
      name: "sice",
      img: "/sice.png",
      link: "https://www.sice.com/",
      linkedin: "https://www.linkedin.com/company/sice/posts/?feedView=all",
      description:
        "Multinational leader in integrating technologies for managing public infrastructure, specializing in mobility, transport, energy, and smart urban services. ",
    },
    {
      name: "donair",
      img: "/donair.png",
      link: "https://donair.es/",
      description:
        "Family-owned company, specializing in a wide range of services like electrical work, cleaning, and air conditioning systems, with a focus on high-quality installations and maintenance.",
    },
  ];

  return (
    <section className="work">
      <h3 className="gl-title">Highlights from the Road</h3>
      <div className="logo_container w-100">
        {companies.map((company) => (
          <div className="card w-100">
            <figure className="logo_wrapper w-100">
              <img
                className="logo_img w-100"
                src={company.img}
                alt={company.img}
              />
              <span></span>
            </figure>
            <div className="company-info w-100">
              <h3>{company.name.toUpperCase()}</h3>
              <p>{company.description}</p>
              {company.linkedin ? (
                <a
                  className="work_icon"
                  target="_blank"
                  href={company.linkedin}
                >
                  <SiLinkedin />
                </a>
              ) : (
                ""
              )}
              <a className="work_icon" target="_blank" href={company.link}>
                <MdOutlinePhonelink />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="btn_wrapper">
        <MoreBtn />
      </div>
    </section>
  );
};

export default Work;
