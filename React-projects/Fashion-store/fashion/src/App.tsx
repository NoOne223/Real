import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Mainpage from './pages/Mainpage';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forminfo from './components/Forminfo';
import Products from './pages/Products';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [role, setRole] = useState<string>('');

  const handleFormSwitch = () => {
    setShowSignup(!showSignup);
  };

  const handleSignupSuccess = (userRole: string) => {
    setShowSignup(false);
    setSignedUp(true);
    setRole(userRole);
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              signedUp ? (
                <Navigate to="/forminfo" />
              ) : showSignup ? (
                <Signup onFormSwitch={handleFormSwitch} onSignupSuccess={handleSignupSuccess} />
              ) : (
                <Login onFormSwitch={handleFormSwitch} />
              )
            }
          />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/forminfo" element={<Forminfo role={role} />} />
          <Route path="/products" element={<Products />} /> {/* Ensure this route is defined */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
