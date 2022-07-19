import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/authContext";
const RequiresAuth = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ from: location }} to="/SignIn" replace />
  );
};

export { RequiresAuth };
