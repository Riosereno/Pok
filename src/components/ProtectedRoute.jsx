import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) return <>{children}</>;
  else return <Navigate to="/" />;
};

export default ProtectedRoute;