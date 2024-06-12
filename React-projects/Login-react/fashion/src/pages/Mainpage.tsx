import React from 'react';
import { useAuth } from '../components/AuthContext';

const Mainpage: React.FC = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>Please log in</div>;
  }

  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <button onClick={logout}>Logout</button>
      {user.role === 'admin' ? <AdminContent /> : <UserContent />}
    </div>
  );
};

const UserContent: React.FC = () => (
  <div>
    <p>This is the user content.</p>
  </div>
);

const AdminContent: React.FC = () => (
  <div>
    <p>This is the admin content.</p>
    <button>Edit Content</button>
  </div>
);

export default Mainpage;
