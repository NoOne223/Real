import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../components/User/UserHeader';
import { AdminContent, UserContent } from './ContentComponents';

const Mainpage: React.FC = () => {
  const location = useLocation();
  const { role } = (location.state as { role?: string, user?: { name: string; avatar: string } }) || {};

  return (
    <div>
      {role === 'admin' ? (
        <>
          <AdminContent />
        </>
      ) : (
        <>
          <UserContent />
        </>
      )}
    </div>
  );
};

export default Mainpage;
