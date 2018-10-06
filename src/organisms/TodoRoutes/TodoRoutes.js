import React from "react";

import { Route } from "react-router-dom";
import DynamicRoutes from "../DynamicRoutes/DynamicRoutes";

const TodoRoutes = ({ loadModule, ...rest }) => {
  return <Route {...rest} component={DynamicRoutes(loadModule)} />;
};

export default TodoRoutes;
