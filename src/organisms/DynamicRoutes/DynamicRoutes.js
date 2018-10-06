import NoData from "../NoData/NoData";
import Loadable from "react-loadable";

const DynamicRoutes = module => {
  switch (module) {
    case "Form":
      return Loadable({
        loader: () =>
          import(/* webpackChunkName: "Form" */ "../../templates/Form/Form"),
        loading: NoData
      });
    case "Pending":
      return Loadable({
        loader: () =>
          import(/* webpackChunkName: "Pending" */ "../../templates/Pending/Pending"),
        loading: NoData
      });
    case "Completed":
      return Loadable({
        loader: () =>
          import(/* webpackChunkName: "Completed" */ "../../templates/Completed/Completed"),
        loading: NoData
      });
    default:
      return Loadable({
        loader: () =>
          import(/* webpackChunkName: "Startup" */ "../../templates/StartupTemplate/StartupTemplate"),
        loading: NoData
      });
  }
};

// const DynamicRoutes = Loadable({
//   loader: () => import("../../templates/Form/Form"),
//   loading: NoData
// });

export default DynamicRoutes;
