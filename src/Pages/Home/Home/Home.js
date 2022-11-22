import React from "react";
import Banner from "../../../Components/Banner/Banner";

const banner = {
  bgImg:
    "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80",
  className: "bg-right-top min-h-screen",
  bannerTitle: "Hello there",
  bannerContent:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero quam maxime neque consequatur reiciendis aliquid facilis fuga sint sit quod?",
};

const Home = () => {
  return (
    <section>
      <Banner {...banner} />
    </section>
  );
};

export default Home;
