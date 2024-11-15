// src/components/Layout.js
import React from 'react';

import './Layout.css';

function Layout({ children }) {
  return (
    <div>
      <header className='flex-column'>
        Event Manager
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>© 2023 My App</p>
      </footer>
    </div>
  );
}

export default Layout;