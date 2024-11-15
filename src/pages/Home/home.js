import './home.css';

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchEvents } from '../../services/api';

function Home() {
    const navigate = useNavigate();

    const [events, setEvents] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getEvents();
    }, []);

    const getEvents = async () => {
        try {
            const eventsData = await fetchEvents();
            setEvents(eventsData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    
  return (
    <div className="container">
        <section className='flex-row'>
            <h2>Mis eventos</h2>
            <button className="btn new-event" onClick={() => navigate('/new-event')}>+</button>
        </section>
        <section className="events-section">
            <ul className="events">
                {events.map(event => (
                    <li className="flex-row" key={event.id}>
                        <span>{event.event_name}</span>
                        <span>{event.event_date}</span>
                        <div className="actions flex-row">
                            <EditIcon onClick={() => navigate(`/event-detail/${event.id}`)} />
                            <DeleteIcon />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </div>
  );
}

export default Home;