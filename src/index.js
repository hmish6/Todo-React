import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./templates/App/App";
import BrowserRouter from "react-router-dom/BrowserRouter";
import StartupTemplate from "./templates/StartupTemplate/StartupTemplate";

ReactDOM.hydrate(
  <BrowserRouter>
    <StartupTemplate />
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to use client side routing after initial page load use:
//<BrowserRouter>
//<App />
//</BrowserRouter>

// If you dont want to use server side rendering change hydrate to render and use:
//<BrowserRouter>
//<App />
//</BrowserRouter>



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
