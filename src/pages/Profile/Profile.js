import React from "react";
import "./profile.css";
import {
  FaDownload,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import profile from "../../assets/thohid.png";
const Profile = () => {
  return (
    <div className=" profile text-center sticky top-5">
      <div>
        <div className="avatar mt-5">
          <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profile} alt="picture" />
          </div>
        </div>

        <h2 className="text-3xl mt-2 font-bold">Thohidul Islam</h2>
        <p>
          <button className="btn btn-sm mt-2">Full Stack Developer</button>
        </p>
        <div className="flex gap-2 mt-3 justify-center">
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a
              href="https://www.linkedin.com/in/thohidul-islam/"
              target="_blank"
            >
              <FaLinkedinIn className="text-white text-xl"></FaLinkedinIn>
            </a>
          </div>
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a href="https://github.com/Towhid7890" target="_blank">
              <FaGithub className="text-white text-xl"></FaGithub>
            </a>
          </div>
          <div className="shadow-lg rounded p-3 bg-zinc-800 hover:bg-pink-600">
            <a
              href="https://www.facebook.com/thohidulIslamcse/"
              target="_blank"
            >
              <FaFacebookF className="text-white text-xl"></FaFacebookF>
            </a>
          </div>
        </div>
        <div className=" text-start  bg-gray-900 mt-4  shadow-2xl rounded-xl p-4  shadow-lg  bio-data  mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaPhoneAlt className="text-rose-500 text-xl"></FaPhoneAlt>
            </div>
            <div className="">
              <p>Phone</p>
              <p className="font-bold">+880 1620987544</p>
            </div>
          </div>
          <hr className="" />
          <div className="flex gap-3 items-center mb-3 mt-2">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaEnvelope className="text-rose-500 text-xl"></FaEnvelope>
            </div>
            <div className="">
              <p>Email</p>
              <p className="font-bold">thohidcse7890@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-2 mb-3">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaMapMarkerAlt className="text-rose-500 text-xl"></FaMapMarkerAlt>
            </div>
            <div className="">
              <p>Location</p>
              <p className="font-bold">Chittagong, Bangladesh</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-2">
            <div className="shadow-lg rounded p-3 h-12 bg-black">
              <FaFacebookF className="text-rose-500 text-xl"></FaFacebookF>
            </div>
            <div className="">
              <p>Birth Date</p>
              <p className="font-bold">20 January,1998</p>
            </div>
          </div>
        </div>
        <div className="py-3">
          <a
            href="https://drive.google.com/file/d/1Mh-Be8N9aeDUXzcnsYA2S7mUCroZCP_V/view?usp=share_link"
            target="_blank"
          >
            <button className="btn text-white w-3/5 bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500">
              <FaDownload className="mr-2"></FaDownload>Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
