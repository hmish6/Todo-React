import React from "react";
import { Link } from "react-router-dom";
import "./Anchor.css";

const Anchor = ({ text, to, className, ...props }) => {
  return (
    <Link to={to} className={`anchor ${className}`} {...props}>
      {text}
    </Link>
  );
};

export default Anchor;
