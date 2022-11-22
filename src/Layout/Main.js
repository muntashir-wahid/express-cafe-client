import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Main;
