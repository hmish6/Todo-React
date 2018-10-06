import React from "react";
import "./Close.css";

const Close = ({ text, ...props }) => (
  <button className="close" {...props}>
    {text}
  </button>
);

export default Close;
