import React from "react";
import Banner from "../components/Banner.jsx";
import About from "../components/About.jsx";
import Work from "../components/Work.jsx";
import Project from "../components/Project.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Work />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
