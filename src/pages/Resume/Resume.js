import React from "react";
import tail from "../../assets/tailwind.png";
import {
  FaBootstrap,
  FaCss3,
  FaCss3Alt,
  FaEnvira,
  FaFire,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPushed,
  FaReact,
} from "react-icons/fa";
import "./resume.css";
import Experience from "./Experience";
const Resume = () => {
  return (
    <div className="pl-5 py-5 px-5">
      <h3 className="text-3xl font-bold ">Resume </h3>
      <hr className="w-28 mt-4" />
      <div className="mt-4">
        <h1 className="font-bold text-rose-500 py-3 text-3xl">Skills :</h1>
        <div
          className="flex flex-wrap gap-2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaHtml5 className="text-4xl font-bold text-white"></FaHtml5>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">HTML</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaCss3 className="text-4xl font-bold text-white"></FaCss3>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">CSS</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaBootstrap className="text-4xl font-bold text-white"></FaBootstrap>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Bootstrap</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaCss3Alt className="text-4xl font-bold text-white"></FaCss3Alt>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Tailwind</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaJsSquare className="text-4xl font-bold text-white"></FaJsSquare>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">JavaScript</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaReact className="text-4xl font-bold text-white"></FaReact>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">React</p>
          </div>
        </div>
        <div
          className="flex flex-wrap gap-2 mt-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaNodeJs className="text-4xl font-bold text-white"></FaNodeJs>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Node</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaJsSquare className="text-4xl font-bold text-white"></FaJsSquare>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Express</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaEnvira className="text-4xl font-bold text-white"></FaEnvira>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">MongoDB</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaGithub className="text-4xl font-bold text-white"></FaGithub>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Git</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaFire className="text-4xl font-bold text-white"></FaFire>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Firebase</p>
          </div>
          <div className="icon text-center rounded-xl w-24 md:w-28">
            <div className="avatar pt-2">
              <div className="rounded">
                <FaPushed className="text-4xl font-bold text-white"></FaPushed>
              </div>
            </div>
            <p className="text-white text-lg mt-0 font-bold">Netlify</p>
          </div>
        </div>
      </div>
      <Experience></Experience>
      <div className="mt-4">
        <h2 className="text-3xl font-bold text-rose-500">Certification :</h2>
        <p className="text-lg mt-4">1. Complete Web Development</p>
        <p className="text-lg">2. Think In a Redux Way</p>
      </div>
    </div>
  );
};

export default Resume;
