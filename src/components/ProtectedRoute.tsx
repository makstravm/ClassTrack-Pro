import { Navigate, Outlet } from "react-router-dom";
import { RoutePath } from "../types";
import { useUserContext } from "../context/userContext";

export const ProtectedRoute = () => {
  const { user, isLoading } = useUserContext();

  if (isLoading) {
    return <div>...................................Loading</div>;
  }
  if (!user) {
    return <Navigate to={RoutePath.LOGIN} replace />;
  }

  return <Outlet />;
};
