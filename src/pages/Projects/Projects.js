import React from "react";
import "./projects.css";
import pic1 from "../../assets/project1.png";
import pic2 from "../../assets/pic2.jpg";
import pic3 from "../../assets/pic3.jpg";
import pic4 from "../../assets/pic4.jpg";
import modal1 from "../../assets/modal1.png";
import modal12 from "../../assets/modal12.png";
import modal13 from "../../assets/modal13.png";
import modal2 from "../../assets/modal2.png";
import modal22 from "../../assets/modal22.png";
import modal23 from "../../assets/modal23.png";
import modal3 from "../../assets/modal3.png";
import modal32 from "../../assets/modal32.png";
import modal33 from "../../assets/modal33.png";
import dr1 from "../../assets/dr1.png";
import dr2 from "../../assets/dr2.png";
import { PhotoProvider, PhotoView } from "react-photo-view";
const Projects = () => {
  // const projects = [{ id: 1, name: "DorkarShop (e-commerce)" }];
  return (
    <div className="py-8">
      <h3 className="text-3xl font-bold ">All Project</h3>
      <hr className="w-28 mt-4" />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="project" data-aos="zoom-in">
          <img src={pic4} alt="Avatar" className="image1" />
          <div className="overlay1">
            <div className="text1">
              <label htmlFor="project4" className="btn">
                Show Details
              </label>
            </div>
          </div>
        </div>
        <div className="project" data-aos="zoom-in">
          <img src={pic1} alt="Avatar" className="image1" />
          <div className="overlay1">
            <div className="text1">
              <label htmlFor="project1" className="btn">
                Show Details
              </label>
            </div>
          </div>
        </div>
        <div className="project" data-aos="zoom-in">
          <img src={pic2} alt="Avatar" className="image1" />
          <div className="overlay1">
            <div className="text1">
              <label htmlFor="project2" className="btn">
                Show Details
              </label>
            </div>
          </div>
        </div>
        <div className="project" data-aos="zoom-in">
          <img src={pic3} alt="Avatar" className="image1" />
          <div className="overlay1">
            <div className="text1">
              <label htmlFor="project3" className="btn">
                Show Details
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* modal body for project one */}
      <input type="checkbox" id="project1" className="modal-toggle" />
      <div className="modal modal-middle  sm:modal-middle">
        <div className="modal-box border bg-slate-900 text-white">
          <label
            htmlFor="project1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl mb-2">Gadget Shop Website</h3>

          <li>
            Different link for user and admin panel. Admin panel is fully
            protected.
          </li>
          <li>Payment system implemented using Stripe.</li>

          <p className="py-4">
            This project is developed with html, CSS, tailwind, daisy UI,
            JavaScript, React, node JS, Express JS, MongoDB and Firebase
            authentication.
          </p>
          <div className="grid  gap-5 grid-cols-3 w-full">
            <PhotoProvider>
              <PhotoView src={modal1}>
                <img className="h-28 w-28" src={modal1} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal12}>
                <img className="h-28 w-28" src={modal12} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal13}>
                <img className="h-28 w-28" src={modal13} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <a href="https://final-assignment-ccd65.web.app/" target="_blank">
            <button className="btn btn-error mt-4  w-28 font-bold mr-3">
              Live
            </button>
          </a>
          <a
            href="https://github.com/Towhid7890/gadget-client-side"
            target="_blank"
          >
            <button className="btn btn-error mr-3 font-bold">
              Client-Side
            </button>
          </a>
          <a
            href="https://github.com/Towhid7890/gadget-server-side"
            target="_blank"
          >
            <button className="btn btn-error  font-bold">Server-Side</button>
          </a>
        </div>
      </div>
      {/* modal body for project 2 */}
      <input type="checkbox" id="project2" className="modal-toggle" />
      <div className="modal modal-middle  sm:modal-middle">
        <div className="modal-box border bg-slate-900 text-white">
          <label
            htmlFor="project2"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl mb-2">
            PhotoGraphy Service Website
          </h3>
          <li>Explore different types of Services of photography.</li>
          <li>Users can reviews this photography.</li>
          <li>Users also add their services.</li>

          <p className="py-4">
            This project is developed with html, CSS, tailwind, daisy UI,
            JavaScript, React, node JS, Express JS, MongoDB and Firebase
            authentication.
          </p>
          <div className="grid  gap-5 grid-cols-3 w-full">
            <PhotoProvider>
              <PhotoView src={modal2}>
                <img className="h-28 w-28" src={modal2} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal22}>
                <img className="h-28 w-28" src={modal22} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal23}>
                <img className="h-28 w-28" src={modal23} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <a href="https://fullstack-assignment-11.web.app/" target="_blank">
            <button className="btn btn-error mt-4  w-28 font-bold mr-3">
              Live
            </button>
          </a>
          <a
            href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Towhid7890"
            target="_blank"
          >
            <button className="btn btn-error mr-3 font-bold">
              Client-Side
            </button>
          </a>
          <a
            href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-Towhid7890"
            target="_blank"
          >
            <button className="btn btn-error  font-bold">Server-Side</button>
          </a>
        </div>
      </div>
      {/* modal body for project 3 */}
      <input type="checkbox" id="project3" className="modal-toggle" />
      <div className="modal modal-middle  sm:modal-middle">
        <div className="modal-box border bg-slate-900 text-white">
          <label
            htmlFor="project3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl mb-2">BootCamp Learner</h3>
          <li>Explore different types of Courses</li>
          <li>Users can reviews this Courses.</li>
          <li>Users also access the course</li>

          <p className="py-4">
            This project is developed with html, CSS, tailwind, daisy UI,
            JavaScript, React, node JS, Express JS, MongoDB and Firebase
            authentication.
          </p>
          <div className="grid  gap-5 grid-cols-3 w-full">
            <PhotoProvider>
              <PhotoView src={modal3}>
                <img className="h-28 w-28" src={modal3} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal32}>
                <img className="h-28 w-28" src={modal32} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal33}>
                <img className="h-28 w-28" src={modal33} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <a href="https://bootcamp-12b6c.web.app/" target="_blank">
            <button className="btn btn-error mt-4 w-28 font-bold mr-3">
              Live
            </button>
          </a>
          <a
            href="https://github.com/Towhid7890/bootcamp-learner"
            target="_blank"
          >
            <button className="btn btn-error mr-3 font-bold">
              Client-Side
            </button>
          </a>
          <a href="https://github.com/Towhid7890/bootcamp-learner-server">
            <button className="btn btn-error  font-bold">Server-Side</button>
          </a>
        </div>
      </div>
      {/* modal 4  */}
      <input type="checkbox" id="project4" className="modal-toggle" />
      <div className="modal modal-middle  sm:modal-middle">
        <div className="modal-box border bg-slate-900 text-white">
          <label
            htmlFor="project4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl mb-2">DorkarShop(e-commerce)</h3>

          <li>
            Different link for user and admin panel. Admin panel is fully
            protected.
          </li>
          <li>Payment system implemented using SSL.</li>

          <p className="py-4">
            This project is developed with html, CSS, tailwind, daisy UI,
            JavaScript, React,TypeScript, node JS, Express JS, MongoDB and
            Firebase authentication.
          </p>
          <div className="grid  gap-5 grid-cols-3 w-full">
            <PhotoProvider>
              <PhotoView src={dr1}>
                <img className="h-28 w-28" src={dr1} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={dr2}>
                <img className="h-28 w-28" src={dr2} alt="" />
              </PhotoView>
            </PhotoProvider>
            <PhotoProvider>
              <PhotoView src={modal13}>
                <img className="h-28 w-28" src={modal13} alt="" />
              </PhotoView>
            </PhotoProvider>
          </div>

          <a href="https://dork-shop.web.app/" target="_blank">
            <button className="btn btn-error mt-4  w-28 font-bold mr-3">
              Live
            </button>
          </a>
          <a
            href="https://github.com/TheOpenAi/DorkarShop-Client"
            target="_blank"
          >
            <button className="btn btn-error mr-3 font-bold">
              Client-Side
            </button>
          </a>
          <a
            href="https://github.com/TheOpenAi/DorkarShop-Server"
            target="_blank"
          >
            <button className="btn btn-error  font-bold">Server-Side</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
