// src/services/api.js
const API_URL = process.env.REACT_APP_API_URL;

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${API_URL}/events`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const fetchEventById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/events/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error);
    throw error;
  }
};

export const fetchGuests = async (id) => {
  try {
    const response = await fetch(`${API_URL}/events/${id}/guests`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching event guests with id ${id}:`, error);
    throw error;
  }
};