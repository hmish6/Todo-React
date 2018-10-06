import React from "react";

import ListItem from "../../molecules/ListItem/ListItem";
import NoData from "../../organisms/NoData/NoData";
import "./ListBox.css";

const ListBox = props => (
  <ul className="task-list">
    {React.Children.map(props.children, child => {
      if (child) {
        return React.cloneElement(child);
      }
      else {
        return <ListBox.NoData/>
      }
    })}
  </ul>
);

ListBox.Item = props => <ListItem {...props} />;
ListBox.NoData = props => <NoData {...props} />;

export default ListBox;
