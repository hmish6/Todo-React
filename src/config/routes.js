const routes = [
  {
    path: "/new",
    loadModule: "Form"
  },{
    path: '',
    exact: true,
    loadModule: "Startup"
  },
  {
    path: "/completed",
    loadModule: "Completed"
  },
  {
    path: "/pending",
    loadModule: "Pending"
  }
];

export default routes;
