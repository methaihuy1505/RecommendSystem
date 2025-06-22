import React from "react";
import SideBar from "./Layout/SideBar";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import "./Profile.css";
const Profile = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex mt-4">
        <SideBar />
        <div className="container-fluid">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Profile;
