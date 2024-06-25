import React from 'react';
import UserProp from '../components/User/UserProp';


export const AdminContent: React.FC = () => (
  <div>
    <p>This is the admin content.</p>
    {/* Add other admin-specific UI components here */}
  </div>
);

export const UserContent: React.FC = () => (
  <div>
    {
      <UserProp />
    }
  </div>
);
