import React from 'react';

export const AdminContent: React.FC = () => (
  <div>
    <p>This is the admin content.</p>
    {/* Add other admin-specific UI components here */}
  </div>
);

export const UserContent: React.FC = () => (
  <div>
    {
      <div className='container'>
        <div>
          <h1 className='uppercase font-pata text-3xl'>Welcome to our store</h1>
        </div>
      </div>
    }
  </div>
);
