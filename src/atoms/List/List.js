import React from "react";

import "./List.css";

const List = ({ children, className, ...props }) => (
  <li className={`li ${className ? className : ""}`} {...props}>
    {children}
  </li>
);

export default List;
