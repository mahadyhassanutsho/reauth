import { createBrowserRouter } from "react-router";

import ProtectedRoute from "../routes/ProtectedRoute";
import Home from "../pages/Home";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export const routes = {
  home: {
    path: "",
    name: "Home",
    element: <Home />,
  },
  login: {
    path: "/login",
    name: "Login",
    element: <Login />,
  },
  register: {
    path: "/register",
    name: "Register",
    element: <Register />,
  },
  profile: {
    path: "/profile",
    name: "Profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
};

export const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: Object.values(routes).map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);
