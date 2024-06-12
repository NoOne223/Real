import React, { useState, ChangeEvent } from 'react';
import firebase from './Firebase';
require('firebase/auth');

interface SignupProps {
  onFormSwitch: () => void;
  onSignupSuccess: (role: string) => void; // Update the type of onSignupSuccess to accept a role
}

const Signup: React.FC<SignupProps> = ({ onFormSwitch, onSignupSuccess }) => {
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const confirmPass = e.target.value;
    setConfirmPassword(confirmPass);
    setPasswordMatch(confirmPass === password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!passwordMatch) {
      alert('Passwords do not match');
      return;
    }

    const isValid = email && username && password && confirmPassword && passwordMatch;

    if (isValid) {
      if (role === 'admin') {
        if (username.includes('@admin')) {
          const randomKey = Math.random().toString(36).substr(2, 8);
          alert(`Sign up successful! Your admin key is: ${randomKey}`);
          console.log('Signup successful!');
          console.log('Form Data:', {
            role,
            email,
            username,
            password,
            confirmPassword,
            adminKey: randomKey,
          });

          // TODO: Submit form data to your server or API
          onSignupSuccess(role); // Pass the role back to the parent component
        } else {
          alert("Username for admin role must contain '@admin'");
          return;
        }
      } else {
        alert('Sign up successful!');
        console.log('Signup successful!');
        console.log('Form Data:', {
          role,
          email,
          username,
          password,
          confirmPassword,
          adminKey: null,
        });

        // TODO: Submit form data to your server or API
        onSignupSuccess(role); // Pass the role back to the parent component
      }
    } else {
      alert('Please fill out all fields correctly');
    }
  };

  return (
    <div className='login-bg flex items-center h-screen'>
      <div className='mx-auto'>
        <form className='form flex flex-col gap-y-5 bg-white' onSubmit={handleSubmit}>
          <div className='text-center'>
            <h4 className='text-5xl font-bold'>Sign up for</h4>
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
            <span className=''>Email</span>
            <input 
              className='input-form' 
              type='email' 
              value={email}
              onChange={handleEmailChange}
              required 
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className=''>Username</span>
            <input 
              className='input-form' 
              type='text' 
              value={username}
              onChange={handleUsernameChange}
              required 
            />
            {role === 'admin' && (
              <p className='admin-note italic text-red-700'>
                You should put '@admin' to create admin account
              </p>
            )}
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className=''>Password</span>
            <input
              className={`input-form ${!passwordMatch && 'border-red-500 text-red-500'}`}
              type='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className='flex flex-col gap-y-2'>
            <span className=''>Confirm password</span>
            <input
              className={`input-form ${!passwordMatch && 'border-red-500 text-red-500'}`}
              type='password'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {!passwordMatch && (
              <span className='text-red-500'>Passwords do not match</span>
            )}
          </div>
          <div>
            <button className='btn bg-black text-white w-full uppercase' type='submit'>Sign up</button>
          </div>
          <div className='flex justify-between'>
            <a
              id='LoginForm'
              className='form-click cursor-pointer'
              onClick={onFormSwitch}
            >
              Already have an account? Log in!
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
