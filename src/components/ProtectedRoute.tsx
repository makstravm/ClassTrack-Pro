import { getAuth } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { RoutePath } from "../types";

export const ProtectedRoute = () => {
  const isUser = !!getAuth().currentUser;
  if (!isUser) return <Navigate to={RoutePath.LOGIN} replace />;
  return <Outlet />;
};
