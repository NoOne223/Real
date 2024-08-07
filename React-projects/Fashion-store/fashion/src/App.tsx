import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Mainpage from './pages/Mainpage';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forminfo from './components/Forminfo';
import Products from './pages/Products';
import UserProp from './components/User/UserProp';
import Onsale from './pages/Onsale';
import Cart from './pages/Cart';
import Admin from './components/Admin/Admin';

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
            path="/" 
            element={signedUp ? 
              (<Navigate to="/forminfo" />) : 
              showSignup ? 
                (<Signup onFormSwitch={handleFormSwitch} onSignupSuccess={handleSignupSuccess} />) : 
                (<UserProp />)
            }
          />
          <Route 
            path="/login" 
            element={<Login />} 
          />
          <Route
            path="/signup"
            element={<Signup onFormSwitch={handleFormSwitch} onSignupSuccess={handleSignupSuccess} />}
          />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/forminfo" element={<Forminfo role={role} />} />
          <Route path="/products" element={<Products />} />
          <Route path="/onsale" element={<Onsale />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
