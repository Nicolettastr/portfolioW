import React from "react";
import "../styles/banner.css";
import { FaAngleDown } from "react-icons/fa6";
import Nav from "./Nav";

const Banner = () => {
  return (
    <div className="banner d-flex d-column align-center space-between">
      <div className="banner_bg"></div>
      <div className="banner_info d-flex d-column align-center justify-center w-100">
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
