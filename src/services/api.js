// src/services/api.js
const API_URL = process.env.REACT_APP_API_URL;

const getToken = () => {
  return localStorage.getItem('event-manager-token');
};

const fetchWithAuth = async (url, options = {}) => {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchEvents = async () => {
  try {
    return await fetchWithAuth(`${API_URL}/events`);
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchEventById = async (id) => {
  try {
    return await fetchWithAuth(`${API_URL}/events/${id}`);
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error);
    throw error;
  }
};

export const fetchGuests = async (id) => {
  try {
    return await fetchWithAuth(`${API_URL}/events/${id}/guests`);
  } catch (error) {
    console.error(`Error fetching event guests with id ${id}:`, error);
    throw error;
  }
};

export const postEvent = async (event) => {
  try {
    return await fetchWithAuth(`${API_URL}/events`, {
      method: 'POST',
      body: JSON.stringify(event),
    });
  } catch (error) {
    throw error;
  }
}