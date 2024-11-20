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
import SignUp from './pages/signup/signup';
import Login from './pages/login/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path="/event-detail/:id" element={<EventDetail />} />
        <Route path="/event-detail/:id/invite" element={<Invite />} />
      </Routes>
    </Layout>
  </Router>
);

reportWebVitals();
