import React from "react";

import NavItem from "../../molecules/NavItem/NavItem";
import "./Navigation.css";

const Navigation = props => (
  <ul className="navigation">
    {React.Children.map(props.children, child => React.cloneElement(child))}
  </ul>
);

Navigation.Item = props => <NavItem {...props} />;

export default Navigation;
