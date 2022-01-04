import React from 'react';
import { Navigate } from 'react-router-dom';

const Dashboard = function Dashboard({
  user,
}) {
  if (!user) {
    return (
      <Navigate to="/auth/log-in" />
    );
  }

  return (
    <div>Dashboard</div>
  );
};

export default Dashboard;
