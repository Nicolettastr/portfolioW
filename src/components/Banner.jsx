import React from "react";
import "../styles/banner.css";
import { FaAngleDown } from "react-icons/fa6";

const Banner = () => {
  const links = [
    { name: "Home", link: "" },
    { name: "About", link: "" },
    { name: "Work", link: "" },
    { name: "Contact", link: "" },
    { name: "Projects", link: "" },
  ];

  return (
    <div className="banner d-flex d-column align-center space-between">
      <div className="banner_bg"></div>
      <div className="banner_wrapper vw-100 d-flex space-around align-center">
        <a href="" className="logo">
          NS
        </a>
        <div className="banner_links_wrapper w-100 d-flex space-around align-center">
          <ul className="banner_links w-100 d-flex space-around">
            {links.map((link) => (
              <a className="links" href="">
                <li>{link.name.toUpperCase()}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="banner_info d-flex d-column align-center w-100">
        <h1>Nicole Struggia</h1>
        <p>Software engineer</p>
      </div>
      <span>
        <FaAngleDown />
      </span>
    </div>
  );
};

export default Banner;
