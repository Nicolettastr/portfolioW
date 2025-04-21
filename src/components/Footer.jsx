import React from "react";
import { SiLinkedin } from "react-icons/si";
import { MdOutlinePhonelink } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import "../styles/footer.css";

const Footer = () => {
  const links = [
    {
      icon: <SiLinkedin />,
      url: "https://www.linkedin.com/in/nicole-struggia/",
    },
    {
      icon: <MdOutlinePhonelink />,
      url: "https://ns-five-pi.vercel.app/",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Nicolettastr",
    },
  ];

  return (
    <section className="footer w-100 d-flex d-column">
      <span className="arrow-icon">
        <FaAngleUp />
      </span>
      <p className="gl-title">Find Me Around the Web</p>
      <div className="footer-wrapper w-100 d-flex justify-center">
        {links.map((link) => (
          <a href={link.url} target="_blank">
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
