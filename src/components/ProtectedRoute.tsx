import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { RoutePath } from "../constant/enums";

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
