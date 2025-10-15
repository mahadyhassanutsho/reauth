import { useLocation, Navigate } from "react-router";

import { useAuth } from "../context/AuthContext";
import { routes } from "../lib/router";
import Loading from "../components/ui/Loading";

export default function ProtectedRoute({ children }) {
  const { currentUser, pending } = useAuth();
  const location = useLocation();

  if (pending) return <Loading loadingText="Loading user session" />;

  if (!currentUser)
    return <Navigate to={routes.login.path} state={location.pathname} />;

  return <>{children}</>;
}
