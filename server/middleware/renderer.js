import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import StartupTemplate from "../../src/templates/StartupTemplate/StartupTemplate";
import Form from "../../src/templates/Form/Form";
import Pending from "../../src/templates/Pending/Pending";
import Completed from "../../src/templates/Completed/Completed";

const path = require("path");
const fs = require("fs");

const getRouteComponent = (param) => {
  switch(param) {
    case '/new':
      return Form
    case '/pending':
      return Pending
    case '/completed':
      return Completed
    default:
      return StartupTemplate
  }
}

export default (req, res) => {
  const filePath = path.resolve(".", "build", "index.html");
  const Component = getRouteComponent(req.path);
  console.log(Component);

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }
    const html = ReactDOMServer.renderToString(
      <StaticRouter context={{}}>
        <Component />
      </StaticRouter>
    );

    return res.send(
      htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
};
