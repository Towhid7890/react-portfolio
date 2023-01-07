import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Resume from "../Resume/Resume";
import Projects from "./../Projects/Projects";

const Home = () => {
  return (
    <div>
      <About></About>
      <Resume></Resume>
      <Projects></Projects>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
