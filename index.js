import express from "express";

import serverRenderer from "./server/middleware/renderer";

const PORT = 2003;
const path = require("path");
const app = express();
const router = express.Router();
// router.use("^/$", serverRenderer);
router.use(
  express.static(path.resolve("build"), { maxAge: "30d" })
);
app.use(router);
app.get("*", serverRenderer)
app.listen(PORT, error => {
  if (error) {
    return console.log("something bad happened", error);
  }

  console.log("listening on " + PORT + "...");
});
