import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  console.log("App Com")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log('useEffect')
    const isLogin = localStorage.getItem('isLogin');
    if (isLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem("isLogin", 'true')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogin')
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
