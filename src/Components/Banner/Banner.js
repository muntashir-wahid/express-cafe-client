import React from "react";

const Banner = ({ bgImg, className, bannerTitle, bannerContent }) => {
  return (
    <div
      className={`hero ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{bannerTitle}</h1>
          <p className="mb-5">{bannerContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
