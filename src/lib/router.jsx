import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const routes = {
  home: {
    path: "",
    name: "Home",
    Component: Home,
  },
  login: {
    path: "/login",
    name: "Login",
    Component: Login,
  },
  register: {
    path: "/register",
    name: "Register",
    Component: Register,
  },
};

export const router = createBrowserRouter([
  {
    path: "",
    Component: Root,
    children: Object.values(routes).map((route) => ({
      path: route.path,
      Component: route.Component,
    })),
  },
]);
