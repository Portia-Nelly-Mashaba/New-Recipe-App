import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
