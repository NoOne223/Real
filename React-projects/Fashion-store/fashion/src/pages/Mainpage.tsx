import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeader from '../components/UserHeader';
import { AdminContent, UserContent } from './ContentComponents';

const Mainpage: React.FC = () => {
  const location = useLocation();
  const { role, user } = (location.state as { role?: string, user?: { name: string; avatar: string } }) || {};

  return (
    <div>
      {role === 'admin' ? (
        <>
          
          <AdminContent />
        </>
      ) : (
        <>
          <UserHeader user={user} />
          <UserContent />
        </>
      )}
    </div>
  );
};

export default Mainpage;
