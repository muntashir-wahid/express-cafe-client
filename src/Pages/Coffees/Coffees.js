import React, { Fragment } from "react";
import Banner from "../../Components/Banner/Banner";

const banner = {
  bgImg:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1037&q=80",
  className: "bg-canter min-h-screen",
  bannerTitle: "Hello there",
  bannerContent:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quam maxime neque consequatur reiciendis aliquid facilis fuga sint sit quod?",
};

const Coffees = () => {
  return (
    <Fragment>
      <header>
        <Banner {...banner} />
      </header>
    </Fragment>
  );
};

export default Coffees;
