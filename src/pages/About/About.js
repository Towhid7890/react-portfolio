import React from "react";
import Education from "./Education";

const About = () => {
  return (
    <div className="pl-5 mt-6">
      <h2 className="text-white font-bold text-4xl">About Me!</h2>
      <p className="py-5 mx-2">
        Hi, I’m Thohidul Islam.I'm an enthusiastic and self-motivated MERN stack
        developer. I am looking forward to contributing to an exciting and
        fast-moving company, and I feel I can do so with my skill,extensive
        knowledge, and creativity. I am meticulous and exact about everything I
        do, and I am particularly interested in web applications,
        programming-related projects. It is a true passion of mine to building
        state of the art, user-friendly websites and applications. I enjoy
        learning new tools and technology and putting myself to the test with
        new projects.
      </p>
      <Education></Education>
    </div>
  );
};

export default About;
