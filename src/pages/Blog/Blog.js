import React from "react";
import pic1 from "../../assets/react.png";
import pic2 from "../../assets/html.jpg";
import pic3 from "../../assets/nextjs.jpg";
import pic4 from "../../assets/redux.jpg";
import "./Blog.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="px-5 py-5">
      <h2 className="text-3xl flex items-center font-bold ">Blogs</h2>
      <hr className="w-28 mt-4" />
      <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 mt-10">
        <div
          className="card border border-cyan-500  p-2 shadow-xl"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
        >
          <div className="blog-body">
            <img src={pic1} alt="Avatar" className="image w-full" />
            <div className="overlay">
              <div className="text">
                <h2 className="text-2xl pb-3 font-bold text-white">
                  Explore React Hook
                </h2>
                <a
                  href="https://medium.com/@Thohidul_islam/react-hooks-e4e3f78e50a2"
                  target="_blank"
                >
                  <button className="btn btn-white">Show Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border border-cyan-500   p-2 shadow-xl"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
        >
          <div className="blog-body h-full">
            <div className="">
              <img src={pic2} alt="Avatar" className="image w-full h-full" />
            </div>
            <div className="overlay">
              <div className="text">
                <h2 className="text-2xl pb-3 font-bold text-white">
                  Some Commonly Used HTML Tags
                </h2>
                <a
                  href="https://medium.com/@Thohidul_islam/10-commonly-used-html-tags-933a61b545f6"
                  target="_blank"
                >
                  <button className="btn btn-white">Show Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border border-cyan-500  p-2 shadow-xl"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
        >
          <div className="blog-body">
            <img src={pic3} alt="Avatar" className="image w-full" />
            <div className="overlay">
              <div className="text">
                <h2 className="text-2xl pb-3 font-bold text-white">
                  Explore React Hook
                </h2>
                <a
                  href="https://medium.com/@Thohidul_islam/react-hooks-e4e3f78e50a2"
                  target="_blank"
                >
                  <button className="btn btn-white">Show Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border border-cyan-500  p-2 shadow-xl"
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
        >
          <div className="blog-body h-full">
            <img src={pic4} alt="Avatar" className="image h-full w-full" />
            <div className="overlay">
              <div className="text">
                <h2 className="text-2xl pb-3 font-bold text-white">
                  Explore React Hook
                </h2>
                <a
                  href="https://medium.com/@Thohidul_islam/react-hooks-e4e3f78e50a2"
                  target="_blank"
                >
                  <button className="btn btn-white">Show Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
