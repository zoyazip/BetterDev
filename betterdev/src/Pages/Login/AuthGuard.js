import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {

    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
