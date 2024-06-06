import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleFormSwitch = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div>
      {showSignup ? (
        <Signup onFormSwitch={handleFormSwitch} />
      ) : (
        <Login onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default App;
