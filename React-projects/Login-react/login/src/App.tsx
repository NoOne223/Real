import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleFormSwitch = () => {
    setShowSignup(!showSignup);
  };

  const handleSignupSuccess = () => {
    // Set showSignup to false to switch back to the Login component
    setShowSignup(false);
  };

  return (
    <div>
      {showSignup ? (
        <Signup onFormSwitch={handleFormSwitch} onSignupSuccess={handleSignupSuccess} />
      ) : (
        <Login onFormSwitch={handleFormSwitch} />
      )}
    </div>
  );
}

export default App;
