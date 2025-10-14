import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Root from "../pages/Root";

export const routes = [
  {
    path: "",
    name: "Home",
    Component: Home,
    get to() {
      return this.path;
    },
  },
];

export const router = createBrowserRouter([
  {
    path: "",
    Component: Root,
    children: routes.map((route) => ({
      path: route.path,
      Component: route.Component,
    })),
  },
]);
