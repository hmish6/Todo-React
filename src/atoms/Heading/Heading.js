import React from "react";
import "./Heading.css";

const Heading = ({ level, text, ...props }) => {
  switch (level) {
    case 1:
      return (
        <h1 className="heading-1" {...props}>
          {text}
        </h1>
      );

    default:
      return (
        <h1 className="heading-1" {...props}>
          {text}
        </h1>
      );
  }
};

export default Heading;
