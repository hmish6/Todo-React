import React from "react";

import Anchor from "../../atoms/Anchor/Anchor";
import "./NavItem.css";
import List from "../../atoms/List/List";

const NavItem = ({ isActive, ...props }) => {
  return (
    <List className={`nav-item ${isActive ? "active" : ""}`}>
      <Anchor {...props} />
    </List>
  );
};

export default NavItem;
