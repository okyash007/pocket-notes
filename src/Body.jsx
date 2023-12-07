import React from "react";
import { Outlet } from "react-router-dom";
import Buttons from "./buttons/Buttons";
import Modal from "./modal/modal";

const Body = () => {
  return (
    <div className="body">
      <Modal />
      <Buttons />
      <Outlet />
    </div>
  );
};

export default Body;
