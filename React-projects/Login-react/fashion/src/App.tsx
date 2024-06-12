import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Mainpage from './pages/Mainpage';
import { AuthProvider } from './components/AuthContext';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Forminfo from './components/Forminfo';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  const handleFormSwitch = () => {
    setShowSignup(!showSignup);
  };

  const handleSignupSuccess = () => {
    setShowSignup(false);
  };

  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/login" element={
    //         showSignup ? (
    //           <Signup onFormSwitch={handleFormSwitch} onSignupSuccess={handleSignupSuccess} />
    //         ) : (
    //           <Login onFormSwitch={handleFormSwitch} />
    //         )
    //       } />
    //       <Route path="/main" element={<Mainpage />} />
    //       <Route path="*" element={<Navigate to="/login" />} />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
    <div>
      <Forminfo></Forminfo>
    </div>
  );
}

export default App;
