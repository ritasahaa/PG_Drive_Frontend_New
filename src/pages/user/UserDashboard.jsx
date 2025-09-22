import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to new dashboard home
    navigate('/user/dashboard-home', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 text-lg">Redirecting to dashboard...</p>
      </div>
    </div>
  );
};

export default UserDashboard;
