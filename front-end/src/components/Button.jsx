import React from "react";
import "../assets/styles/components/Button.css";

const Button = ({ btnName, handleClick, icon }) => {
  return (
    <div className="box">
      <button className="button" onClick={() => handleClick()}>
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;
