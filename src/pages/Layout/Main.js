import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
import Header from "./../Header/Header";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="lg:flex px-2 lg:px-5 mt-5">
        <div className="profile-container ">
          <Profile></Profile>
        </div>
        <div className="details pl-0  md:pl-8">
          <div className="hidden lg:flex">
            <Menu></Menu>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
