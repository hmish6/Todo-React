import React from "react";

import Close from "../../atoms/Close/Close";
import "./ListItem.css";
import List from "../../atoms/List/List";

const ListItem = ({ text, action, type, ...props }) => (
  <List className={`list list-${type}`} {...props}>
    <span>{text}</span>
    <Close text={action} />
  </List>
);

export default ListItem;
