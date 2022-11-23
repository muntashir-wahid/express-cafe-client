import React from "react";

const Loader = ({ className }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;
