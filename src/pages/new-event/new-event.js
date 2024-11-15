import { useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

import './new-event.css';

function NewEvent() {
    const navigate = useNavigate();

    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventNotes, setEventNotes] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica para crear el evento
      console.log('Evento creado:', { eventName, eventDate, eventNotes });
    };

    const goHome = () => {        
      navigate('/');
  }

    return (
      <div>
        <BackIcon onClick={goHome} className="icon"/>
        <h1 className="text-center mt-3">Nuevo Evento</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="eventName">Nombre del Evento</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Fecha del Evento</label>
            <input
              type="date"
              id="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventNotes">Notas</label>
            <textarea
              id="eventNotes"
              value={eventNotes}
              onChange={(e) => setEventNotes(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Crear</button>
        </form>
      </div>
    );
}

export default NewEvent;