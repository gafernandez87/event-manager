// src/components/AlertError.js
import React from 'react';
import './alert.css';

const Alert = ({ message, onClose }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="alert-error">
      <span className="alert-error-message">{message}</span>
      <button className="alert-error-close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;