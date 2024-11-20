import { useState } from 'react';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';

import {postEvent} from '../../services/api';

import './new-event.css';
import Alert from '../../components/alert/alert';

function NewEvent() {
    const navigate = useNavigate();

    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventNotes, setEventNotes] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await postEvent({ eventName, eventDate, notes: eventNotes });
        goHome();
      } catch(e) {
        setError(e.message || 'Error al crear el evento');
      }
    };

    const goHome = () => {        
      navigate('/');
    }


    return (
      <div>
        {error && <Alert message={error} onClose={() => setError(null)} />}
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