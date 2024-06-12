import React, { useState, ChangeEvent } from 'react';
import { useAuth } from '../components/AuthContext';
import 'firebase/auth';
import firebase from './Firebase';

interface LoginProps {
  onFormSwitch: () => void;
}

const Login: React.FC<LoginProps> = ({ onFormSwitch }) => {
  const [role, setRole] = useState('user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const { login } = useAuth();

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleLogin = () => {
    if (role === 'admin' && adminKey !== 'admin123') {
      alert('Invalid admin key');
      return;
    }
    
    login(role);
  };

  return (
    <div className='login-bg flex items-center h-screen'>
      <div className='mx-auto'>
        <form className='form flex flex-col gap-y-5 bg-white' onSubmit={(e) => e.preventDefault()}>
          <div className='text-center'>
            <h4 className='text-5xl font-bold'>Welcome</h4>
            <select
              className='select mt-3 border-2 border-solid rounded-md py-1 px-3'
              value={role}
              onChange={handleRoleChange}
            >
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className=''>Username</span>
            <input
              className='input-form'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className=''>Password</span>
            <input
              className='input-form'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {role === 'admin' && (
            <div className='admin-key'>
              <div className='flex flex-col gap-y-2'>
                <span className=''>Admin key</span>
                <input
                  className='input-form w-1/3 text-center'
                  type='text'
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
          <div>
            <button className='btn bg-black text-white w-full uppercase' onClick={handleLogin}>
              Log in
            </button>
          </div>
          <div className='flex justify-between'>
            <a
              id='SignupForm'
              className='form-click'
              onClick={onFormSwitch}
            >
              Didn't have account? Create one!
            </a>
            <a className='form-click'>Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
