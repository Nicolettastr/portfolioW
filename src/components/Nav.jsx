import React from "react";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
    { name: "Projects", link: "/projects" },
  ];

  const location = useLocation();

  return (
    <div className="banner_wrapper vw-100 d-flex space-around align-center">
      <a
        href="/"
        className={`gn_logo ${location.pathname === "/" ? "logo" : "nav_logo"}`}
      >
        NS
      </a>
      <div className="banner_links_wrapper w-100 d-flex space-around align-center">
        <ul className="banner_links w-100 d-flex space-around">
          {links.map((link) => (
            <a
              key={`banner-${link.name}`}
              className={`gn_links ${
                location.pathname === "/" ? "links" : "nav_links"
              }`}
              href={link.link}
            >
              <li>{link.name.toUpperCase()}</li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
