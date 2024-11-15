import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Styles
import './index.css';
import './global.css';

// Pages
import Layout from './components/Layout';
import Home from './pages/Home/home';
import NewEvent from './pages/new-event/new-event';
import EventDetail from './pages/event-detail/event-detail';
import Invite from './pages/invite/invite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-event" element={<NewEvent />} />
          <Route path="/event-detail/:id" element={<EventDetail />} />
          <Route path="/event-detail/:id/invite" element={<Invite />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
  </React.StrictMode>
);

reportWebVitals();
