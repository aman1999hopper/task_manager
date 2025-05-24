import { Navigate, useLocation } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/authSlice";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, role }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();
  const userRole = localStorage.getItem("role");

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  // Check if the user has the required role
 if (role && userRole !== role) return <Navigate to="/unauthorized" />;

  return children;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    role: PropTypes.string,
};

export default ProtectedRoute;
