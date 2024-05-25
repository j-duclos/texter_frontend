import React, { useState } from 'react';
import Messages from './components/Messages';
import Login from './components/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') !== null);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? <Messages /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;