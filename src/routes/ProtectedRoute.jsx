import { useLocation, Navigate } from "react-router";

import { useAuth } from "../context/AuthContext";
import { routes } from "../lib/router";

export default function ProtectedRoute({ children }) {
  const { currentUser, pending } = useAuth();
  const location = useLocation();

  if (pending) return <span className="loading loading-ring loading-xl"></span>;

  if (!currentUser)
    return <Navigate to={routes.login.path} state={location.pathname} />;

  return <>{children}</>;
}
