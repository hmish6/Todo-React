import React from "react";
import { withRouter } from "react-router-dom";

import routes from "../../config/routes";

import TodoRoutes from "../../organisms/TodoRoutes/TodoRoutes";

import "./App.css";

const App = (props) => {
  return <>
    {routes.map((route, i) => (
    <TodoRoutes key={i} {...route} {...props}/>
  ))}
  </>
}

export default withRouter(App);
