// src/components/Layout.js
import React, { useEffect, useState } from 'react';

import './Layout.css';
import { ReactComponent as LogoutIcon } from '../assets/icons/logout.svg';
import { useNavigate } from 'react-router-dom';

function Layout({ children }) {

  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('event-manager-token');
    setToken(token);
  },[]);

  const logout = () => {
    localStorage.removeItem('event-manager-token');
    setToken(null);

    // redirect to login
    navigate('/login');
  }

  return (
    <div>
      <header className='flex-row'>
        Event Manager
        {token && <LogoutIcon className="icon" onClick={logout}/>}
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2024 My App</p>
      </footer>
    </div>
  );
}

export default Layout;