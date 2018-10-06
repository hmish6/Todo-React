import React from "react";

const NoData = props => (
  <div className="no-data">
    {React.Children.map(props.children, child => React.cloneElement(child))}
  </div>
);

export default NoData;
