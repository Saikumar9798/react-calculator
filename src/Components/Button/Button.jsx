import React from "react";
import "./index.css";

const Button = (props) => {
  const { style, label, onClick, other } = props;
  return (
    <button
      className="btn"
      value={label}
      onClick={onClick}
      style={style}
      {...other}
    >
      {`${label}`}
    </button>
  );
};

export default Button;
